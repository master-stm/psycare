<template>
  <nav id="header-menu">
    <img src="../assets/images/logo-176-163.png" alt="logo" />
    <a
      v-for="nav in navMenu"
      :key="nav.label"
      class="home"
      style="cursor: pointer"
      @click="scroll(nav.to)"
      >{{ nav.label }}</a
    >

    <q-btn
      outline
      color="secondary"
      class="auth-buttons"
      size="0.7em"
      label="Sign in / Sign up"
      @click="routeToAuthPage"
    />
  </nav>
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      isMenuOpen: false,
      navMenu: [
        {
          label: "Home",
          to: "#header-menu",
        },
        {
          label: "About",
          to: "#about-section",
        },
        {
          label: "Our Heroes",
          to: "#our-heroes",
        },
        {
          label: "Reviews",
          to: "#reviews",
        },
      ],
    };
  },
  methods: {
    scroll(elementID) {
      console.log(this.$refs);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    routeToAuthPage() {
      this.$router.push("/auth-page");
    },
  },
};
</script>

<style lang="scss" scoped>
#header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #fff;
  padding: 10px;
  font-size: 1.2rem;
  opacity: 0;
  animation: header 2s ease-in-out forwards;

  img {
    height: 4.5em;
  }

  a {
    color: #61e7f3;
    text-decoration: none;
    margin-right: 10px;
    transform: translateY(-5em);
    animation: menu 2.5s ease-in-out forwards;
  }
}

.auth-buttons {
  display: flex;
  animation: menu 2.5s ease-in-out forwards;

  a {
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #fff;
    color: #333;
    margin-left: 10px;
  }
}
@keyframes menu {
  from {
    transform: translateY(-5em);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes header {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 600px) {
}
@media (max-width: 600px) {
  .header-menu {
    flex-direction: column;
    padding: 20px;

    a {
      margin-bottom: 10px;
    }
  }

  .auth-buttons {
    flex-direction: column;

    a {
      margin-top: 10px;
      margin-left: 0;
    }
  }
}
</style>
