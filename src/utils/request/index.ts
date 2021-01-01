import Taro from '@tarojs/taro'

const baseUrl = 'https://www.fastmock.site/mock/8758c50fc11f2cdf32329dc978115c51/stark'

export default function request(options) {
  const {
    url,
    method = 'GET',
    data = {},
    header = {},
    isShowLoading = true,
  } = options
  const timeout = 30 * 1000
  isShowLoading ? showLoading() : ''

  return Taro.request({
    url: baseUrl + url,
    method,
    data,
    header,
    timeout,
  })
    .then(res => {
      isShowLoading ? hideLoading() : ''

      if (res.statusCode === 200) {
        if (res.data.code === 200) {
          return Promise.resolve(res.data.result)
        } else {
          Taro.showToast({ title: res.data.desc, icon: 'none' })
        }
      } else {
        return Promise.reject(res)
      }
    })
    .catch(res => {
      Taro.showToast({ title: JSON.stringify(res), icon: 'none' })
    })
  // .finally(() => {
  //   // 真机上小程序不支持？？
  //   isShowLoading ? hideLoading() : ''
  // })
}

const showLoading = () => {
  Taro.showLoading({ title: '加载中' })
  Taro.showNavigationBarLoading()
}

const hideLoading = () => {
  Taro.hideNavigationBarLoading()
  Taro.hideLoading()
}
