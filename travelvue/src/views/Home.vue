<template>
<div class="home">
  <section class="hero is-medium is-dark mb-6">
      <!--carousel-->
      <div>
        <Carousel
          :navigation="true"
          :pagstartAutoPlayination="true"
          :="true"
          :timeout="4000"
          class="carousel hero-body"
          v-slot="{ currentSlide }"
        >
          <!--the captions-->
          <div class="has-text-centered captions">
            <div class="background-captions">
              <p class="title mb-6">Welcome to Djackets</p>
              <p class="subtitle">The best jacket store online</p>
            </div>
          </div>

          <!--background images-->
          <Slide v-for="(slide, index) in carouselSlides" :key="index">
            <div
              v-show="currentSlide === index + 1"
              class="slide-info image is-fullwidth"
            >
              <img
                :src="require(`../assets/${slide}.jpg`)"
                alt=""
                class="has-ratio"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
    </section>
    </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
  },

  setup() {
    const carouselSlides = [
      "bg- 1",
      "bg- 2",
      "bg- 3",
      "bg- 4",
      "bg- 5",
      "bg- 6",
      "bg- 7",
    ];
    return { carouselSlides };
  }
}
</script>
<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  .captions {
    position: absolute;
    z-index: 1;
    width: 50%;
    top: 5%;
  }
  .background-captions {
    background: rgba(0, 0, 0, 0.5);
    transition: 2s;
    padding-top: 10px;
    padding-bottom: 20px;
    border-radius: 20px;
  }

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      min-width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
}
</style>
