<template>
  <div >
    <Navbar/>
    <Asidebar/>
    <router-view/>
    <Footer/>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import Asidebar from '@/components/Asidebar.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Asidebar,
    Footer
  },
  computed: {
    
  },
  created () {
   
  },
  methods: {
    
}
}
</script>
<style lang="scss">
@import "../node_modules/bulma";
</style>
