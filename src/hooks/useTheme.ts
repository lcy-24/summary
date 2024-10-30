import { useSettingsStore } from '@/store/modules/settings'
import { getDarkColor, getLightColor } from '@/utils/color'
import { removeWatermark, setWaterMark } from '@/utils/watermark'
import { ElMessage } from 'element-plus'
import moment from 'moment'
import { computed } from 'vue'
import { DEFAULT_PRIMARY } from '../config/config'
export const useTheme = () => {
  const settingsStore = useSettingsStore()
  const themeConfig = computed(() => settingsStore.themeConfig)

  // 切换暗黑模式
  const switchDark = () => {
    const body = document.documentElement as HTMLElement
    if (themeConfig.value.isDark) body.setAttribute('class', 'dark')
    else body.setAttribute('class', '')
    changePrimary(themeConfig.value.primary)
  }
  //水印文字
  const setWatermarks = (isActive: boolean) => {
    console.log(isActive, 'setWatermarks')
    const watertxt = '加油'
    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
    if (isActive) {
      setWaterMark(
        watertxt || '',
        currentTime || '',
        'rgba(200, 200, 200, 0.2)',
      )
    } else {
      removeWatermark()
    }
  }

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    if (!val) {
      val = DEFAULT_PRIMARY
      ElMessage({
        type: 'success',
        message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`,
      })
    }
    settingsStore.setThemeConfig({ ...themeConfig.value, primary: val })
    document.documentElement.style.setProperty(
      '--el-color-primary',
      themeConfig.value.primary,
    )

    // 颜色加深或变浅
    for (let i = 1; i <= 9; i++) {
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${i}`,
        themeConfig.value.isDark
          ? `${getDarkColor(themeConfig.value.primary, i / 10)}`
          : `${getLightColor(themeConfig.value.primary, i / 10)}`,
      )
    }
  }

  // 初始化主题
  const initTheme = () => {
    switchDark()
    // changePrimary(themeConfig.value.primary)
  }
  return {
    initTheme,
    switchDark,
    changePrimary,
    setWatermarks,
  }
}
