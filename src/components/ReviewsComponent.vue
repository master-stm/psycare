<template>
<div id="reviews">
  <div class="head">
    <h2 class="title">What they said?</h2>
    <!-- <img class="logo" src="../assets/images/logo-176-163.png" alt="logo" /> -->
  </div>
</div>
<div class="row justify-around">

  <SingleReviewComponent

  v-for="review in reviewsArray"
  :key="review.id"
  :name="review.name"
  :review="review.review"
  :avatar="review.avatar+review.id"
  class="col-2"
  />
</div>

</template>

<script>
import SingleReviewComponent from './SingleReviewComponent.vue';
import { getAllData } from 'src/firebase/FireStoreFunctions';
export default {
  name: "Reviews  Component",
  components:{SingleReviewComponent},
  async mounted(){
let data = await getAllData('reviews')
this.reviewsArray =  data
  },
  data() {
    return {
      reviewsArray:[]
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
