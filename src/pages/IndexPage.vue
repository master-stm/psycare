<template>
  <q-page>
    <HeroComponent />
    <!-- <tempHeroComponentVue /> -->

    <OurHeroes />
    <Reviews />
  </q-page>
</template>

<script>
import tempHeroComponentVue from "../components/tempHeroComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import OurHeroes from "../components/OurHeroesComponent.vue";
import Reviews from "../components/ReviewsComponent.vue";
export default {
  name: "IndexPage",
  components: {
    HeroComponent,
    OurHeroes,
    tempHeroComponentVue,
    Reviews,
  },
};
</script>
<style>
</style>
