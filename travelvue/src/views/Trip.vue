<template>
  <section class="trip section">
    <div class="page-product">
      <div class="columns is-multiline is-centered">
        <div class="column is-7">
          <div class="has-text-centered">

            <!-- image to view  -->
              <figure class="image mb-3 is-5by3">
                <img id="slideout" v-bind:src="trip.get_image"/>
              </figure>            

              <!-- images to hover on (thumbnails) -->
              <div class="image product-small-img">
                <img
                  @mouseover="updateImage1(trip.get_thumbnail)"
                  v-bind:src="trip.get_thumbnail"
                />
                <img
                  v-for="variant in variants"
                  :key="variant.variantId"
                  @mouseover="updateImage(variant.variantImage)"
                  v-bind:src="variant.variantImage"
                />
              </div>

          </div>

          <h2 class="title has-text-weight-bold">{{ trip.name }}</h2>
          <p>{{ trip.description }}</p>
        </div>

        <!-- booknow button  -->
        <div class="column is-5 has-text-centered">
          <div class="field">
            <div class="control">
              <button class="button">Book Now</button>
            </div>
          </div>

          <!-- activities field  -->
          <div class="field activities p-2">
            <h2 class="subtitle has-text-weight-medium">Activities</h2>
            <ul class="is-capitalized">
              <li v-for="activities in trip.activities" :key="activities">
                {{ activities }}
              </li>
            </ul>
          </div>
        </div>

        <!-- details for place  -->
        <div class="columns is-multiline m-4">
          <div class="column is-4 has-text-centered">
            <h2 class="has-text-weight-bold m-3">Description</h2>
            <div>
              {{ trip.description }}
            </div>
          </div>

          <div class="column is-4 has-text-centered divBorder">
            <h2 class="has-text-weight-bold m-3">Contact Us</h2>
            <div>
              <p>Free Call :<a href="#"> 1800 020 524</a></p>

              <p>
                1650 Kapenguria, Pokot <br />
                Kenya
              </p>

              <p>
                <a href="https://goo.gl/maps/nrHkhnPavhB9LjP97"
                  >Directions from Mombasa</a
                >
                - 17hrs 46min<br />
                <a href="https://goo.gl/maps/JXoruTtZuqT9egM79"
                  >Directions from Nairobi</a
                >
                - 8hrs 16min <br />
                <a href="https://goo.gl/maps/zqryaNMkg7fFt1ft5"
                  >Directions from Kisumu</a
                >
                - 5hrs 1min
              </p>
            </div>
          </div>

          <div class="column is-4 has-text-centered divBorder">
            <h2 class="has-text-weight-bold m-2">More Details</h2>
            <div>
              {{ trip.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Slide from "../components/Slide.vue";

import { toast } from "bulma-toast";

export default {
  name: "Trip",
  data() {
    return {
      trip: {},
      //images thumbnail
      variants: [
        {
          variantId: 1,
          variantImage: require("@/assets/fullwidth/pawan-sharma-m41i9RcGcAo-unsplash.jpg"),
        },
        {
          variantId: 2,
          variantImage: require("@/assets/fullwidth/lunch.jpg"),
        },
        {
          variantId: 3,
          variantImage: require("@/assets/fullwidth/sandy-millar-YeJWDWeIZho-unsplash.jpg"),
        },
        {
          variantId: 4,
          variantImage: require("@/assets/fullwidth/windows-4nSKsoYyuPQ-unsplash.jpg"),
        },
        {
          variantId: 5,
          variantImage: require("@/assets/fullwidth/sutirta-budiman-Wdq1B_wZQUQ-unsplash.jpg"),
        },
      ],
    };
  },
  components: {
    Slide,
  },
  mounted() {
    this.gettrip();
  },
  methods: {
    updateImage(variantImage) {
      this.trip.get_image = variantImage;
      var slider= document.getElementById("slideout");
      slider.className +=" slideout";
      setTimeout(function(){
        slider.classList.remove("slideout")
      },500);
    },
    updateImage1(get_image) {
      this.trip.get_image = get_image;
      var slider= document.getElementById("slideout");
      slider.className +=" slideout";
      setTimeout(function(){
        slider.classList.remove("slideout")
      },500);

    },
    async gettrip() {
      const category_slug = this.$route.params.category_slug;
      const trip_slug = this.$route.params.trip_slug;

      await axios
        .get(`/api/v1/trips/${category_slug}/${trip_slug}`)
        .then((response) => {
          this.trip = response.data;
          document.title = this.trip.name + " | Pokot";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>


</style>
