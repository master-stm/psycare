<template>
  <nav id="header-menu">
    <a v-for="nav in navMenu" :key="nav.label" class="home" :href="nav.to">{{
      nav.label
    }}</a>

    <q-btn
      outline
      color="yellow-6"
      class="auth-buttons"
      size="1em"
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
          label: "Chat",
          to: "#chat-page",
        },
        {
          label: "Our Heroes",
          to: "#our-heroes",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    routeToAuthPage() {
      // this.$router.push("/auth");
      alert("Auth");
    },
  },
};
</script>

<style lang="scss" scoped>
#header-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 10px;
  font-size: 1.2rem;
  opacity: 0;
  animation: header 2s ease-in-out forwards;

  a {
    color: #fff;
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
