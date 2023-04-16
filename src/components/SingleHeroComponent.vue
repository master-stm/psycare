<template>
  <div class="doctor-profile">
    <div class="doctor-info">
      <img class="doctor-img" :src="url" />
      <div class="doctor-details">
        <h3 class="doctor-name">{{ name }}</h3>
        <p class="doctor-specialty">{{ specialise }}</p>
        <p class="doctor-description">

          {{ truncatedDescription }} <a @click="more = !more">More</a>
        </p>
      </div>
    </div>
  </div>
  <q-dialog v-model="more">
      <q-card>
        <q-card-section>
          <div class="text-h6">Profile</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ description }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>


<script>
export default {
  name: "Ourhero",
  props: ["name", "url", "specialise", "description"],
data(){
  return{
    more:false,
  }
},
  computed: {
    truncatedDescription() {
      return this.$props.description.slice(0, 550) + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
.doctor-profile {
  max-width: fit-content;
  height: 40vh;
  .doctor-info {
    display: flex;
    margin: 3.5em auto;

    .doctor-img {
      border-radius: 20%;
      height: 150px;
      margin-right: 30px;
      width: 150px;
      border: 1.5px solid #03c988;
      box-shadow: rgb(0, 0, 0.5) 0px 8px 10px 0px;
    }
    .doctor-details {
      flex: 1;

      .doctor-name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        color: rgb(97, 231, 243);
        margin-right: 300px;
      }
      .doctor-specialty {
        font-size: 18px;
        font-style: italic;
        margin-bottom: 20px;
        border-bottom: solid 1.5px #03c988;
        color: #03c988;
      }

      .doctor-description {
        font-size: 1em;
        line-height: 1.5;
        margin: 0;
        color: rgb(46, 190, 212);
        border: solid 2px #03c988;
        border-radius: 30px;
        box-shadow: rgb(0, 0, 0.5) 0px 8px 10px 0px;
        padding: 10px;

        a{
          color: blue;
cursor: pointer;
        }
      }
    }
  }
}

</style>
