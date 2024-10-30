import { DEFAULT_PRIMARY } from '@/config/config'
import { defineStore } from 'pinia'
import type { SettingsState, ThemeConfigProps } from './model/settingsModel'
export const useSettingsStore = defineStore({
  id: 'app-settings',
  state: (): SettingsState => ({
    collapse: false,
    refresh: false, // 刷新页面
    themeConfig: {
      primary: DEFAULT_PRIMARY,
      isDark: false,
    },
    watermarkActive: false, // 水印
  }),

  actions: {
    changeCollapse() {
      this.collapse = !this.collapse
    },
    setRefresh() {
      this.refresh = !this.refresh
    },
    setThemeConfig(themeConfig: ThemeConfigProps) {
      this.themeConfig = themeConfig
    },
    setWatermarkss(value: boolean) {
      console.log(value, 'setWatermarkss')
      this.watermarkActive = value
    },
  },
  persist: true,
})
