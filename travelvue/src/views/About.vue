<template>
  <div class="about section">
    <!--header corousel-->
    <Fullwidth />

    <!-- About Us -->
    <section class="about_us hero">
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

    <!-- get to know us -->
    <section class="get_to_know hero">
      <div class="hero-body">
        <div class="columns is-multiline">
          <!--Get to know Us title-->
          <div class="title column is-12 has-text-centered">
            <h2 class="is-size-5">Our story</h2>
            <h1 class="is-size-2 has-text-weight-bold">
              GET TO KNOW OUR STORY
            </h1>
          </div>
        </div>

        <!-- icons and text -->
        <div class="columns is-multiline is-centered pt-6 mb-2">
          <div class="column is-2">
            <div class="beach shortcuts has-text-centered">
              <a href="#" class="icon"
                ><i class="fas fa-umbrella-beach"></i>
              </a>
              <p class="has-text-weight-bold pt-3">Beach</p>
              <p class="has-text-weight-light">2 destinations</p>
            </div>
          </div>
          <div class="column is-2">
            <div class="beach shortcuts has-text-centered">
              <a href="#" class="icon"><i class="fas fa-briefcase"></i> </a>
              <p class="has-text-weight-bold pt-3">Low Budget</p>
              <p class="has-text-weight-light">4 destinations</p>
            </div>
          </div>
          <div class="column is-2">
            <div class="beach shortcuts">
              <a href="#" class="icon"><i class="fas fa-bus-alt"></i> </a>
              <p class="has-text-weight-bold pt-3">Adventure</p>
              <p class="has-text-weight-light">13 destinations</p>
            </div>
          </div>
          <div class="column is-2">
            <div class="beach shortcuts">
              <a href="#" class="icon"><i class="fas fa-route"></i> </a>
              <p class="has-text-weight-bold pt-3">Popular</p>
              <p class="has-text-weight-light">4 destinations</p>
            </div>
          </div>
          <div class="column is-2">
            <div class="beach shortcuts">
              <a href="#" class="icon"><i class="fas fa-fire"></i> </a>
              <p class="has-text-weight-bold pt-3">Camping</p>
              <p class="has-text-weight-light">1 destination</p>
            </div>
          </div>
        </div>
        <div class="columns is-multiline is-centered pt-6 mb-2">
          <div class="column is-7 has-text-centered">
            <p class="subtitle">
              We offer the best limits on our top-rated visit bundles to clients
              who pick our viable administrations over and over.<br />
              How about we remind you indeed that we don’t expect to be your
              visit and travel specialists; we endeavor to be your vacation
              accomplices until the end of time.
            </p>
          </div>
        </div>
        <div class="has-text-centered mt-3 column">
          <button class="button">Enquire</button>
        </div>
      </div>
    </section>


    <!-- team -->
    <section class="team  hero">
      <div class="hero-body">
        <div class="columns is-multiline">
          <!--team title-->
          <div class="title column is-12 has-text-centered">
            <h2 class="is-size-5">Our team</h2>
            <h1 class="is-size-2 has-text-weight-bold">MEET OUR TEAM</h1>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column is-4">
            <figure class="image is-4by5">
              <img src="../assets/fullheight/kelvin.jpg" alt="" />
            </figure>
          </div>
          <div class="column is-4">
            <figure class="image is-4by5">
              <img src="../assets/fullheight/mama-sham.jpeg" alt="" />
            </figure>
          </div>
          <div class="column is-4">
            <figure class="image is-4by5">
              <img src="../assets/fullheight/kelvin.jpg" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section class="customer hero">
      <div class="hero-body">
        <div class="columns is-multiline">
          <!--customer title-->
          <div class="title column is-12 has-text-centered">
            <h2 class="is-size-5">Reviews and ratings</h2>
            <h1 class="is-size-2 has-text-weight-bold">CUSTOMER REVIEWS</h1>
          </div>
        </div>
        
        <div class="columns is-multiline">
          <div class="column is-12 review is-fullwidth ">
            <div class=" profile has-text-centered">
            </div>

          </div>
        </div>
        <div class="columns is-multiline pt-5">
          <div class="column is-12 review is-fullwidth">

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
    // border: #000000 solid;
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
.review{
  border:#660746 solid;
  color: #ff0000;
}
.profile{
  width:7em;
  height: 7em;
  background: url('../assets/fullheight/mama-sham.jpeg');
  border: 2px #660746;
  color: #f9e2e3;
  border-radius: 50%;
  background-repeat: round;
  /* change to black and white  */
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0*/
    filter: grayscale(100%);
  transition: box-shadow .6s ease-in-out;
}
.profile:hover{
  box-shadow: 0 0 0 0.125em rgb(102 7 70 / 25%);
}
@media (max-width: 768px) {
  .profile{
  width:4em;
  height: 4em;}
}
</style>
