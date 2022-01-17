<template>
<div class="">
  <Asidebar />
  <Halfwidth />
  <TripView/>
  <section class="section">

  </section>
  
  
</div>
</template>
<script>
import Asidebar from "@/components/Asidebar.vue";
import Halfwidth from "@/components/Halfwidth_Carousel.vue";
import TripView from "@/components/trip/TripView.vue"
export default {
  name: "Dashboard",
  components: {
    Asidebar,
    Halfwidth,
    TripView
  },
  //  beforeCreate: function() {
  //     document.body.className = 'dashboard';
  // },
  //     beforeCreate() {
  //   this.$nextTick(() => {
  //     document.querySelector('body').className = 'dashboard'
  //   })
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
