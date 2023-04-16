<template>
<div id="reviews">
  <div class="head">
    <h2 class="title">What they said?</h2>
    <!-- <img class="logo" src="../assets/images/logo-176-163.png" alt="logo" /> -->
  </div>
</div>
  <SingleReviewComponent
  v-for="review in reviewsArray"
  :key="review.id"
  :name="review.first_name"
  :review="review.review"
  :avatar="review.avatar+review.id"
  />

</template>

<script>
import SingleReviewComponent from './SingleReviewComponent.vue';
export default {
  name: "Reviews  Component",
  components:{SingleReviewComponent},
  data() {
    return {
      reviewsArray:[{
  id: 1,
  first_name: "Charlena",
  review: "monetize real-time web services",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 2,
  first_name: "Darcey",
  review: "transform transparent models",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 3,
  first_name: "Sile",
  review: "brand plug-and-play convergence",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 4,
  first_name: "Chelsea",
  review: "grow bleeding-edge systems",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 5,
  first_name: "Giavani",
  review: "maximize impactful e-tailers",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 6,
  first_name: "Gloria",
  review: "deliver B2C e-business",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 7,
  first_name: "Nikolai",
  review: "engineer efficient web services",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 8,
  first_name: "Darline",
  review: "seize web-enabled users",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 9,
  first_name: "Ethyl",
  review: "extend plug-and-play markets",
  avatar: "https://i.pravatar.cc/150?img="
}, {
  id: 10,
  first_name: "Cazzie",
  review: "reintermediate extensible bandwidth",
  avatar: "https://i.pravatar.cc/150?img="
}]
    };
  },
};
</script>
<style lang="scss" scoped>
#reviews {
  margin: 4em 3em 1em 3em;
  .head {
    background-color: white;
    width: 100%;
    height: 130px;
    border-style: solid;
    border-color: rgb(93, 214, 93);
    border-radius: 10px;

    .title {
      background-color: #fff;
      color: rgb(46, 190, 212);
      font-size: 36px;
      font-weight: 700;
      margin-left: 50px;
      margin-bottom: 20px;
    }
    .logo {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      margin-left: 1100px;
      margin-top: -190px;
      margin-top: -92px;
    }
  }
  .cont {
    width: 900px;
    height: 1600px;
    display: flex;
    flex-direction: column;
    margin-left: 230px;

    /* .name {
      color: rgb(46, 190, 212);
      font-size: 36px;
      font-weight: 700;
      margin-left: 250px;
    }

    #sec {
      margin-top: 20px;
      margin-bottom: 70px;
    } */

    /* .boxdiv {
      background-color: white;
      height: 300px;
      width: 800px;
      border-style: solid;
      border-color: rgb(93, 214, 93);
      border-radius: 30px;
      margin: 30px;

      .box {
        margin-bottom: 150px;
        margin-left: 40px;
        margin-top: -190px;
        width: 200px;
        height: 200px;
        background-color: aqua;
        border-radius: 50%;
      }
      #last {
        margin-bottom: -40px;
      }
      .pdiv {
        height: 100px;
        width: 400px;
        margin-left: 300px;
        #rev {
          color: rgb(93, 214, 93);
          font-size: larger;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        }
      }
    } */
  }
}
</style>
