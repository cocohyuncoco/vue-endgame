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
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },

  mounted() {},

  methods: {
    submitForm() {
      axios.post();
    },
  },
};
</script>

<style lang="scss" scoped></style>
