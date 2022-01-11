<template>
  <div class="about section">
    <!--header corousel-->
    <Fullwidth />

    <!-- About Us -->
    <section class="about_us section hero">
      <div class="hero-body">
        <div class="columns is-multiline">
          <!--About Us title-->
          <div class="title column is-12">
            <h2 class="is-size-5 has-text-centered">Our featured story</h2>
            <div class="line">
              <h1 class="is-size-2 has-text-centered has-text-weight-bold">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
        <div class="columns is-multiline is-centered">
          <div class="column is-5">
            <h2 class="is-size-4 has-text-weight-semibold">
              We since from 2011
            </h2>
            <span class="has-text-left"
              >Pokot Tours and Travel Ltd is a well-established Company in west
              Pokot County handling inbound and outbound holidays for domestic
              tourists and international tourists from all over the world.</span
            >
            <h2 class="is-size-4 mt-5 has-text-weight-semibold">Our Success</h2>
            <span class="has-text-left"
              >Our specialty is the ability to design unique tours and safaris
              to fit every type of tourist, from the budget to the luxury
              providing a unique opportunity to combine bush and beach
              adventures in hidden treasures of Pokot, Kenya, East Africa's
              spectacular sceneries and the World.</span
            >
          </div>
          <div class="column is-5 ml-6">
            <figure class="image is-5by4">
              <img src="../assets/fullwidth/huts.jpg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="about_us section hero">
      <div class="hero-body">
        <div class="columns is-multiline">
          <!--About Us title-->
          <div class="title column is-12">
            <h2 class="is-size-5 has-text-centered">Our story</h2>
            <div class="line">
              <h1 class="is-size-2 has-text-centered has-text-weight-bold">
                GET TO KNOW OUR STORY
              </h1>
            </div>
          </div>
        </div>

        <div class="columns is-multiline is-centered pt-6 mb-2">
          <div class="column is-2">
            
            <div class="beach shortcuts has-text-centered">
              <a href="#" class="icon"
                ><i class="fas fa-umbrella-beach"></i>
              </a>
              <p class="has-text-weight-bold">Beach</p>
            </div>
          </div>
          <div class="column is-2">
            
            <div class="beach shortcuts has-text-centered">
              <a href="#" class="icon"><i class="fas fa-briefcase"></i> </a>
              <p class="has-text-weight-bold">Low Budget</p>
            </div>
          </div>
          <div class="column is-2">
            
            <div class="beach shortcuts">
              <a href="#" class="icon"><i class="fas fa-bus-alt"></i> </a>
              <p class="has-text-weight-bold"> Adventure</p>
            </div>
          </div>
          <div class="column is-2">
            
            <div class="beach shortcuts">
              <a href="#" class="icon"><i class="fas fa-route"></i> </a>
              <p class="has-text-weight-bold">Popular</p>
            </div>
          </div>
          <div class="column is-2">
            
            <div class="beach shortcuts">
              <a href="#" class="icon"><i class="fas fa-fire"></i> </a>
              <p class="has-text-weight-bold">Camping</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline is-centered pt-6 mb-2">
          <div class="column is-7 has-text-centered">
            <p class="subtitle">
              We offer the best limits on our top-rated visit bundles to clients
              who pick our viable administrations over and over.<br> How about we
              remind you indeed that we don’t expect to be your visit and travel
              specialists; we endeavor to be your vacation accomplices until the
              end of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Fullwidth from "../components/Fullwidth_Carousel.vue";
export default {
  name: "About",
  components: {
    Fullwidth,
  },
};
</script>
<style lang="scss" scoped>
.shortcuts {
  background-color: #f9e2e3;
  padding: 2px;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  //fonts
  font-size: 1.2em;
  letter-spacing: 0.105em;

  .icon {
    font-size: 3.8em;
    margin-top: 10px;
    text-decoration: none;
    text-align: center;
    color: #000000;
  }
  p {
    width: 100%;
    font-size: 1em;
    // border: 3px solid;
    color: #000000;
  }
}
</style>
