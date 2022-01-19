<template>
  <div class="trip section">
    <div class="page-product">
      <div class="columns is-multiline is-centered">
        <div class="column is-7">
          <div class="has-text-centered">
            <Slide>
              <figure class="image mb-3 is-5by3">
                <img v-bind:src="trip.get_image" />
              </figure>
            </Slide>

              <div class="image product-small-img">
                <img
                  @click="updateImage1(trip.get_thumbnail)"
                  v-bind:src="trip.get_thumbnail"
                />
                <img
                  v-for="variant in variants"
                  :key="variant.variantId"
                  @click="updateImage(variant.variantImage)"
                  v-bind:src="variant.variantImage"
                />
              </div>
          </div>

          <h2 class="title has-text-weight-bold">{{ trip.name }}</h2>
          <p>{{ trip.description }}</p>
        </div>
        <div class="column is-5 has-text-centered">
          <div class="field">
            <div class="control">
              <button class="button">Book Now</button>
            </div>
          </div>
          <div class="field activities p-2">
            <h2 class="subtitle has-text-weight-medium">Activities</h2>
            <ul class="is-capitalized">
              <li v-for="activities in trip.activities" :key="activities">
                {{ activities }}
              </li>
            </ul>
          </div>
        </div>

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
  </div>
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
      console.log("running");
    },
    updateImage1(get_image) {
      this.trip.get_image = get_image;
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
/* figure.image {
  height: 35%;
} */

.image img {
  border-radius: 10px;
}
table {
  background: none;
}

a {
  color: black;
  text-decoration: underline;
  transition: color 0.25s ease-out, background-color 0.25s ease-out,
    border-color 0.25s ease-out;
}
a:hover {
  color: #660746;
  text-decoration: none;
}
a:focus {
  color: #660746;
  text-decoration: none;
}
.button {
  width: 10em;
  height: 2.5em;
  font-size: 1.6em;
}
h2.subtitle {
  letter-spacing: 0.2em;
}
.activities {
  border: #660746 solid 2px;
  margin: 10% 25%;
}
.divBorder {
  border-left: #660746 2px solid;
}

.product-small-img img {
  height: 4.5em;
  width: 4.5em;
  padding: 0.5em;
  margin: 0.2em;
  cursor: pointer;
  display: block;
  opacity: 0.5;
}
.product-small-img img:hover {
  opacity: 1;
}
.product-small-img {
  display: inline-flex;
}
@media (max-width: 768px) {
  .divBorder {
    border-left: none;
  }
  .activities {
    margin: 0;
  }
  .product-small-img {
    width: 100%;
    overflow: auto;
  }
  .product-small-img img {
    max-height: 100%;
  }
}
</style>
