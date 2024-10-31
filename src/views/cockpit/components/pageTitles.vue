<!-- 顶部组件 -->
<template>
  <div class="pageMain">
    <div class="page-title-container">
      <div class="tab-left">
        <div class="guide" @click="$router.push('/index')">
          <img class="leftArrow" src="@/assets/images/cockpit/left.png" />
          <div class="leftReturn">返回</div>
        </div>
        <TimingNew :color="color" />
        <div class="leftCon">
          <div
            v-for="item in tabListLeft"
            :key="item.id"
            :class="[
              'tab-left-item',
              { 'tab-left-active': item.id === tabIndex },
            ]"
            @click="changeTab(item)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="page-title2">
        {{ '学习后台' }}
      </div>
      <div class="tab-right">
        <div
          style="
            width: calc(100% -120px);
            display: flex;
            justify-content: flex-start;
          "
        >
          <div
            v-for="item in tabListRight"
            :key="item.id"
            :class="[
              'tab-right-item',
              { 'tab-right-active': item.id === tabIndex },
            ]"
            @click="changeTab(item)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="rightBtn">
          <div
            class="out-btn"
            @click="outExport(true)"
            v-if="source === 'ywtb'"
          >
            <img src="@/assets/images/cockpit/out-btn.png" />
            导出
          </div>
          <platformSwitching :color="color"></platformSwitching>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import platformSwitching from './platformSwitching.vue';
import TimingNew from './TimingNew.vue';
export default {
  name: 'pageTitles',
  components: {
    TimingNew,
    platformSwitching,
  },
  props: {
    tabOption: {
      type: Object,
      default: () => {
        return {}
      },
    },
    color: {
      type: String,
      default: '#0E2368',
    },
    source: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      preparationTime: '',
      tab: {},
      tabIndex: 1,
      tabListLeft: [],
      tabListRight: [],
      UserProfile: {},
      exportShow: false,
    }
  },
  watch: {
    tabOption: {
      handler(n) {
        this.tabIndex = n.activeIndex
      },
      deep: true,
    },
  },
  mounted() {
    this.tab = this.tabOption
    // 分割tab数组，分为左右两侧
    this.tabListLeft = this.tab.tabList.splice(0, 2)
    console.log(this.tabListLeft, '1111')
    // this.tabListRight = this.tab.tabList.splice(0, 1)
  },
  methods: {
    outExport(booll) {
      this.exportShow = booll
    },
    changeTab(item) {
      this.tabIndex = item.id
      console.log(this.tabIndex, '2222')
      this.$router.push(item.url)
      // 确保 DOM 更新后才执行样式检查
    },
  },
}
</script>

<style lang="scss" scoped>
::v-deep .el-range-editor.el-input__inner {
  width: 270px !important;
}
::v-deep .date-picker-custom-icon.el-range-editor.el-input__inner {
  width: 285px !important;
  border-radius: 20px;
  border: 1px solid #c4cbe0;
  background: linear-gradient(180deg, #fafbff 0%, #c9d6ff 100%);
  height: 40px;
}
::v-deep .date-picker-custom-icon.el-date-editor .el-range-input {
  font-family: PingFangSC, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #0e2368;
  background: linear-gradient(180deg, #fafbff 0%, #c9d6ff 100%);
}
::v-deep .date-picker-custom-icon.el-range-editor--medium .el-range-separator {
  font-family: PingFangSC, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #0e2368;
  margin-top: 5px;
}
::v-deep .date-picker-custom-icon.el-date-editor .el-range__icon {
  display: none;
}
::v-deep .date-picker-custom-icon.el-date-editor .el-range__close-icon {
  margin-left: 4px;
  margin-top: 5px;
}
.pageMain {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 50px;
  padding-top: 58px;
  padding-left: 30px;
  padding-right: 30px;
  background-image: url('@/assets/images/cockpit/oneNetwork-title.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .page-title-container {
    display: flex;
  }

  .tab-left {
    width: 38%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .leftCon {
      margin-right: 80px;
      display: flex;
      align-items: center;
    }

    .tab-left-item {
      cursor: pointer;
      width: 159px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 18px;
      margin-left: -10px;
      font-family: 'PingFang-H', sans-serif;
      font-weight: 500;
      color: #283b79;
      background-image: url('@/assets/images/cockpit/pageItem0.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .tab-left-active {
      color: #ffa512;
      background-image: url('@/assets/images/cockpit/page-item0.png');
    }
  }
  .guide {
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 58px;
    height: 28px;
    border-radius: 14px;
    color: #0e2368;
    font-size: 12px;
    line-height: 28px;
    background: linear-gradient(180deg, #fafbff 0%, #c9d6ff 100%);
    opacity: 0.99;
    border-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1),
        rgba(177, 197, 255, 1)
      )
      2 2;
  }
  .leftArrow {
    width: 12px;
    height: 12px;
    margin-top: 8px;
  }
  .leftReturn {
    width: 24px;
    height: 20px;
    font-family: Alibaba-PuHuiTi, sans-serif;
    font-weight: normal;
    font-size: 12px;
    color: #0e2368;
    line-height: 20px;
    text-align: left;
    font-style: normal;
    margin: 3px;
  }
  .page-title2 {
    position: relative;
    bottom: 40px;
    width: 26%;
    font-size: 38px;
    text-align: center;
    font-family: 'AlimamaShuHeiTi', sans-serif;
    font-weight: bold;
    color: #f7f9ff;
    cursor: pointer;
  }

  .tab-right {
    width: 38%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tab-right-item {
      cursor: pointer;
      width: 159px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 18px;
      margin-left: -10px;
      font-family: 'PingFang-H', sans-serif;
      font-weight: 500;
      color: #283b79;
      background-image: url('@/assets/images/cockpit/page-item1.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .tab-right-active {
      color: #ffa512;
      background-image: url('@/assets/images/cockpit/pageItem2.png');
    }

    .out-btn {
      cursor: pointer;
      width: 58px;
      height: 28px;
      background: #3564fd;
      border-radius: 14px;
      text-align: center;
      line-height: 28px;
      border: 1px solid #3564fd;
      color: #fff;
      margin: 10px 30px;
    }
  }
  .rightBtn {
    display: flex;
  }
}
</style>
