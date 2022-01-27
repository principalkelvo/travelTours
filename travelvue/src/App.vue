<template>
  <div>
    <Navbar />
    <router-view />
    <Footer v-if="width < 1023" />
    <BigFooter v-else/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/footer.vue";
import BigFooter from "@/components/BigFooter.vue"
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    BigFooter,
  },
  data() {
    return {
      width: window.innerWidth, height: window.innerHeight
    };
  },
   created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    handleStyles() {
      // dashboard style to the body tag for the dashboard page
      if (["/"].includes(this.$route.path))
        document.body.className = "dashboard";
      // remove dashboard style to the body tag for all other pages
      else if (document.body.classList.contains("dashboard"))
        document.body.className = "";

      // dashboard style to the body tag for the dashboard page
      var remover = document.getElementById("navbar-item");
      if (["/"].includes(this.$route.path)) remover.className = "clearNav";
      // remove dashboard style to the body tag for all other pages
      else if (remover.classList.contains("clearNav")) remover.className = "";
    },

    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      console.log(this.width +'port'+ this.height)
    },
  },
  // Handle styles when the app is initially loaded
  mounted() {
    this.handleStyles();
    this.onResize();

  },
  // Handle styles when the route changes
  watch: {
    $route() {
      this.handleStyles();
    },
  //   windowWidth: function (newQuestion, oldQuestion) {
  //     fullwidth===this.windowWidth
  //     console.log(fullwidth)
  // },
}
}
</script>
<style lang="scss">

// $base-color: #660746;
// $base-color-light: #f9e2e3;
// $white: white;
// $black: black;



</style>
