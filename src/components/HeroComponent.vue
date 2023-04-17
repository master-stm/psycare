<template>
  <section class="hero">
    <h3 class="text-primary">Journey together, Grow stronger</h3>
    <h5 class="text-secondary">
      connect with our Mental Health Therapy Community for Support and
      Empowerment.
    </h5>
  </section>
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
  padding: 1.5em;
  opacity: 0;
  text-align: center;
  animation: hero 1.5s ease-in-out forwards;

  h3 {
    transform: translateX(-70%);
    animation: slide_right 1.5s ease-in-out forwards;
  }
  h5 {
    transform: translateX(70%);
    animation: slide_left 1.5s ease-in-out forwards;
  }

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
    @keyframes slide_left {
      from {
        transform: translateX(70%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes slide_right {
      from {
        transform: translateX(-70%);
      }
      to {
        transform: translateX(0);
      }
    }
  }
}

.text-secondary {
  color: #83cd4e;
}
</style>
