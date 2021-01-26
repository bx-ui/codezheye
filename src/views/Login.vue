<template>
  <div class="h-100 d-flex flex-column a-center j-center">
    <p>登录者也</p>
    <el-form style="width: 400px" :rules="loginRule" ref="loginForm">
      <el-form-item prop="">
        <el-input placeholder="请输入用户名" v-model="email"></el-input>
      </el-form-item>
       <el-form-item prop="">
        <el-input placeholder="请输入密码" v-model="password"></el-input>
      </el-form-item>
       <el-form-item>
        <el-button class="w-100" type="primary" :loading="loading" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">

import { ref, getCurrentInstance, reactive } from 'vue'
import { useStore } from 'vuex'
import { RootState } from '@/store'
export default {
  setup () {
    // getVerification({ id: 3 })
    const { ctx } = getCurrentInstance()
    const store = useStore<RootState>()
    // 登录逻辑
    // const loginForm = reactive({
    //   username: ref(''),
    //   password: ref('')
    // })
    const email = ref('bx18812096731@163.com')
    const password = ref('bingxin2921')
    const loginRule = {
      username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    }
    const loading = ref(false)
    const submit = async () => {
      // console.log(ctx.$refs.loginForm)
      await store.dispatch('userLogin', { email: email.value, password: password.value })
      await store.dispatch('userInfo')
    }
    return {
      email,
      password,
      loading,
      loginRule,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
