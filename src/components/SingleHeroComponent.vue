<template>
  <div class="doctor-profile">
    <div class="doctor-info">
      <img class="doctor-img" :src="url" />
      <div class="doctor-details">
        <h3 class="doctor-name">{{ name }}</h3>
        <p class="doctor-specialty">{{ specialise }}</p>
        <p class="doctor-description">
          {{ truncatedDescription }} <a href="#">More</a>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Ourhero",
  props: ["name", "url", "specialise", "description"],

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
      }
    }
  }
}
</style>
