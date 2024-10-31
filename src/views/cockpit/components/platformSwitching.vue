<!-- 顶部组件----切换用户 -->
<template>
  <div class="screen-top-nav" :style="{ color: props.color }">
    <div class="admin">
      <el-dropdown trigger="click">
        <div class="name">
          <div>{{ 'admin' }}</div>
          <img
            style="width: 20px; height: 20px"
            src="@/assets/images/cockpit/expand.png"
          />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>测试</el-dropdown-item>
            <el-dropdown-item>用户</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts" name="platformSwitching">
const props = defineProps({
  color: {
    type: String,
    default: '#A8F0FF',
  },
  type: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.screen-top-nav {
  cursor: pointer;
  width: 150px;
  font-size: 18px;
  font-family: 'PingFangSC', sans-serif;
  font-weight: 400;
  color: #0e2368;
  font-weight: 400;
  font-style: normal;
  margin: 10px 0px;
  .admin {
    display: flex;
    .name {
      margin-top: 5px;
      display: flex;
      font-size: 18px;
      font-family: 'PingFangSC', sans-serif;
      font-weight: 400;
      color: #0e2368;
      font-weight: 400;
      font-style: normal;
    }
  }
}
</style>
