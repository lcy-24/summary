<!-- 智慧街道区域驾驶舱-----街道 -->
<template>
  <div class="streetWrapper">
    <pageTitles :tab-option="tabOption" color="#0E2368" source="ywtb" />
    <div class="streetMain">
      <div class="content-left">
        <contentItemNew width="100%" height="25%" carTitle="VUE">
          <lookBack></lookBack>
        </contentItemNew>
        <contentItemNew
          width="100%"
          height="25%"
          carTitle="REACT"
        ></contentItemNew>
      </div>
      <div class="content-right">
        <contentItemNew
          width="100%"
          height="25%"
          carTitle="CSS"
        ></contentItemNew>
        <contentItemNew
          width="100%"
          height="25%"
          carTitle="ES6"
        ></contentItemNew>
      </div>
      <div class="content-top">
        <div class="top-item" v-for="(item, index) in topList" :key="index">
          <div class="top-item-con" :class="'topNav-' + index">
            <div class="txt" :class="'num' + index">
              <!-- <SogCountTo
                class="total"
                :startVal="0"
                :endVal="Number(item.value)"
              /> -->
              <span>{{ item.value }}</span>
              <span class="unit">%</span>
            </div>
            <div class="title">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 点击展开收起图例的按钮 -->
    <div class="toggle-button" @click="toggleImage">
      <span class="toggle-text">{{ toggleText }}</span>
      <el-icon
        style="margin-left: -20px"
        class="toggle-icon"
        :class="{
          'el-icon-arrow-up': isImageShown,
          'el-icon-arrow-down': !isImageShown,
        }"
      ></el-icon>
      <transition name="fade">
        <div v-if="isImageShown" class="expand-content">
          <div
            v-for="(item, index) in imageList"
            :key="index"
            style="display: flex; margin-left: 10px"
          >
            <img
              :src="item.src"
              style="
                width: 21px;
                height: 26px;
                margin-left: 15px;
                margin-right: 10px;
                margin-top: 5px;
              "
            />
            <p
              style="
                font-family: PingFangSC, sans-serif;
                font-weight: 400;
                font-size: 12px;
                color: #283b79;
                text-align: left;
                font-style: normal;
              "
            >
              {{ item.title }}
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts" name="regionalCockpit">
import icon from '@/assets/images/cockpit/bssb.png'
import icon1 from '@/assets/images/cockpit/szhcg.png'
import { ref } from 'vue'
import contentItemNew from './components/contentItemNew.vue'
import lookBack from './components/lookBack.vue'
import pageTitles from './components/pageTitles.vue'
const isImageShown = ref(true)
const toggleText = ref('收起')
const imageList = ref([
  {
    src: icon,
    title: 'js',
  },
  {
    src: icon1,
    title: 'css',
  },
])
const topList = ref([
  { id: 0, label: '总体趋势', value: 75 },
  { id: 1, label: '满意率', value: 80 },
  { id: 2, label: '解决率', value: 70 },
  { id: 3, label: '响应率', value: 80 },
  { id: 4, label: '办理率', value: 70 },
])
const tabOption = ref({
  activeIndex: 1,
  partitionNum: 1,
  tabList: [
    { id: 0, name: '我的', url: '/cockpit/streetCockpit' },
    { id: 1, name: '其他', url: '/cockpit/regionalCockpit' },
  ],
})
const toggleImage = () => {
  isImageShown.value = !isImageShown.value
  toggleText.value = isImageShown.value ? '收起' : '展开'
}
</script>

<style lang="scss" scoped>
.toggle-button {
  width: 163px;
  height: 24px;
  background: linear-gradient(180deg, #ecf2ff 0%, #ffffff 100%);
  border-radius: 6px;
  position: fixed;
  top: 86%;
  left: 26%;
  cursor: pointer;
}

.toggle-text {
  display: inline-block;
  margin-left: 60px;
  margin-right: 30px;
  font-family: Alibaba-PuHuiTi, sans-serif;
  font-weight: normal;
  font-size: 14px;
  color: #3564fd;
  font-style: normal;
}

.expand-content {
  width: 163px;
  height: 80px;
  background: linear-gradient(180deg, #ecf2ff 0%, #ffffff 100%);
  border-radius: 6px;
  margin-top: 10px;
}

.streetWrapper {
  position: relative;
  height: 100%;
  width: 100%;

  .streetMain {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 900px;
    width: 100%;
    text-align: left;

    .content-left,
    .content-right {
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      backdrop-filter: blur(10px);
      padding-top: 118px;
      position: absolute;
      top: 0%;
      width: 22%;
      height: 100%;
      z-index: 60;
    }

    .content-top {
      position: absolute;
      top: 12%;
      left: 25%;
      width: 50%;
      height: 108px;
      z-index: 60;
      display: flex;
      justify-content: space-around;

      .top-item {
        cursor: pointer;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;

        .topNav-0 {
          background-image: url('@/assets/images/cockpit/topNav-0.png');
        }

        .topNav-1 {
          background-image: url('@/assets/images/cockpit/topNav-1.png');
        }

        .topNav-2 {
          background-image: url('@/assets/images/cockpit/topNav-2.png');
        }

        .topNav-3 {
          background-image: url('@/assets/images/cockpit/topNav-3.png');
        }
        .topNav-4 {
          background-image: url('@/assets/images/cockpit/topNav-4.png');
        }

        .top-item-con {
          width: 135px;
          height: 55px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          padding: 20px;
          font-size: 18px;
          font-weight: 500;
          color: #283b79;
          font-family: 'PingFang-H', sans-serif;

          .unit {
            font-size: 12px;
            font-weight: 400;
            color: #283b79;
            font-family: 'PingFang-H', sans-serif;
          }

          .total {
            font-family: 'PingFang-H', sans-serif;
            display: inline-block;
          }

          .txt {
            font-size: 36px;
          }

          .title {
            font-weight: 500;
          }
          .num0 {
            color: #03d6ff;
          }

          .num1 {
            color: #3564fd;
          }

          .num2 {
            color: #ffa512;
          }

          .num3 {
            color: #8967ff;
          }

          .num4 {
            color: #5cb84a;
          }
        }
      }
    }

    .content-left {
      left: 0;
      padding-left: 1%;
    }

    .content-right {
      right: 0;
      padding-right: 3%;
    }
  }
}
</style>
