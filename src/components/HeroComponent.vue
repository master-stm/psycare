<template>
  <div class="hero">
    <q-img
      src="../assets/hero.jpg"
      style="width: 100%; height: auto"
      fit="cover"
    >
      <div class="absolute-bottom text-subtitle1 text-center">
        <p class="subtitle gt-md">
          Join an anonymous group of mental health patients where you can share
          your experiences and inner thoughts with others who can relate to what
          you're going through.
        </p>
        <p style="font-size: 1.2em" class="subtitle lt-md">
          Join an anonymous group of mental health patients where you can share
          your experiences and inner thoughts with others who can relate to what
          you're going through.
        </p>
      </div>
    </q-img>
  </div>
</template>
<script>
export default {
  name: "hero component",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.hero {
  background-color: #f2f2f2;
  opacity: 0;
  animation: hero 2s ease-in-out forwards;

  @keyframes hero {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .subtitle {
    font-size: 2em;
    margin-bottom: 1em;
    line-height: 1.2em;
    text-align: left;
    transform: translateY(5em);
    animation: subtitle 1s ease-in-out forwards;

    @media screen and (max-width: 650px) {
      .subtitle {
        font-size: 0.7em;
      }
    }

    @keyframes subtitle {
      from {
        transform: translateY(5em);
      }
      to {
        transform: translateY(0);
      }
    }
  }
}
</style>
