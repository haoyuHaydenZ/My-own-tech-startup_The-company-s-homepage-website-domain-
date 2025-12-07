// src/composables/useTabs.ts
import { Ref, ref } from 'vue';
import { useAnim } from '@/composables/useAnim';

export interface TabItem {
  name: string;
  label: string;
}

export function useTabs() {
  const currentTab: Ref<string> = ref('home');
  const mainContentHtml: Ref<string> = ref('');

  function initializeTabs(tabList: TabItem[]): void {
    if (tabList.length) {
      currentTab.value = tabList[0].name;
    }
  }

  async function updateMainContent(tabName: string): Promise<void> {
    currentTab.value = tabName;

    try {
      const res = await fetch(`/pageScript/${tabName}.html`);
      mainContentHtml.value = await res.text();

      // 如果有额外的 JSON 数据
      try {
        const dataRes = await fetch(`/json/${tabName}.json`);
        await dataRes.json();
        // TODO: 在这里处理数据映射到页面
      } catch {
        console.warn(`No JSON for tab ${tabName}`);
      }

      useAnim(); // 启动滚动动画

    } catch {
      mainContentHtml.value = `<h2>404</h2><p>无法加载页面：${tabName}</p>`;
    }
  }

  return {
    currentTab,
    mainContentHtml,
    initializeTabs,
    updateMainContent
  };
}
