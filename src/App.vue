<template>
  <div>
    <div>
      <header>
        <!-- to="" 라는 태그 안에 URL을 넣어서 페이지 전환  -->
        <router-link to="/login">로그인</router-link> |
        <router-link to="/signup">회원가입</router-link>
      </header>
      <!--  <router-view> 라는 태그가 있어야 URL이 변경되면 페이지가 바뀜  -->
      <!-- 이 태그가 없으면 URL만 바뀌고 화면은 안바뀜 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueEndgameApp',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
