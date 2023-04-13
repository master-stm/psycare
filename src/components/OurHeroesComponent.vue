<template>
  <div>
    <Ourhero
      v-for="hero in heroesList"
      :key="hero.id"
      :name="hero.name"
      :specialise="hero.specialise"
      :description="hero.description"
      :url="hero.url"
    />
  </div>
</template>


<script>
import Ourhero from "../components/OurHeroComponent.vue";
import heroesData from "../database/heroesDB.json";
export default {
  data() {
    return {
      heroesList: [],
    };
  },
  components: { Ourhero },
  mounted() {
    this.heroesList = heroesData.heroes;
  },
};
</script>



<style>
body {
  background-color: whitesmoke;
}
</style>
