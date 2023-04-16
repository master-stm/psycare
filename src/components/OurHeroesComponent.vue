<template>
  <section id="our-heroes">
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
        v-for="(doctor, i) in doctorsList"
        :key="doctor.id"
        :name="i"
        class="column no-wrap flex-center"
      >
        <SingleHero
        class="row justify-around"
          :name="doctor.name"
          :specialise="doctor.specialise"
          :description="doctor.description"
          :url="doctor.image"
        />
      </q-carousel-slide>
    </q-carousel>
  </section>
</template>


<script>
import SingleHero from "../components/SingleHeroComponent.vue";

import {getAllData} from '../firebase/FireStoreFunctions'
export default {
  data() {
    return {
      doctorsList: [],
      slide: 0,
    };
  },
  components: { SingleHero },
  async mounted() {
    this.doctorsList =  await getAllData("doctors")

  },
};
</script>



<style>
body {
  background-color: whitesmoke;
}
.profile-title {
  color: #61E7F3;
  font-size: 36px;
  font-weight: bold;
  margin: 0.5em;
  padding: 0.5em;
  left: 150px;
  top: 55px;
  border: solid 4px #ACEB7E;
  border-radius: 10px;
  background-color: white;

}

</style>
