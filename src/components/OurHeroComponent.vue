<template>
  <h2 class="profile-title">‎ ‎ ‎ ‎ ‎ ‎ ‎ Our heroes: ‎ ‎ ‎ ‎ ‎ ‎ ‎</h2>
  <div class="doctor-profile">
    <div class="doctor-info">
      <img class="doctor-img" v-bind:src="url" />
      <div class="doctor-details">
        <h3 class="doctor-name">{{ name }}</h3>
        <p class="doctor-specialty">{{ specialise }}</p>
        <p class="doctor-description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Ourhero",
  props: ["name", "url", "specialise", "description"],
};
</script>


<style>
.doctor-profile {
  margin: 0 auto;
  margin-top: 250px;
  max-width: 600px;
}

.profile-title {
  color: rgb(104, 104, 208);
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  /* position: absolute; */
  left: 150px;
  top: 55px;
  border-color: rgb(93, 214, 93);
  border: solid 4px;
  border-radius: 10px;
  background-color: white;
}

.doctor-info {
  display: flex;
  margin-bottom: 40px;
}

.doctor-img {
  border-radius: 20%;
  height: 150px;
  margin-right: 30px;
  width: 150px;
  border: 1.5px solid #03c988;
}

.doctor-details {
  flex: 1;
}

.doctor-name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: rgb(104, 104, 208);
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
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  color: rgb(104, 104, 208);
  border: solid 2px #03c988;
  padding: 10px;
}
</style>
