<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">
      <onee :info="sharedInfo" @update-info="handleUpdateInfo"></onee>
    </el-tab-pane>
    <el-tab-pane label="Config" name="second">
      <twoo :info="sharedInfo"></twoo>
    </el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'One',
})
import type { TabsPaneContext } from 'element-plus'
import { ref } from 'vue'
import onee from './components/onee.vue'
import twoo from './components/twoo.vue'
const activeName = ref('first')

const sharedInfo = ref('xx')

const handleUpdateInfo = (newInfo: string) => {
  sharedInfo.value = newInfo
}
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  font-size: 32px;
  font-weight: 600;
  color: #6b778c;
}
</style>
