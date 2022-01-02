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
  methods: {},
};
</script>
<style lang="scss">
@import "../node_modules/bulma";


</style>
