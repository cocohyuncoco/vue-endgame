import Vue from 'vue';

// 뷰 라우터 연결
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

// Vue.use - 플러그인을 실행하기 위해 필요한 코드
// 뷰 라우터가 모든 컴포넌트에 적용되게 플러그인 연결
Vue.use(VueRouter);

// VueRouter를 이용해서 인스턴스 만들고
// 인스턴스를 default로 꺼내면
// VueRouter 인스턴스가 파일에서 밖으로 나가게됨. 이게 export 역할
// default는 하나의 변수나 파일이 나가게 하는것
export default new VueRouter({
  // URL에 /#/ 제거하는 속성
  // 주의 - 마지막 배포시 사용하는 서버마다 URL을 먹지 않기위해 설정해줘야하는게 있음
  mode: 'history',

  // routes - 이 속성은 뷰 라우터에 의해서 제어되는 페이지 정보(라우팅 정보) 를 담는 배열
  routes: [
    // redirect 설정 -login페이지를 기본 페이지로 만들고 싶을때 path에 '/'를 넣고 redirect로 '/login' 페이지로 이동시킨다.
    {
      path: '/',
      // redirect: '/login',
      redirect: '/login',
    },
    {
      path: '/test', // URL
      // component: LoginPage, // 이동할 컴포넌트명

      // 코드 스플리팅 문법 (이것 사용시 상단 import는 필요없음)
      component: () => import('@/views/test.vue'),
    },
    {
      path: '/login', // URL
      // component: LoginPage, // 이동할 컴포넌트명

      // 코드 스플리팅 문법 (이것 사용시 상단 import는 필요없음)
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      // component: SignupPage,
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      // path에 *을 넣으면 위 URL을 제외한 모든 URL이란 뜻
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
