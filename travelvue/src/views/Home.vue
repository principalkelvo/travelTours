<template>
  <div class="home">
    <!--header-->
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

    <!--Top destination-->
    <section class="top_destination">
      <div class="columns is-multiline">
        <!--Top destination title-->
        <div class="title column is-12">
          <h2 class="is-size-5 has-text-centered">
            Our most amazing place to explore
          </h2>
          <div class="line">
            <h1 class="is-size-2 has-text-centered">TOP DESTINATION</h1>
          </div>
        </div>

        <!--Top destination top_shortcuts-->
        <div class="columns is multiline">
          <div class="column is-6">
            <div class="top_shortcuts box">
              <div class="relax shortcuts">
                <a href="#" class="icon"><i class="fas fa-cocktail"></i> </a>
                <p>Relax</p>
              </div>

              <div class="beach shortcuts">
                <a href="#" class="icon"
                  ><i class="fas fa-umbrella-beach"></i>
                </a>
                <p>Beach</p>
              </div>

              <div class="Historical shortcuts">
                <a href="#" class="icon"><i class="fas fa-camera"></i></a>
                <p>Historical</p>
              </div>

              <div class="cultural shortcuts">
                <a href="#" class="icon"><i class="fas fa-monument"></i> </a>
                <p>Cultural</p>
              </div>
            </div>
          </div>

          <div class="packages column is-6 has-text-centered">
            <p class="speciality">
              Our specialty is the ability to design unique tours and safaris to
              fit every type of tourist, from the budget to the luxury providing
              a unique opportunity to combine bush and beach adventures in
              hidden treasures of Pokot, Kenya, East Africa's spectacular
              sceneries and the World.
            </p>
            <button class="button mt-4">See all Packages</button>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer">
        <div class="footer_img">
          <img src="../assets/logo.png" alt="maasai" />
        </div>
        <div class="content_bg">
          <div class="footer_content">
            <div class="subscribe columns is-multiline pt-6">
              <input class="input column is-5" type="email">
              <button class="button column is-3 is-light">Subscribe Now!</button>
            </div>
            <div class="columns is-multiline pt-6 pb-6 mt-5">
            <div class="services column is-4">
              <h2 class="subtitle mb-1">Services</h2>
              <ul>
                Tour guiding
              </ul>
              <ul>
                wedding
              </ul>
              <ul>
                Team building
              </ul>
              <ul>
                Conference
              </ul>
            </div>
            <div class="about column is-4">
              <h2 class="subtitle mb-1">About us</h2>
              <ul>
                Get to know us
              </ul>
              <ul>
                Customers' Reviews
              </ul>
            </div>
            <div class="contact_us column is-4">
              <h2 class="subtitle mb-1">Contact Us</h2>
              <ul>
                <i class="fas fa-map-marked-alt  "></i
                > Kapenguria, Kenya
              </ul>
              <ul>
                <i class="fas fa-phone  "></i
                > +254712345678
              </ul>
              <ul>
                <i class="fa fa-envelope  " aria-hidden="true"></i
                > pokotours@gmail.com
              </ul>
            </div>
            </div>

            <hr>

            <div class="columns is-multiline">
              <div class="column is-9">All rights reserved @2022</div>

              <div class="footer_icons column is-2">
                <a href=""><i class="fas fa-facebook"></i>f</a>
                <a href=""><i class="fas fa-instagram"></i>i</a>
                <a href=""
                  ><i class="fa fa-twitter" aria-hidden="true"></i>tw</a
                >
                <a href=""><i class="fas fa-tripadvisor"></i> tr</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
//connect to the backend
import axios from "axios";
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
import Footer from "../components/footer.vue";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide,
    Footer,
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
  height: 100vh;
  display: flex;
  justify-content: center;
  .captions {
    position: absolute;
    z-index: 1;
    width: 50%;
    top: 5%;
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
      object-fit: fill;
    }
  }
}

.top_shortcuts {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9e2e3;
  .shortcuts {
    //  border: 3px solid;
    background-color: #f9e2e3;
    padding: 15px 15px;
    text-align: center;
    margin: 0 auto;
    width: 23%;
    //fonts
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5em;
    letter-spacing: 0.105em;
  }
  .icon {
    font-size: 1.8em;
    margin-top: 10px;
    text-decoration: none;
    text-align: center;
    color: #000000;
  }
  .shortcuts p {
    width: 100%;
    font-size: 0.6em;
    // border: 3px solid;
    color: #000000;
    padding: 0 1em;
  }
  .shortcuts:hover {
    background: #660746;
    .icon {
      color: #f9e2e3;
      animation: shake 0.5s;
    }
    p {
      color: #f9e2e3;
    }
  }
}

//footer
.footer{
  position: relative;
  height: 100vh;
}
.footer_img{
position: absolute;
width: 30%;
height: 80%;
left: 30px;
border: 2px solid;
top: -25px;
}
.footer_img img{
  width: 100%;
  height: 100%;
}
.footer{
  background:#f9e2e3;
}
.content_bg{
  padding-left: 20px;
  height: 100%;
}
.footer_content{
  background-color: #660746;
  padding-left:35%;
  padding-top: 20px;
  height: 100%;
  border-radius: 20px;
  color: #f9e2e3;
  
}
</style>
