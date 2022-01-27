<template>

  <section class="hero-body asidecontent">
    <div class="image logo mb-4">
        <img src="../assets/logo.png" alt="">
      </div>
    <div class="columns is-multiline">
      
      <div class="column is-12 categoryTitle">
        <h2 class="subtitle has-text-left m-1">Categories</h2>
      </div>

      <!-- Category field  -->
      <div class="field category p-2 mt-3">
        <router-link to="/family" class="aside-item">Family</router-link>
        <router-link to="/wedding" class="aside-item">Wedding</router-link>
        <router-link to="/dinner" class="aside-item is-capitalized">dinner</router-link>
        <router-link to="/conferences" class="aside-item is-capitalized">conferences</router-link>
        <router-link to="/bars_clubs" class="aside-item">Bars and Clubs</router-link>
      </div>

      <div class="field category p-2 mt-2">
        <router-link to="/contact" class="aside-item">Help</router-link>
        <router-link to="/contact" class="aside-item">Terms of Service</router-link>
      </div>

    </div>
    <footer >
        <router-link to="/contact" class="aside-item">
        <img src="../assets/emoji/logout.png" alt="bye">
        Log Out</router-link>
    </footer>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "AsideContent",
  data() {
    return {
      category: {
        trips: [],
      },
    };
  },
  components: {},
};
</script>
<style lang='scss' scoped>


</style>