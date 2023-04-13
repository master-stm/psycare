<template>
  <q-page>
    <HeroComponent />
    <!-- <tempHeroComponentVue /> -->
    <OurHeroes />
  </q-page>
</template>

<script>
import tempHeroComponentVue from "../components/tempHeroComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import OurHeroes from "../components/OurHeroesComponent.vue";
export default {
  name: "IndexPage",
  components: {
    HeroComponent,
    OurHeroes,
    tempHeroComponentVue,
  },
};
</script>
<style>
</style>
