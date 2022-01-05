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
    <section class="top_destination section hero">
      <div class="hero-body">
      <div class="columns is-multiline">
        <!--Top destination title-->
        <div class="title column is-12">
          <h2 class="is-size-5 has-text-centered">
            Our most amazing place to explore
          </h2>
          <div class="line">
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">TOP DESTINATION</h1>
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
      </div>
    </section>

    <!--Our Tour Package-->
    <section class="tour_packages section hero">
      <div class="hero-body">
      <div class="columns is-multiline">
        <!--Our Tour Package title-->
        <div class="title column is-12">
          <h2 class="is-size-5 has-text-centered">see amazing capture</h2>
          <div class="line">
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">OUR TOUR PACKAGE</h1>
          </div>
        </div>
      </div>

      <!--packages-->
      <div class="columns is-multiline">
        <div class="column is-4 is-dark">
          <div class="image p-4">
            <img src="../assets/footer_img.jpg" alt="" />
          </div>
          <div class="image p-4">
            <img src="../assets/footer_img.jpg" alt="" />
          </div>
        </div>
        <div class="column is-4 box">
          <div class="tour_form"></div>
        </div>
        <div class="column is-4">
          <div class="image p-4">
            <img src="../assets/footer_img.jpg" alt="" />
          </div>
          <div class="image p-4">
            <img src="../assets/footer_img.jpg" alt="" />
          </div>
        </div>
      </div>
      </div>
    </section>

    <!--Our Travel Tips-->
    <section class="travel_tips section hero">
      <div class="hero-body">
      <div class="columns is-multiline">
        <!--Our Travel Tips title-->
        <div class="title column is-12">
          <h2 class="is-size-5 has-text-centered">Go for Categories</h2>
          <div class="line">
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">TRAVEL TIPS</h1>
          </div>
        </div>

        <!--bg-->
        <div class="travel_tips_bg">
          <div class="columns is-multiline">
            <div class="column is-12">
              <div class="column is-6"></div>
              <div class="column is-3"></div>
            </div>              <div class="column is-3"></div>

          </div>
        </div>
      </div>
      </div>
    </section>

    <!--Our services-->
    <section class="services section hero">
      <div class="hero-body">
      <div class="columns is-multiline">
        <!--Our services title-->
        <div class="title column is-12">
          <h2 class="is-size-5 has-text-centered">we fulfil your need</h2>
          <div class="line">
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">SERVICES</h1>
          </div>
        </div>
      </div>

      <!-- first column -->
      <div class="columns is-multiline is-gapless services">
        <div class="column is-6">
          <div class="is-bordered">
            <div class="column is-6">
              <figure class="image is-square">
                <img class="is-rounded" src="../assets/footer_img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="is-bordered">
            <div class="column is-6 is-pulled-right">
              <figure class="image is-square">
                <img class="is-rounded" src="../assets/footer_img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <!-- second column -->
        <div class="column is-6 second_column">
          <div class="is-bordered">
            <div class="column is-6 is-pulled-right">
              <figure class="image is-square">
                <img class="is-rounded" src="../assets/footer_img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <div class="column is-6 second_column">
          <div class="is-bordered">
            <div class="column is-6">
              <figure class="image is-square">
                <img class="is-rounded" src="../assets/footer_img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>

        <!-- third column -->
        <div class="column is-6">
          <div class="is-bordered">
            <div class="column is-6">
              <figure class="image is-square">
                <img class="is-rounded" src="../assets/footer_img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="is-right">
            <div class="column is-6 is-pulled-right">
              <figure class="image is-square">
                <img class="is-rounded" src="../assets/footer_img.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- About Us -->
    <section class="about_us hero">
      <div class="hero-body">
      <div class="columns is-multiline">
        <!--About Us title-->
        <div class="title column is-12">
          <h2 class="is-size-5 has-text-centered">Our featured story</h2>
          <div class="line">
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">ABOUT US</h1>
          </div>
        </div>
      </div>
      <div class="columns is-multiline is-centered">
        <div class="column is-5">
          <h2 class="is-size-4 has-text-weight-semibold">We since from 2011</h2>
          <span class="has-text-left"
            >Pokot Tours and Travel Ltd is a well-established Company in west
            Pokot County handling inbound and outbound holidays for domestic
            tourists and international tourists from all over the world.</span
          >
          <h2 class="is-size-4  mt-5 has-text-weight-semibold">Our Success</h2>
          <span class="has-text-left"
            >Our specialty is the ability to design unique tours and safaris to
            fit every type of tourist, from the budget to the luxury providing a
            unique opportunity to combine bush and beach adventures in hidden
            treasures of Pokot, Kenya, East Africa's spectacular sceneries and
            the World.</span
          >

          <hr class="hr">
          

          <button class="button mt-4">Read More</button>
        </div>
        <div class="column is-5">
          <figure class="image is-4by5">
            <img src="../assets/footer_img.jpg" alt="" />
          </figure>
        </div>
      </div>
      </div>
    </section>

    <!--Footer-->
    <footer>
      <div class="footer">
        <!--footerimage-->
        <div class="footer_img">
          <img class="image" src="../assets/footer_img.jpg" alt="maasai" />
        </div>

        <!--footer content-->
        <div class="content_bg">
          <div class="footer_content">
            <!--footer subscribe input-->
            <div class="field has-addons pt-6 pr-6">
              <div class="control is-expanded">
                <input
                  class="input is-normal"
                  type="email"
                  placeholder="Your email..."
                />
              </div>
              <!--footer subscribe button-->
              <div class="control">
                <button class="button is-light is-normal">Subscribe</button>
              </div>
            </div>
            <div class="columns is-multiline pt-6 pb-6 mt-5 pr-6">
              <div class="services column is-4">
                <h2 class="subtitle mb-1">Services</h2>
                <ul class="mb-1">
                  Tour guiding
                </ul>
                <ul class="mb-1">
                  wedding
                </ul>
                <ul class="mb-1">
                  Team building
                </ul>
                <ul class="mb-1">
                  Conference
                </ul>
              </div>
              <div class="about column is-4">
                <h2 class="subtitle mb-1">About us</h2>
                <ul class="mb-1">
                  Get to know us
                </ul>
                <ul class="mb-1">
                  Customers' Reviews
                </ul>
              </div>
              <div class="contact_us column is-4">
                <h2 class="subtitle mb-1">Contact Us</h2>

                <ul class="mb-1">
                  <i class="fas fa-map-marked-alt pr-2"></i>
                  Kapenguria, Kenya
                </ul>
                <ul class="mb-1">
                  <i class="fas fa-phone pr-2"></i>
                  +254712345678
                </ul>
                <ul class="mb-1">
                  <i class="fa fa-envelope pr-2" aria-hidden="true"></i>
                  pokotours@gmail.com
                </ul>
              </div>
            </div>

            <hr class="mr-6" />

            <div class="columns is-multiline">
              <div class="column is-9">All rights reserved @2022</div>

              <div class="footer_icons column is-3">
                <a><i class="fab fa-instagram"></i></a>
                <a><i class="fab fa-facebook-f"></i></a>
                <a><i class="fab fa-twitter"></i></a>
                <a><i class="fab fa-tripadvisor"></i></a>
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

//top destination
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

//services
.services {
  position: relative;
}
.column.is-6.second_column {
  top: 25%;
  /* border: 1px solid black; */
  left: 25%;
  position: absolute;
}

//All titles
h1::before {
  content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
  text-decoration: line-through;
  margin: auto 0.5em;
}

//about us
.hr{
  background-color: #660746;
}

//footer
.footer {
  position: relative;
  height: 100vh;
}
.footer_img {
  position: absolute;
  width: 30%;
  height: 78%;
  left: 1%;
  border: 2px solid;
  top: -2%;
}
.footer_img img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}
.footer {
  background: #f9e2e3;
  .subtitle {
    color: white;
  }
  a i {
    color: #f9e2e3;
    padding: 0 10px;
  }
  input.input {
    background-color: none;
  }
  .select select,
  .textarea,
  .input {
    background-color: #660746;
    border-color: #f9e2e3;
    border-radius: 20px;
    color: #ece4e9;
  }
  ::-webkit-input-placeholder {
    color: #ece4e9a6;
  }
  :-moz-placeholder {
    color: #ece4e9a6;
  }
  :-ms-input-placeholder {
    color: #ece4e9a6;
  }
  ::-moz-placeholder {
    color: #ece4e9a6;
  }
}
.content_bg {
  padding-left: 2%;
  height: 100%;
}
.footer_content {
  background-color: #660746;
  padding-left: 35%;
  padding-top: 2%;
  height: 100%;
  border-radius: 2%;
  color: #f9e2e3;
}
</style>
