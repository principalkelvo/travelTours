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
  methods: {
      handleStyles () {
        // Red style to the body tag for the home page
        if (['/'].includes(this.$route.path)) document.body.className = 'dashboard'
        // Pink style to the body tag for all other pages
        else if (document.body.classList.contains('dashboard')) document.body.className = ''
      }
    },
    // Handle styles when the app is initially loaded
    mounted () {
      this.handleStyles()
    },
    // Handle styles when the route changes
    watch: {
      '$route' () {
        this.handleStyles()
      }
    }
};
</script>
<style lang="scss">
@import "../node_modules/bulma";
html{
  background: #F9E2E3;
}
section{
  background: #F9E2E3;
  padding: 22px;
}
.button{
  background-color: #660746;
  color: #ffffff;
}
//All titles
h1::before {
  content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
  text-decoration: line-through;
  margin: auto 0.5em;
}
.button:hover, .button.is-hovered {   
  background-color: #F9E2E3; 
  border-color: #660746;
    color: #660746;
}
.button:active, .button.is-active {
    background-color: #F9E2E3; 
  border-color: #660746;
    color: #660746;
    box-shadow: 0 0 0 0.125em rgb(72 95 199 / 25%);
}
.button:focus, .button.is-focused {
  background-color: #F9E2E3; 
  border-color: #660746;
    color: #660746;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>
