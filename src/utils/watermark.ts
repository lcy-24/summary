/**
 * 水印添加方法
 */
const setWatermark = (str1: string, str2: string, style: string): string => {
  const id = '1.23452384164.123412415'
  const element = document.getElementById(id)
  if (element) {
    document.body.removeChild(element)
  }

  const can = document.createElement('canvas')
  can.width = 350
  can.height = 190

  const cans = can.getContext('2d')!
  cans.rotate((-20 * Math.PI) / 180) // 水印旋转角度
  cans.font = '26px Vedana'
  cans.fillStyle = style
  cans.textAlign = 'center'
  cans.textBaseline = 'middle'
  cans.fillText(str1, can.width / 2, can.height) // 水印在画布的位置x，y轴
  cans.font = '15px Vedana'
  cans.fillText(str2, can.width / 2, can.height + 34)

  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '0px'
  div.style.right = '40px'
  // div.style.opacity = '0.15';
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  div.style.width = `${document.documentElement.clientWidth}px`
  div.style.height = `${document.documentElement.clientHeight}px`
  div.style.background = `url(${can.toDataURL('image/png')}) left top repeat`

  document.body.appendChild(div)

  return id
}

/**
 * 添加水印方法
 */
export const setWaterMark = (
  str1: string,
  str2: string,
  style: string,
): string => {
  let id = setWatermark(str1, str2, style)
  if (document.getElementById(id) === null) {
    id = setWatermark(str1, str2, style)
  }
  return id
}

/**
 * 移除水印方法
 */
export const removeWatermark = (): void => {
  const id = '1.23452384164.123412415'
  const element = document.getElementById(id)
  if (element) {
    document.body.removeChild(element)
  }
}
