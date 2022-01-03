<template>    
    <Asidebar />
</template>
<script>

import Asidebar from "@/components/Asidebar.vue";
export default {
    name:"Dashboard",
    components:{
        Asidebar
    },
    //  beforeCreate: function() {
    //     document.body.className = 'dashboard';
    // },
//     beforeCreate() {
//   this.$nextTick(() => {
//     document.querySelector('body').className = 'dashboard'
//   })
// },
// beforeDestroy() {
//   document.querySelector('body').className = ''
// },
}
</script>
<style>

.dashboard {
  background-color: #F9E2E3;
  padding-left: 14rem;
}

@media (max-width: 1023px) {
 .dashboard{
    padding-left: 0;
    overflow-x: hidden;
    width: 100vw;
  }
}
</style>