<!-- 顶部组件------时间 -->
<template>
  <div class="container" :style="{ color: props.color }">
    <div class="dates">{{ date }}</div>
    <div class="week">{{ week }}</div>
    <div class="times">{{ time }}</div>
  </div>
</template>

<script setup lang="ts" name="TimingNew">
import moment from 'moment';
import { onBeforeUnmount, onMounted, ref } from 'vue';
const props = defineProps({
  color: {
    type: String,
    default: '#A8F0FF',
  },
})
const currentTime = ref('')
const time = ref('')
const date = ref()
const timer = ref()
const week = ref('')
const getDate = () => {
  currentTime.value = moment().format('YYYY-MM-DD HH:mm')
  time.value = currentTime.value.split(' ')[1]
  date.value = currentTime.value.split(' ')[0]
}
const getWeekDate = () => {
  date.value = new Date()
  let day = date.value.getDay()
  let names = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  week.value = names[day]
}
onMounted(() => {
  timer.value = setInterval(() => {
    getDate()
  }, 100)
  getWeekDate()
}),
  onBeforeUnmount(() => {
    if (timer.value) {
      clearInterval(timer.value)
      timer.value = null
    }
  })
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  // width: 340px;
  font-family: 'PingFang-H', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #283b79;
  .times {
    margin-left: 8px;
  }
  .week {
    margin-left: 6px;
  }
}
</style>
