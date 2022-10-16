<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="password" v-model="password" />
    </div>
    <button type="submit">로그인</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },

  mounted() {},

  methods: {
    async submitForm() {
      try {
        // 비지니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        const { data } = await loginUser(userData);
        console.log(data.user.nickname);
        this.logMessage = `${data.user.nickname}님 환영합니다`;
        this.initFrom();
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response);
      }
    },
    initFrom() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
