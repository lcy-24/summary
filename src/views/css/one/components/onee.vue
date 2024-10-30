<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="说说你对盒子模型的理解?" name="1">
        <div>盒子模型可以分成： W3C 标准盒子模型 IE 怪异盒子模型</div>
        <div>
          标准盒子模型
          <span>盒子总宽度 = width + padding + border + margin;</span>
          <span>盒子总高度 = height + padding + border + margin</span>
          也就是，width/height 只是内容高度，不包含 padding 和 border值
        </div>
        <div>
          IE 怪异盒子模型
          <span>盒子总宽度 = width + margin;</span>
          <span>盒子总高度 = height + margin;</span>
        </div>
      </el-collapse-item>
      <el-collapse-item
        title="css选择器有哪些？优先级？哪些属性可以继承？"
        name="2"
      >
        <div>
          关于css属性选择器常用的有： id选择器（#box），选择id为box的元素
          类选择器（.one），选择类名为one的所有元素
          标签选择器（div），选择标签为div的所有元素 后代选择器（#box
          div），选择id为box元素内部所有的div元素
          子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素
          相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素
          群组选择器（div,p），选择div、p的所有元素
        </div>
        <div>
          优先级
          <span>内联 > ID选择器 > 类选择器 > 标签选择器</span>
        </div>
      </el-collapse-item>
      <el-collapse-item title="说说em/px/rem/vh/vw区别?" name="3">
        <div>
          px：绝对单位，页面按精确像素展示
          em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算，整个页面内1em不是一个固定的值
          rem：相对单位，可理解为root em, 相对根节点html的字体大小来计算
          vh、vw：主要用于页面视口大小布局，在页面布局上更加方便简单
        </div>
      </el-collapse-item>
      <el-collapse-item
        title="css中，有哪些方式可以隐藏页面元素？区别?"
        name="4"
      >
        <div>
          通过css实现隐藏元素方法有如下： display:none visibility:hidden
          opacity:0 设置height、width模型属性为0 position:absolute
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>

<style lang="scss" scoped>
:deep(.el-collapse-item__wrap) {
  padding-left: 10px !important;
}

:deep(.el-collapse-item__header) {
  padding-left: 10px !important;
  font-size: 22px !important;
}

:deep(.el-collapse-item__content) {
  font-size: 20px !important;
}
</style>
