import router from '@/router'
import Cookies from 'js-cookie'

router.beforeEach((to, from, next) => {
  const { redirectAlreadyLogin, requiredLogin } = to.meta
  if (Cookies.get('token')) {
    // 有token代表登录了
    console.log(to)
    if (redirectAlreadyLogin) {
      // alert(11)
      next('/home')
    } else {
      next()
    }
  } else {
    // 没有登录
    if (requiredLogin) {
      next('/login')
    } else {
      next()
    }
  }
})
