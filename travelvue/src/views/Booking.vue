<template>
  <div class="booking section">
    <!--header corousel-->
    <Fullwidth />

    <div class="columns is-multiline hero-body">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-weight-bold has-text-centered">
          Featured Offers <b style="color:red">❤</b>
        </h2>
      </div>
      <div class="trip-flex column is-12">
      <TripBox
        v-for="trip in latestTrips"
        v-bind:key="trip.id"
        v-bind:trip="trip"
      />
      </div>
    </div>

    <div class="columns is-multiline hero-body">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-weight-bold has-text-centered">
          Popular Destinations ⭐
        </h2>
      </div>
      <div class="trip-flex column is-12">

      <TripBox
        v-for="trip in popularTrips"
        v-bind:key="trip.id"
        v-bind:trip="trip"
      />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Fullwidth from "../components/Fullwidth_Carousel.vue";
import TripBox from "@/components/trip/TripBox";
export default {
  name: "Booking",
  data() {
    return {
      latestTrips: [],
      popularTrips: [],
    };
  },
  components: {
    Fullwidth,
    TripBox,
  },
  mounted() {
    this.getLatestTrips() 
    this.getPopularTrips();
  },
  methods: {
    getLatestTrips() {
      axios
        .get("/api/v1/latest-trips/")
        .then((response) => {
          this.latestTrips = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPopularTrips() {
      axios
        .get("/api/v1/popular-trips/")
        .then((response) => {
          this.popularTrips = response.data;
          console.log(this.popularTrips)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
h2 {
  color: black;
}

.trip-flex{
    display: flex;
        flex-wrap: wrap;
        
    flex-grow: 1;
    flex-shrink: 0;
}
@media (max-width: 768px) {

.trip-flex{
    display: inline-flex;
    overflow: auto;
    flex-direction: row;
    height: auto;
    width: 100%;
    flex-wrap: unset;
    padding: 0;
}
.column{
  padding: 0.75rem 0;
}
}
</style>
