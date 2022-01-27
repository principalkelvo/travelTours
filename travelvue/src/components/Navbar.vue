<template>
  <nav class="navbar p-4">
    <div class="navbar-brand" >
      <div id="navbar-item" class="mt-3">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo.png" alt="">
      </router-link>
      </div>
      <!--search button-->
      <div class="navbar-start">
        <div class="navbar-item">
          <form method="get" action="/search">
          <div class="field has-addons">
            <div class="control">
              <input type="text" class="input" placeholder="What are you looking for?" name="query"> 
            </div>
            <div class="control">
              <button class="button">
                <span class="icon">
                  <i class="fas fa-search"></i>
                </span>
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
      <a
        class="navbar-burger burger has-text-white"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      class="navbar-menu"
      id="navbar-menu"
      v-bind:class="{ 'is-active': showMobileMenu }"
    >

    


      <div class="navbar-end">
        <router-link to="/home" class="navbar-item">HOME</router-link>
        <router-link to="/about" class="navbar-item">ABOUT US</router-link>
        <router-link to="/contact" class="navbar-item">CONTACT</router-link>
        <router-link to="/booking" class="navbar-item">BOOKING</router-link>
        <!-- <div class="navbar-item">
          <div class="buttons">
            <router-link to="/log-in" class="button is-light"
              >Log In</router-link
            >
            <router-link to="#" class="button is-light"
              ><span class="icon"
                ><i class="fa fa-shopping-cart" aria-hidden="true"></i></span
              ><span>cart</span>
            </router-link>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    }
};
</script>

<style>
.clearNav{
  display: none;
}
</style>


<style lang="scss" scoped>
// $base-color: #660746;
// $base-color-light: #f9e2e3;
// $white: white;
// $black: black;


</style>
