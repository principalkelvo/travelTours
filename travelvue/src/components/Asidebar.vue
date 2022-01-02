<template>
  <aside class="aside is-placed-left is-expanded">
    <span slot="label"> <b>Admin</b> Null </span>
  </aside>
</template>

<script>
export default {
  name: "Asidebar",
};
</script>

<style scoped>


@media (max-width: 1023px) {
 body{
    padding-left: 0;
    overflow-x: hidden;
    width: 100vw;
  }
}

aside.aside.is-expanded {
  width: 14rem;
}
aside.is-placed-left {
  display: block;
}
aside.aside {
  display: none;
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
    display: block;
    transition-delay: 1s;
  }
}
</style>
