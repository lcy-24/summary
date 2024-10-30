<template>
  <p>Info from Parent: {{ info }}</p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineOptions({
  name: 'Twoo',
})
const props = defineProps<{ info: string }>()
console.log(props.info)
</script>
