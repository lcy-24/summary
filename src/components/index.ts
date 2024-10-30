import type { App, Component } from 'vue'

import { Auth } from './Auth'
import { IconifyIcon } from './IconifyIcon'
import { ProTable } from './ProTable'
import { ScreenLock } from './ScreenLock'
import { SearchForm } from './SearchForm'
import { SvgIcon } from './SvgIcon'
import { SwitchDark } from './SwitchDark'
import { SwitchWaterMark } from './SwitchWaterMark'
import { UploadImg, UploadImgs } from './Upload'

const Components: {
  [propName: string]: Component
} = {
  SvgIcon,
  SearchForm,
  ProTable,
  Auth,
  SwitchDark,
  SwitchWaterMark,
  IconifyIcon,
  UploadImgs,
  UploadImg,
  ScreenLock,
}

export default {
  install: (app: App) => {
    Object.keys(Components).forEach((key) => {
      app.component(key, Components[key])
    })
  },
}
