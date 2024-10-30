<template>
  <el-switch
    v-model="themeConfig.isDark"
    @change="onAddDarkChange"
    inline-prompt
    :active-icon="Sunny"
    :inactive-icon="Moon"
  />
</template>

<script setup lang="ts" name="SwitchDark">
import { useTheme } from '@/hooks/useTheme'
import { useSettingsStore } from '@/store/modules/settings'
import { Moon, Sunny } from '@element-plus/icons-vue'
import { computed } from 'vue'
const settingsStore = useSettingsStore()

const { switchDark } = useTheme()

const themeConfig = computed(() => settingsStore.themeConfig)

const onAddDarkChange = () => {
  switchDark()
}
</script>
