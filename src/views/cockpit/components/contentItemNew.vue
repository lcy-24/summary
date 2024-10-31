<!-- eslint-disable -->
<!-- 标题组件 -->
<template>
  <div class="content-item" :style="{ width: props.width, height: props.height }">
    <div class="content-title" v-if="props.carTitle">
      <div class="title" :title="props.carTitle">{{ props.carTitle }}</div>
      <!-- 街道排名 排序按钮 -->
      <div class="order-btn" v-if="props.carTitle == 'xx'">
        <img
          v-if="orderType == 'desc'"
          @click="changeorderType('asc')"
          class="oderby"
          src="@/assets/images/cockpit/desc.png"
        />
        <img
          v-if="orderType == 'asc'"
          @click="changeorderType('desc')"
          class="oderby"
          src="@/assets/images/cockpit/asc.png"
        />
      </div>
      <div class="department" v-if="props.carTitle == 'CSS'">
        <div class="typeName">类型</div>
        <img class="typeImg" src="@/assets/images/cockpit/down.png" />
        <!-- <el-select v-model="value" placeholder="类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select> -->
      </div>
      <!-- <div class="top-tab1">
        <div class="block">
          <el-date-picker
            v-model="preparationTime"
            type="daterange"
            prefix-icon="''"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="date-picker-custom-icon"
          ></el-date-picker>
          <i class="el-icon-time" v-if="!preparationTime" ref="iconDate"></i>
        </div>
      </div> -->
      <div
        style="
          width: 180px;
          height: 28px;
          border-radius: 3px;
          border: 1px solid #c4cbe0;
          display: flex;
        "
      >
        <div
          style="
            width: 144px;
            height: 20px;
            font-family: PingFangSC, PingFang SC, sans-serif;
            font-weight: 400;
            font-size: 12px;
            color: #0e2368;
            line-height: 20px;
            text-align: left;
            font-style: normal;
            margin: 3px 6px 3px 6px;
          "
        >
          2024.09.28 至 2024.10.16
        </div>
        <img
          style="width: 14px; height: 14px; margin: 6px 0px"
          src="@/assets/images/cockpit/time.png"
        />
      </div>
    </div>
    <div class="content-body" :class="props.carTitle ? 'content-bodyA' : 'content-bodyB'">
      <slot />
    </div>
    <!-- eslint-disable-next-line no-unexpected-multiline -->
  </div>
</template>

<script setup lang="ts" name="contentItemNew">
import { ref } from 'vue';
const props = defineProps({
  carTitle: {
    type: String,
    default: () => {
      return ''
    },
  },
  //是否显示切换器
  isTab: {
    type: String,
    default: () => {
      return ''
    },
  },
  width: {
    type: String,
    default: '100%',
  },
  height: {
    type: String,
    default: '25%',
  },
  page: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['selectTab', 'selectOrderType'])
// const router = useRouter() // 使用 useRouter 钩子
// const currentTab = ref(0)
const orderType = ref('desc')
// const changeTab = (tab: any, index: any) => {
//   currentTab.value = index
//   emit('selectTab', currentTab.value)
// }
const changeorderType = (type: any) => {
  orderType.value = type
  emit('selectOrderType', orderType.value)
}
// const jump = () => {
//   if (!props.page) {
//     return
//   }
//   router.push(props.page)
// }
</script>

<style lang="scss" scoped>
.order-btn {
  margin-right: 25px;
  margin-left: 5px;
  margin-top: 2px;
  cursor: pointer;
}
.typeName {
  width: 24px;
  height: 20px;
  font-family: PingFangSC, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #0e2368;
  line-height: 20px;
  text-align: left;
  font-style: normal;
  margin: 3px 6px 3px 6px;
}
.typeImg {
  width: 12px;
  height: 12px;
  margin: 8px 0px;
}
.oderby {
  width: 18px;
  height: 17px;
}
.block {
  width: 180px;
  position: relative;
  width: fit-content;
  .el-icon-time {
    position: absolute;
    top: 50%;
    right: 10px;
    z-index: 9;
    color: #c0c4cc;
    font-size: 14px;
    transform: translateY(-50%);
    margin-top: 1px;
    color: #0e2368;
  }
}
::v-deep .date-picker-custom-icon.el-range-editor.el-input__inner {
  width: 180px !important;
  border-radius: 3px;
  border: 1px solid #c4cbe0;
  background: #eff3fe;
  height: 30px;
}
::v-deep .date-picker-custom-icon.el-date-editor .el-range-input {
  font-family: PingFangSC, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #0e2368;
  background: #eff3fe;
  margin-left: -6px;
  width: 66px;
}
::v-deep .date-picker-custom-icon.el-range-editor--medium .el-range-separator {
  font-family: PingFangSC, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #0e2368;
  margin-bottom: 4px;
  margin-right: 10px;
}
::v-deep .date-picker-custom-icon.el-date-editor .el-range__icon {
  display: none;
}
::v-deep .date-picker-custom-icon.el-date-editor .el-range__close-icon {
  margin-left: 4px;
}
::v-deep .el-range-editor.el-input__inner {
  width: 250px !important;
}
::v-deep .el-input.el-input--suffix {
  .el-input__inner {
    background: #f1f4ff;
    border-radius: 3px;
    border: 1px solid #3564fd;
    height: 28px;
  }
  .el-select__caret.el-input__icon.el-icon-arrow-up {
    line-height: 28px;
  }
  .el-input__inner::placeholder {
    color: #0e2368;
  }
  .el-icon-arrow-up:before {
    color: #0e2368;
  }
}
::v-deep .el-select-dropdown {
  // background-color: #151A47;
  border: 1px solid #323c8f;
  .el-select-dropdown__item {
    font-size: 15px;
    color: #6f79ce;
    font-weight: 200;
  }
}
::v-deep .el-select-dropdown__list {
  padding: 0;
}
// 箭头去掉
::v-deep .el-popper[x-placement^='bottom'] {
  margin-top: 6px;
}
::v-deep .el-popper .popper__arrow {
  display: none;
}
::v-deep .el-popper .popper__arrow::after {
  display: none;
}
::v-deep .el-select-dropdown__item.hover {
  // background: #4f58a366;
}
::v-deep .el-select-dropdown__item.selected {
  color: #b8bffc;
}
.content-item {
  // background: linear-gradient(270deg, #f5f7ff 0%, #ecf0ff 49%, #f5f7ff 100%);
  // box-shadow: 0px 6px 30px 0px rgba(14, 35, 104, 0.2);
  // border-radius: 12px;
  // border: 1px solid #ffffff;
  background: linear-gradient(180deg, #ecf2ff 0%, #ffffff 100%);
  // box-shadow: inset 0px 1px 0px 0px #FFFFFF;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.8);
  border-radius: 12px;
  margin-bottom: 15px;
  padding: 15px 20px 6px 20px;
  color: #0e2368;
  .content-title {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-family: 'PingFang-H', sans-serif;
      font-weight: 500;
      font-size: 20px;
    }
    .top-tab {
      cursor: pointer;
      display: flex;
      height: 24px;
      line-height: 24px;
      border-radius: 3px;
      .tab-item {
        width: 36px;
        text-align: center;
        background: #e6ecff;
        color: #0e2368;
      }
      .tab-item-active {
        color: #ffffff;
        border-radius: 3px;
        background: #3564fd;
      }
    }
    .top-select {
      height: 24px;
      width: 130px;
    }
    .department {
      display: flex;
      width: 60px;
      height: 28px;
      margin-left: 2px;
      margin-right: 2px;
      border-radius: 3px;
      border: 1px solid #c4cbe0;
      cursor: pointer;
    }
  }
  .content-body {
    width: 100%;
    .box {
      width: 100%;
      height: 100%;
    }
  }
  .content-bodyA {
    margin-top: 5px;
    height: calc(100% - 45px);
  }
  .content-bodyB {
    height: 100%;
  }
}
</style>
