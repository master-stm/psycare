<template>
  <q-page>
    <HeroComponent />
<AboutUs/>
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="bg-primary text-white">
        <q-bar>
          <q-space />

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <ChatComponent/>
        </q-card-section>


      </q-card>
    </q-dialog>
    <OurHeroes />
    <Reviews />
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn @click="dialog = !dialog" fab icon="chat" color="primary" />
          </q-page-sticky>
  </q-page>
</template>

<script>
import HeroComponent from "../components/HeroComponent.vue";
import AboutUs from '../components/AboutUs.vue'
import OurHeroes from "../components/OurHeroesComponent.vue";
import Reviews from "../components/ReviewsComponent.vue";
import ChatComponent from '../components/ChatComponent.vue'
export default {
  name: "IndexPage",
  components: {
    HeroComponent,
    AboutUs,
    OurHeroes,
    Reviews,
    ChatComponent
  },
  data(){
    return{
      dialog: false,
      maximizedToggle: true
  }
  }
};
</script>
<style>
</style>
