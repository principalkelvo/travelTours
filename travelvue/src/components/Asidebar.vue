<template>
  <aside class="aside is-placed-left is-expanded">
  <AsideContent/>
  </aside>
</template>

<script>
import AsideContent from '../components/AsideContent.vue'
export default {
  name: "Asidebar",
  components:{
    AsideContent,
  }
};
</script>

<style scoped>


aside.is-placed-left {
  display: block;
}
aside.aside {
  background-color: #660746;

  width: 0rem;
  opacity: 0;

  transition: width 1s ease, opacity 1s ease;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0.5em;
  box-shadow: 1px 0 #c9abad;
  bottom: 0;

  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
 aside.aside {
  opacity: 1;
    width: 14rem;

  }
}
</style>
