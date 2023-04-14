<template>
  <div class="auth-page">
    <img class="logo" src="../assets/images/logo-4800-4092.png" />
    <LoginComponent v-if="isLogin" @swap="swap" />
    <RegisterComponent v-else @swap="swap" />
  </div>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";
import RegisterComponent from "../components/RegisterComponent.vue";
export default {
  components: {
    LoginComponent,
    RegisterComponent,
  },
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    swap() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style scoped lang="scss">
.auth-page {
  text-align: center;

  .logo {
    width: 25em;
    height: auto;
    margin: 0;
  }
}
</style>
