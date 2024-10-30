/* AuthState */
export interface SettingsState {
  collapse: boolean
  refresh: boolean
  themeConfig: ThemeConfigProps
  watermarkActive: boolean
}

export interface ThemeConfigProps {
  primary: string
  isDark: boolean
}
