<template>
  <!-- v-on은 @와도 같다. | v-on:submit="" -> @submit="" 
       prevent은 form의 from의 기본구조인 제출하고 페이지이동하는 새로고침을 막을수 있다. -->
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" name="" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="text" name="" id="password" v-model="password" />
    </div>
    <div>
      <label for="nickname">nickname: </label>
      <input type="text" name="" id="nickname" v-model="nickname" />
    </div>
    <button type="submit">회원가입</button>
    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',

      //log
      logMessage: '',
    };
  },

  mounted() {},

  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      // const red = await registerUser(userData);
      // console.log(res.data);

      // res.data 바로 꺼내는 방법
      const { data } = await registerUser(userData);
      console.log(data.username);

      // es6백틱을 이용해서 출력 `(~)
      // 자바스크립트 변수를 문자열 안으로 들고 올수 있게됨
      this.logMessage = `${data.username}님이 가입되었습니다`;

      this.initForm();
    },
    initForm() {
      // form에 데이터 비우기
      // 자바스크립트는 타입이 없는 언어이기 때문에 null로 넣어도됨
      // 그치만 타입을 넣어주는게 버그 줄이는 길
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style lang="scss" scoped></style>
