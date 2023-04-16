<template>
  <div class="main">

  <q-layout view="lHh Lpr lFf">
    <HeaderMenu />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
  </div>

</template>

<script>
import HeaderMenu from "../components/HeaderMenu.vue";
export default {
  name: "MainLayout",
  components: {
    HeaderMenu,
  },
  data() {
    return {};
  },
};
</script>
