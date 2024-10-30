<template>
  <el-switch
    v-model="watermarkActive"
    @change="handleChange"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
  />
</template>

<script setup lang="ts" name="SwitchWaterMark">
import { useTheme } from '@/hooks/useTheme'
import { useSettingsStore } from '@/store/modules/settings'
import { removeWatermark } from '@/utils/watermark'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { computed, onMounted, watchEffect } from 'vue'
const settingsStore = useSettingsStore()

const watermarkActive = computed({
  get: () => settingsStore.watermarkActive,
  set: (value) => {
    settingsStore.setWatermarkss(value)
  },
})

const handleWatermark = (isActive: boolean) => {
  const { setWatermarks } = useTheme()
  if (isActive) {
    setWatermarks(true)
  } else {
    setWatermarks(false)
  }
}

const handleInitWatermark = () => {
  handleWatermark(watermarkActive.value)
}

const handleChange = () => {
  handleWatermark(watermarkActive.value)
}

onMounted(() => {
  handleInitWatermark()
})

watchEffect((onInvalidate) => {
  handleWatermark(watermarkActive.value)

  onInvalidate(() => {
    // 清理函数
    removeWatermark() // 如果需要，可以在这里移除水印或其他副作用
  })
})
</script>
