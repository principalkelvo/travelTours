<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <strong>LOGO</strong>
      </router-link>
      <a
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/home" class="navbar-item">HOME</router-link>
        <router-link to="/about" class="navbar-item">ABOUT US</router-link>
        <router-link to="/contact" class="navbar-item">CONTACT</router-link>
        <router-link to="/booking" class="navbar-item">BOOKING</router-link>
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/log-in" class="button is-light"
              >Log In</router-link
            >
            <router-link to="/cart" class="button is-light">cart</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
nav.navbar {
  box-shadow: 0 1px #660746;
  background-color: #f9e2e3;
  color: black;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  border-bottom: 5px solid #660746;
  color: #660746;
  background-color: #f9e2e3;
}
</style>
