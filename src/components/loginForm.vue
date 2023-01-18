<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button :disabled="!isUsernameValid || !password" type="submit">
      로그인
    </button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      logMessage: '',
    };
  },

  mounted() {},
  computed: {
    // 이 속성은 데이터 변화에 따라서 내용을 자동으로 계산해주는 연산 식
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
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
      } catch (error) {
        // 에러 핸들링할 코드
        // console.log(error.response);
        this.logMessage = error.response.data;
      } finally {
        // ininFrom() 함수가 중복될 경우 finally 함수를 이용해서 끝에다 넣으면 된다
        this.initFrom();
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
