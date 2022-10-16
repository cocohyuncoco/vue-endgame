<template>
  <div>
    <header>
      <!-- to="" 라는 태그 안에 URL을 넣어서 페이지 전환  -->
      <router-link to="/login">로그인</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
