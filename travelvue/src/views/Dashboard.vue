<template>
  <section class="section">
    <!-- side bar  -->
  <Asidebar />
  <!-- carousel -->
  <Halfwidth />

  <div class="columns is-multiline hero-body">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-weight-bold has-text-left">
          Featured Offers <b style="color:red">❤</b>
        </h2>
      </div>

      <TripBox
        v-for="trip in latestTrips.slice(0,4)"
        v-bind:key="trip.id"
        v-bind:trip="trip"
      />
    </div>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-3 has-text-weight-bold has-text-left">
          Popular Destinations ⭐
        </h2>
      </div>

      <TripBox
        v-for="trip in popularTrips.slice(0, 4)"
        v-bind:key="trip.id"
        v-bind:trip="trip"
      />
    </div>
  </section>
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
    };
  },
  components: {
    Asidebar,
    Halfwidth,
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
<style>
.dashboard {
  background-color: #f9e2e3;
  padding-left: 14rem;
  transition: padding-left 1s;
  animation: 1s ease-out 0s 1 slideInFromLeft;
}

@media (max-width: 1023px) {
  .dashboard {
    padding-left: 0;
    overflow-x: hidden;
    width: 100vw;
  }
  
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
<style scoped>
h2{
  color: black;
}
</style>
