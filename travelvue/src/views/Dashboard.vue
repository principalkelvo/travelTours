<template>
<div class="dashboard-section">
  <section class="section">
    <!-- side bar  -->
    <Asidebar />
    <!-- carousel -->
    <Halfwidth />
    <!-- featured offers,latest trips  -->
    <div class="columns is-multiline hero-body">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-weight-bold has-text-left">
          Featured Offers <b style="color: red">❤</b>
        </h2>
      </div>

      <div class="trip-flex column is-12">
        <TripBox
          v-for="trip in latestTrips.slice(0, 4)"
          v-bind:key="trip.id"
          v-bind:trip="trip"
        />
      </div>
    </div>

    <!-- popular places  -->
    <div class="columns is-multiline hero-body">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-weight-bold has-text-left">
          Popular Destinations ⭐
        </h2>
      </div>

      <div class="trip-flex column is-12">
        <TripBox
          v-for="trip in popularTrips.slice(0, 4)"
          v-bind:key="trip.id"
          v-bind:trip="trip"
        />
      </div>
    </div>

    <div class="columns is-multiline hero-body">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-weight-bold has-text-left">Family ⭐</h2>
      </div>
      <div class="trip-flex column is-12">
        <TripBox
          v-for="trip in category.trips.slice(0, 4)"
          v-bind:key="trip.id"
          v-bind:trip="trip"
        />
      </div>
    </div>
  </section>
</div>
</template>
<script>
import axios from "axios";

// components
import Asidebar from "@/components/Asidebar.vue";
import Halfwidth from "@/components/Halfwidth_Carousel.vue";
import TripBox from "@/components/trip/TripBox";

export default {
  name: "Dashboard",
  data() {
    return {
      latestTrips: [],
      popularTrips: [],
      category: {
        trips: [],
      },
    };
  },
  components: {
    Asidebar,
    Halfwidth,
    TripBox,
  },

  mounted() {
    this.getLatestTrips();
    this.getPopularTrips();
    this.getFamilyCategory();
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
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getFamilyCategory() {
      // const categorySlug= this.$route.params.category_slug

      // family category if you want to add another
      // bouque change family to category slug
      const categorySlug = "family";
      await axios
        .get(`/api/v1/trips/${categorySlug}/`)
        .then((response) => {
          this.category = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  //  beforeCreate: function() {
  //     document.body.className = 'dashboard';
  // },
  //     beforeCreate(() => {
  //     document.querySelector('body').className = 'dashboard'
  //   })) {
  //   this.$nextTick(
  // },
  // beforeDestroy() {
  //   document.querySelector('body').className = ''
  // },
};
</script>
<style lang="scss">

</style>
