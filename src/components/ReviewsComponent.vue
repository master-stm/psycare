<template>
  <div id="reviews">
    <div class="head">
      <h2 class="title">What they said?</h2>
      <img class="logo" src="../assets/images/logo-176-163.png" alt="logo" />
    </div>

    <div class="cont">
      <div data-aos="fade-up" data-aos-duration="3000" class="boxdiv">
        <h1 class="name">Hamad</h1>

        <div class="pdiv">
          <p id="rev">
            The website's customer service is top-notch, with friendly and
            knowledgeable staff available to answer any questions or concerns
            users may have.
          </p>
        </div>
        <img class="box" src="../assets/images/download.webp" alt="" />
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" class="boxdiv">
        <h1 id="sec" class="name">John</h1>
        <div class="pdiv">
          <p id="rev">
            One of the things I like about this website is that it provides a
            safe and secure platform for users to communicate with licensed
            mental health professionals.
          </p>
        </div>
        <img class="box" src="../assets/images/download.webp" alt="" />
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" class="boxdiv">
        <h1 class="name">Sara</h1>

        <div class="pdiv">
          <p id="rev">
            The website's therapists are qualified and experienced, and they
            provide a range of therapeutic approaches to meet the needs of
            different individuals.
          </p>
        </div>
        <img class="box" src="../assets/images/download.webp" alt="" />
      </div>

      <div data-aos="fade-up" data-aos-duration="3000" class="boxdiv">
        <h1 class="name">Danial</h1>
        <div class="pdiv">
          <p id="rev">
            I would highly recommend this psychology care website to anyone who
            is struggling with their mental health.
          </p>
        </div>
        <img
          id="last"
          class="box"
          src="../assets/images/download.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews  Component",
  data() {
    return {};
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
  }
}
</style>
