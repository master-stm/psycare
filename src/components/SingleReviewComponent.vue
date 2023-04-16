<template>
<div data-aos="fade-up" data-aos-duration="3000" class="boxdiv">
        <h1 class="name">{{this.$props.name}}</h1>

        <div class="pdiv">
          <p id="rev">
            {{this.$props.review}}
          </p>
        </div>
        <img class="box" :src="this.$props.avatar" :alt="this.$props.name" />
      </div>
</template>

<script>
export default{
  name:"single review component",
  props:['name','review','avatar'],


}
</script>

<style scoped lang="scss">
.name {
      color: rgb(46, 190, 212);
      font-size: 36px;
      font-weight: 700;
      margin-left: 250px;
    }

    #sec {
      margin-top: 20px;
      margin-bottom: 70px;
    }
.boxdiv {
      background-color: white;
      height: 300px;
      width: 800px;
      border-style: solid;
      border-color: rgb(93, 214, 93);
      border-radius: 30px;
      margin: 30px;
      opacity: 0;
    animation: fadeInUp 1s ease-in-out forwards;

      @keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
}
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
    }
</style>
