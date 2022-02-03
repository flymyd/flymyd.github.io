import uaParser from 'ua-parser-js'

/**
 * 判断设备类型
 * @return 0 PC, 1 移动端, 2 平板
 */
export function getDeviceType(): number {
  const ua = uaParser(navigator.userAgent)
  switch (ua.device.type) {
    case 'mobile':
      return 1
    case 'tablet':
      return 2
    default:
      return 0
  }
}

/**
 * 获取窗口可用宽高
 */
export function getWindowSize(): object {
  const height: number = document.documentElement.clientHeight
  const width: number = document.documentElement.clientWidth
  return {
    height: height,
    width: width
  }
}
