<!-- 回头看 -->
<template>
  <div class="con">
    <div class="con-list">
      <div class="table-header">
        <span
          v-for="(category, index) in categories"
          :key="index"
          @click="selectCategory(category)"
          :class="{ selected: currentCategory === category }"
          :style="{
            width: '20%',
            margin: index > 0 ? '0px 12px 0px 12px' : '0',
          }"
        >
          <!-- {{ category }} -->
          <!-- <span v-if="category === '待处理'">({{ focusGroups[category].length }})</span> -->
          <!-- ({{ focusGroups[category].length }}) -->
          {{
            category +
            (category === '待处理问题'
              ? ` (${focusGroups[category].length})`
              : '')
          }}
        </span>
      </div>
      <div
        style="height: 135px; overflow-y: scroll; overflow-x: hidden"
        v-if="
          focusGroups[currentCategory] && focusGroups[currentCategory].length
        "
      >
        <div :data="focusGroups[currentCategory]" class="warp">
          <ul class="item">
            <li
              v-for="(item, index) in focusGroups[currentCategory]"
              :key="index"
            >
              <span
                class="item-name"
                v-text="item.name"
                :title="item.name"
              ></span>
              <span
                class="item-date"
                v-text="item.date"
                :title="item.date"
              ></span>
              <span class="item-status">
                <span class="btn" :class="getStatusClass(item.status)">
                  {{ item.status }}
                </span>
              </span>
              <span class="item-type">
                <span class="btn" :class="getWarningClass(item.type)">
                  {{ item.type }}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div v-else class="noData">
        <div
          style="
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <img
            style="width: 144px; height: 100px"
            src="@/assets/images/cockpit/defaultImg.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="lookBack">
import { ref } from 'vue';
const categories = ref(['待处理问题', '已处理问题', '不合规', '未评价', '匿名'])
const focusGroups = ref({
  待处理问题: [
    {
      name: '市场二路小区3号院',
      date: '2024.09.28',
      status: '已超时',
      type: '已超期',
    },
    {
      name: '市场二路小区3号院',
      date: '2024.09.28',
      status: '已作废',
      type: '快超期',
    },
    {
      name: '市场二路小区3号院',
      date: '2024.09.28',
      status: '已超时',
      type: '可控',
    },
    {
      name: '市场二路小区3号院',
      date: '2024.09.28',
      status: '已办结',
      type: '可控',
    },
  ],
  已处理问题: [],
  不合规: [],
  未评价: [],
  匿名: [],
})
const currentCategory = ref<string>('待处理问题')
const selectCategory = (category: string) => {
  currentCategory.value = category
}
const getStatusClass = (status: any) => {
  switch (status) {
    case '已超时':
      return 'org'
    case '已作废':
      return 'gray'
    case '已办结':
      return 'blue'
    default:
      return ''
  }
}
const getWarningClass = (type: any) => {
  switch (type) {
    case '已超期':
      return 'red'
    case '快超期':
      return 'org-warning'
    case '可控':
      return 'green'
    default:
      return ''
  }
}
</script>

<style lang="scss" scoped>
.noData {
  height: 150px;
  text-align: center;
  color: #999;
}
.table-header .selected {
  font-weight: 500;
  font-size: 14px;
  color: #3564fd;
}
.con {
  width: 100%;
  height: 100%;

  .con-list {
    height: 100%;
    overflow: hidden;
    .table-header {
      padding-left: 10px;
      padding-right: 10px;
      height: 34px;
      line-height: 34px;
      color: #283b79;
      font-weight: 500;
      background: #e3eaff;
      border-radius: 4px;
      font-size: 14px;
      font-family: 'PingFang-H', sans-serif;
      cursor: pointer;
    }
    .warp {
      width: 100%;
      padding-left: 10px;
      padding-right: 20px;
      overflow: hidden;
      .empty {
        color: #ffffff;
        font-size: 14px;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.7;
      }
      ul {
        cursor: pointer;
        list-style: none;
        padding: 0;
        margin-top: 10px;
        color: #0e2368;
        font-size: 14px;
        font-family: 'PingFang-H', sans-serif;

        li {
          display: block;
          height: 42px;
          line-height: 32px;
          display: flex;
        }
      }
      .item-name {
        color: #283b79;
        width: 35%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
      }

      .item-date {
        width: 23%;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #283b79;
      }
      .item-status,
      .item-type {
        width: 20%;
        display: inline-block;
        text-align: center;
      }

      .item-status .btn,
      .item-type .btn {
        display: inline-block;
        width: 52px;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        border-radius: 2px;
      }

      .btn.org {
        color: #f7a900;
        background: #fff9ef;
        border: 1px solid #fff9ef;
      }

      .btn.gray {
        color: #999999;
        background: #eceff4;
        border: 1px solid #eceff4;
      }

      .btn.blue {
        color: #3564fd;
        background: #f3f6ff;
        border: 1px solid #f3f6ff;
      }

      .btn.red {
        color: #e34242;
        border: 1px solid #e34242;
      }

      .btn.org-warning {
        color: #ffa512;
        border: 1px solid #ffa512;
      }

      .btn.green {
        color: #58ca42;
        border: 1px solid #58ca42;
      }
    }
  }
}
</style>
