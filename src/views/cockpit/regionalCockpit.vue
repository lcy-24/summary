<template>
  <div style="padding: 300px; font-size: 40px" @click="xx">
    {{ count }}-----{{ count1 }}------{{ count2 }}-----{{ obj.xx.count }}
  </div>
  <div @click="x">
    {{ count1 }}---{{ bb.xx }}
    一般ref定义基础数据类型string，number，boolean等，更适用于声明响应式状态的的主要api
    reactive定义复杂数据类型object，array，map,set集合类型等,缺点：不能替换整个对象，对解构不好
    {{ id + 1 }} ---- {{ countx + 1 }} ---- {{ object.id }}
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive, Ref, ref } from 'vue'
defineOptions({
  name: 'RegionalCockpit',
})
const countx = ref(0)
const object = { id: ref(1) }
const { id } = object
interface Bb {
  xx: string
}
const bb: Bb = reactive({
  xx: '1',
})
const count = ref(0)
// 第一种写法
const count1 = ref<string | number>('2020')
// 第二种写法
const count2: Ref<string | number> = ref('11')
const xx = () => {
  count.value++
  count1.value = count2.value
}
async function x() {
  count1.value = 10
  await nextTick()
}
const obj = ref({
  xx: { count: 0 },
  cc: ['ffo', 'ss'],
})
</script>

<style scoped></style>
