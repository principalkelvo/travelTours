<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  computed: {},
  created() {},
  methods: {
      handleStyles () {
        // Red style to the body tag for the home page
        if (['/'].includes(this.$route.path)) document.body.className = 'dashboard'
        // Pink style to the body tag for all other pages
        else if (document.body.classList.contains('dashboard')) document.body.className = ''
      }
    },
    // Handle styles when the app is initially loaded
    mounted () {
      this.handleStyles()
    },
    // Handle styles when the route changes
    watch: {
      '$route' () {
        this.handleStyles()
      }
    }
};
</script>
<style lang="scss">
@import "../node_modules/bulma";

</style>
