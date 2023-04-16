<template>
<section id="about">
  <h2 class="who-are-we">Who Are We?</h2>
  <p class="about">
    Welcome to our mental health community (<span style="color: #ABE87B;">PSYCARE</span>), a place where you can find support, connection, and understanding. We understand that mental health struggles can be isolating, but you are not alone. Our community is made up of individuals who are going through similar experiences, and we are here to support each other.

Our community is a safe and inclusive space where you can share your thoughts, feelings, and experiences without fear of judgement. We encourage open and honest communication, and we respect each other's perspectives and boundaries.

Our community offers various resources, including peer support, group discussions, and access to mental health professionals. Our peer support program allows you to connect with others who are going through similar experiences and offer each other support and encouragement. We also have group discussions on various mental health topics, led by mental health professionals, to provide you with the opportunity to learn from experts and ask questions.
  </p>
</section>

</template>



<script>
export default{
    name: "About component",
}
</script>


<style scoped lang="scss">
.who-are-we{
  color: #61E7F3;
  font-size: 36px;
  font-weight: bold;
  margin: 0.5em;
  padding: 0.5em;
  left: 150px;
  top: 55px;
  border: solid 4px #ACEB7E;
  border-radius: 10px;
  background-color: white;

}

.about{
  color: #56bdc7;
  font-weight: 600;
  padding: 1.5em;
  line-height: 2.2em;
  font-size: 1.1em;
  opacity: 0;
  transform: translateX(-100%);
  animation: aboutus 2.5s ease-in-out forwards;
}
@keyframes aboutus {
  0%{
    opacity: 0;
    transform: translateX(-100%);
  }
  100%{
    opacity: 1;
    transform: translateX(0);

  }
}

</style>
