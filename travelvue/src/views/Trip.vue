<template>
  <div class="trip section">
    <div class="page-product">
      <div class="columns is-multiline is-centered">
        <div class="column is-7">
          <figure class="image mb-3 is-5by3">
            <img v-bind:src="trip.get_image" />
          </figure>

          <h2 class="title has-text-weight-bold">{{ trip.name }}</h2>
          <p>{{ trip.description }}</p>
        </div>
        <div class="column is-5 has-text-centered">
          <div class="field mb-6 ">
            <div class="control ">
              <button class="button">Book Now</button>
            </div>
          </div>
          <div class="field activities is-centered">
          <h2 class="subtitle has-text-weight-medium">Activities</h2>
          <ul>
              <li></li>
          </ul>
          </div>
        </div>
        <div class="column is-10 has-text-centered">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Description</th>
                <th>Contact Us</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
              <td>{{ trip.description }}</td>
              <td>
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
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";

export default {
  name: "Trip",
  data() {
    return {
      trip: {},
    };
  },
  mounted() {
    this.gettrip();
  },
  methods: {
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
.button{
    width: 10em;
    height: 2.5em;
    font-size: 1.6em;
}
h2.subtitle{
    letter-spacing: .3em;
}
.activities{
    border: #660746 solid 2px;
    width: 60%;

}
</style>
