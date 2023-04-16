<template>
  <div class="login">
    <div id="login-box">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
      <q-btn
        class="full-width q-my-md"
        outline
        color="green-4"
        label="Are you new here?"
        @click="handleClick"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    handleClick() {
      this.$emit("swap");
    },
  },
};
</script>



<style scoped lang="scss">
.login {
  -webkit-animation: flip 2s ease 0s 1 normal;
  -moz-animation: flip 2s ease 0s 1 normal;
  -ms-animation: flip 2s ease 0s 1 normal;
  animation: flip 2s ease 0s 1 normal;

  @-webkit-keyframes flip {
    0% {
      -webkit-transform: translateY(0);
      transform: rotateY(0deg);
    }
    50% {
      -webkit-transform: translateY(180);
      transform: rotateY(180deg);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: rotateY(0deg);
    }
  }

  @keyframes flip {
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
  #login-box {
    background-color: #fff; /* white */
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    border: solid rgb(93, 214, 93) 3px;
    border-radius: 5px;
    outline-style: solid;
    outline-color: rgb(93, 214, 93);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    h1 {
      text-align: center;
      color: rgb(97, 231, 243); /* blue */
    }

    input[type="text"],
    input[type="password"] {
      width: 80%;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 3px;
      border: none;
      outline-style: solid;
      outline-color: rgb(93, 214, 93);
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
    }

    input[type="submit"] {
      background-color: rgb(97, 231, 243); /* blue */
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      width: 100%;
    }

    input[type="submit"]:hover {
      background-color: rgb(177, 177, 255); /* darker blue */
    }
  }
}
</style>
