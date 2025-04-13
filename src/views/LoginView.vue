<template>
  <div class="login-page">
    <div class="login wrap">
      <div class="h1">管理员登录</div>
      <form @submit.prevent="handleLogin">
        <input 
          v-model="username"
          placeholder="管理员账号" 
          type="text">
        <input 
          v-model="password"
          placeholder="请输入管理员密码" 
          type="password">
        <div class="error-message" v-if="errorMsg">{{ errorMsg }}</div>
        <input value="登录" class="btn" type="submit">
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { notification } from 'ant-design-vue';


const router = useRouter()
const username = ref('')
const password = ref('')
const errorMsg = ref('')

const openNotification = (type, message, description) => {
  notification.open({
    type,
    message,
    description,
    placement: 'top',
    duration: 3
  })
}

const handleLogin = () => {
  // 验证用户名
  if (!username.value.trim()) {
    openNotification('warning', '提示', '请输入管理员账号')
    return
  }
  
  // 验证密码
  if (!password.value) {
    openNotification('warning', '提示', '请输入密码')
    return
  }

  if (password.value.length < 6 || password.value.length > 12) {
    openNotification('error', '错误', '密码长度必须在6-12位之间')
    return
  }
  
  // 模拟登录成功
  openNotification('success', '成功', '登录成功')
  // 登录成功后重定向到首页
  setTimeout(() => {
    router.push('/')
  }, 1000)
}
</script>

<style scoped>
.login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  }
  .login {
    width: 440px;
    height: 400px;
    background: #2c2c2c;
    padding: 47px;
    padding-bottom: 57px;
    color: #fff;
    border-radius: 17px;
    padding-bottom: 50px;
    font-size: 1.3em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .login input[type="text"],
  .login input[type="password"] {
    opacity: 1;
    display: block;
    border: none;
    outline: none;
    width: 100%;
    padding: 13px 18px;
    margin: 15px 0 0 0;
    font-size: 0.8em;
    border-radius: 100px;
    background: #3c3c3c;
    color: #fff;
  }

  .login input:focus {
    appearance: none;
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type=submit],
  .login input[type=button],
  .h1 {
    border: 0;
    outline: 0;
    width: 100%;
    padding: 13px;
    margin: 40px 0 0 0;
    border-radius: 500px;
    font-weight: 600;
    animation: bounce2 1.6s;
  }

  .h1 {
    padding: 0;
    position: relative;
    top: -35px;
    display: block;
    margin-bottom: -0px;
    font-size: 1.3em;
  }

  .btn {
    background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    color: #fff;
    padding: 16px !important;
    margin-top: 25px;
  }

  .btn:hover {
    background: linear-gradient(144deg, #1e1e1e , 20%,#1e1e1e 50%,#1e1e1e );
    color: rgb(255, 255, 255);
    padding: 16px !important;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .login input[type=text] {
    animation: bounce 1s;
    appearance: none;
    -webkit-appearance: none;
  }

  .login input[type=password] {
    animation: bounce1 1.3s;
  }

  .ui {
    font-weight: bolder;
    background: -webkit-linear-gradient(#B563FF, #535EFC, #0EC8EE);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE);
    border-image-slice: 1;
    display: inline;
  }

  .error-message {
    color: #ff4d4f;
    font-size: 0.8em;
    margin-top: 10px;
    text-align: center;
  }

  @media only screen and (max-width: 600px) {
    .login {
      width: 70%;
      padding: 3em;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(-250px);
      opacity: 0;
    }
  }

  @keyframes bounce1 {
    0% {
      opacity: 0;
    }

    40% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  @keyframes bounce2 {
    0% {
      opacity: 0;
    }

    70% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
</style>
