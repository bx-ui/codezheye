import request from '@/utils/request'

type loginType = {
  email: string;
  password: string;
}

export function loginIn (data: loginType) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

// 获取当前用户登录信息
export function loadUserInfo () {
  return request({
    url: '/api/user/current',
    method: 'get'
  })
}
