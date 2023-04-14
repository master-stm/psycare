<template>
  <div>
    <h2 class="profile-title">Our heroes:</h2>

    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      :autoplay="true"
      control-color="teal"
      prev-icon="arrow_left"
      next-icon="arrow_right"
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      arrows
      height="100%"
      class="text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide
        v-for="(hero, i) in heroesList"
        :key="hero.id"
        :name="i"
        class="column no-wrap flex-center"
      >
        <SingleHero
          :name="hero.name"
          :specialise="hero.specialise"
          :description="hero.description"
          :url="hero.url"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>


<script>
import SingleHero from "../components/SingleHeroComponent.vue";
import heroesData from "../database/heroesDB.json";
export default {
  data() {
    return {
      heroesList: [],
      slide: 0,
    };
  },
  components: { SingleHero },
  mounted() {
    this.heroesList = heroesData.heroes;
  },
};
</script>



<style>
body {
  background-color: whitesmoke;
}
.profile-title {
  color: rgb(104, 104, 208);
  font-size: 36px;
  font-weight: bold;
  margin: 0.5em;
  padding: 10px 5px;

  left: 150px;
  top: 55px;
  border-color: rgb(93, 214, 93);
  border: solid 4px;
  border-radius: 10px;
  background-color: white;
}
</style>
