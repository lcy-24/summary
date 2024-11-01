/**
 * @description 📚 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */

import { HOME_URL, LOGIN_URL } from '@/config/config'
import { RouteRecordRaw } from 'vue-router'

const LAYOUT = () => import('@/layouts/index.vue')

/**
 * @description 静态路由
 */
export const staticRoutes: RouteRecordRaw[] = [
  {
    path: LOGIN_URL,
    name: 'login',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/error-404.vue'),
  },
  {
    path: '/',
    name: 'LAYOUT',
    component: LAYOUT,
    redirect: HOME_URL,
    meta: {
      title: '工作台',
      icon: 'DataBoard',
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/workbench/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
          affix: true,
        },
      },
      {
        path: '/index/workbench',
        name: 'Statics',
        component: () => import('@/views/workbench/statics/index.vue'),
        meta: {
          title: '统计',
          icon: 'DataAnalysis',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/css',
    name: 'Css',
    component: LAYOUT,
    redirect: '/css/one',
    meta: {
      title: 'Css学习',
      icon: 'Menu',
    },
    children: [
      {
        path: '/css/one',
        name: 'CssOne',
        component: () => import('@/views/css/one/index.vue'),
        meta: {
          title: '第一集',
          icon: 'Grid',
          affix: false,
        },
      },
      {
        path: '/css/one/show/:id',
        component: () => import('@/views/css/one/show.vue'),
        meta: {
          title: '第一集详情',
          isHide: true,
          noAuth: true,
          icon: 'Grid',
        },
      },
      {
        path: '/css/two',
        name: 'CssTwo',
        component: () => import('@/views/css/two/index.vue'),
        meta: {
          title: '第二集',
          icon: 'Grid',
          affix: false,
        },
      },
    ],
  },
  // 此路由防止控制台出现No match found for location with path的警告
  {
    path: '/:catchAll(.*)',
    meta: {
      isHide: true,
    },
    component: () => import('@/views/error/error-404.vue'), //这个是我自己的路径
  },
  // 智慧街道区域驾驶舱--- 街道
  {
    path: '/cockpit/streetCockpit',
    name: 'cockpitStreetCockpit',
    component: () => import('@/views/cockpit/streetCockpit.vue'),
    meta: {
      title: '街道',
      icon: 'Menu',
    },
  },
  // 智慧街道区域驾驶舱--- 部门
  {
    path: '/cockpit/regionalCockpit',
    name: 'cockpitRegionalCockpit',
    component: () => import('@/views/cockpit/regionalCockpit.vue'),
    meta: {
      title: '部门',
      icon: 'Menu',
    },
  },
]

/**
 * @description 路由未找到
 */
export const notFoundRouter = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: '404',
}
