<template>
  <div class="main-container">
    <div class="bar">
      <h4 class="log">Log in</h4>
      <h4 class="about">
        <a
          id="linkabout"
          href="#aboutparg"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </h4>
      <h4 class="hero"><a id="heroid" href="">Our Heroes</a></h4>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <div class="cont">
      <p id="aboutparg">
        At Psychology Care, we focused on the third Goal of the United Nation`s
        goals which it is "good health and well - being". We believe that
        everyone deserves access to compassionate and effective mental health
        care. We are dedicated to breaking down barriers to treatment, including
        affordability, accessibility, and stigma.
      </p>
      <img id="aboutlogo" src="../assets/images/logo-176-163.png" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.main-container {
  background-image: url(../assets/images/hero1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.cont {
  background-color: rgb(0, 0, 0);
  width: 1100px;
  height: 370px;
  opacity: 0.3;
  margin-left: 130px;
  margin-bottom: 100px;
  margin-top: 220px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: x-large;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  z-index: 1;
  opacity: 0.8;
}

.bar {
  position: fixed;
  top: 0;
  background-color: whitesmoke;
  width: 1260px;
  height: 70px;
  text-align: center;
  z-index: 2;
  margin-right: 90px;
  margin-left: 25px;
}
.logobar {
  margin-left: 600px;
  margin-top: 200px;
}
.log {
  color: rgb(12, 10, 10);
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 20px;
  width: 60px;
}

.about {
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
  width: 60px;
  margin-top: -45px;
  margin-left: 130px;
}

#linkabout {
  color: rgb(0, 0, 0);
}
#h1about {
  text-align: center;
  background-color: bisque;
  color: rgb(0, 0, 0);
  opacity: 1;
}
.hero {
  color: rgb(12, 10, 10);
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 120px;
  width: 300px;
  margin-bottom: 100px;
  margin-top: -50px;
}

#heroid {
  color: rgb(12, 10, 10);
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 20px;
  width: 120px;
}
#aboutparg {
  padding-top: 160px;
  font-style: normal;
}
#aboutlogo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: -20px;
  margin-bottom: 200px;
  margin-top: -300px;
  opacity: 0.9;
  background-color: rgb(0, 0, 0);
}
</style>
