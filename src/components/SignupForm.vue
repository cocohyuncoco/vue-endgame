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
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
    };
  },

  mounted() {},

  methods: {
    submitForm() {
      console.log('제출');
    },
  },
};
</script>

<style lang="scss" scoped></style>
