<template>
  <div class="about section">
    <!--header corousel-->
    <Fullwidth/>

    <!-- About Us -->
    <section class="about_us section hero">
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
            <h1 class="is-size-2 has-text-centered has-text-weight-bold">GET TO KNOW OUR STORY</h1>
          </div>
        </div>
      </div>

      <div class="columns is-multiline is-centered">
        <div class="column is-2">1
          
        </div>
        <div class="column is-2">2</div>
        <div class="column is-2">3</div>
        <div class="column is-2">4</div>
        <div class="column is-2">5</div>
      </div>


      </div>
    </section>

  </div>
</template>

<script>
import Fullwidth from '../components/Fullwidth_Carousel.vue'
export default {
  name: 'About',
  components:{
    Fullwidth,
  }
}
</script>
