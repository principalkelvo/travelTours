<template>
  <aside class="aside is-placed-left is-expanded">
    <span slot="label"> <b>Admin</b> Kelvin </span>
  </aside>
</template>

<script>
export default {
  name: "Asidebar",
};
</script>

<style scoped>


aside.is-placed-left {
  display: block;
}
aside.aside {
  width: 0rem;
  transition: width 2s;
  display: block;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  height: 100vh;
  padding: 0;
  box-shadow: 1px 0 #c9abad;
  background: #660746;
}
@media (min-width: 1024px) {
 aside.aside {
  opacity: 1;
    width: 14rem;

  }
}
</style>
