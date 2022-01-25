<template>
  <section class="hero is-medium mb-6">
    <!--carousel-->
    <div>
      <Carousel
        :navigation="true"
        :pagination="true"
        :startAutoPlay="true"
        :timeout="4000"
        class="carousel hero-body"
        v-slot="{ currentSlide }"
      >
        <!--the captions-->
        <div class="has-text-left captions">
          <div class="background-captions">
            <p class="title mb-5 is-uppercase">Welcome to Pokot</p>
            <p class="subtitle">Kenya spectacular sceneries</p>
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
</template>

<script>
import axios from "axios";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";

export default {
  name: "Fullwidth",
  data() {},
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
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 90vh;
  display: flex;
  // justify-content: center;
  .captions {
    position: absolute;
    z-index: 1;
    width: 50%;
    bottom: 30%;
    left: 3%;
    p {
      color: rgb(255, 255, 255);
      font-weight: 1000;
      text-shadow: 1px 0px 5px rgba(0, 0, 0);
    }
  }
  //   .background-captions {
  //     background: rgba(0, 0, 0, 0.5);
  //     transition: 2s;
  //     padding-top: 10px;
  //     padding-bottom: 20px;
  //     border-radius: 20px;
  //   }

  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      border-radius: 10px;
      min-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
@media (max-width: 768px) {
  .carousel { 
  height: 60vh;

  .captions{ 
    .title{
      font-size: 1.5rem;
    }
    .subtitle{
      font-size: 1rem;
    }
    
    p{
      font-weight:600;
    }
  }
  }
  
}
</style>
