<template>
  <!-- v-on은 @와도 같다.
       v-on:submit="" -> @submit="" -->
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
