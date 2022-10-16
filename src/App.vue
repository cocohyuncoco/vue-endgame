<template>
  <div>
    <div>
      <!--  <router-view> 라는 태그가 있어야 URL이 변경되면 페이지가 바뀜  -->
      <!-- 이 태그가 없으면 URL만 바뀌고 화면은 안바뀜 -->
      <AppHeader></AppHeader>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
  components: { AppHeader },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
