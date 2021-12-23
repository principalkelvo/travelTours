<template>
  <div>
    <aside-menu :menu="menu" @menu-click="menuClick" />
    <router-view/>
  </div>
</template>
<script>
import AsideMenu from "@/components/AsideMenu";
export default {
  components: {
    AsideMenu,
  },
};
</script>
<style lang="scss">
@import "../node_modules/bulma";
</style>
