<template>
  <div>
    <Navbar />
    <router-view />
    <Footer v-if="width < 1023" />
    <BigFooter v-else/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/footer.vue";
import BigFooter from "@/components/BigFooter.vue"
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    BigFooter,
  },
  data() {
    return {
      width: window.innerWidth, height: window.innerHeight
    };
  },
   created() {
    window.addEventListener("resize", this.onResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    handleStyles() {
      // dashboard style to the body tag for the dashboard page
      if (["/"].includes(this.$route.path))
        document.body.className = "dashboard";
      // remove dashboard style to the body tag for all other pages
      else if (document.body.classList.contains("dashboard"))
        document.body.className = "";

      // dashboard style to the body tag for the dashboard page
      var remover = document.getElementById("navbar-item");
      if (["/"].includes(this.$route.path)) remover.className = "clearNav";
      // remove dashboard style to the body tag for all other pages
      else if (remover.classList.contains("clearNav")) remover.className = "";
    },

    onResize(e) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      console.log(this.width +'port'+ this.height)
    },
  },
  // Handle styles when the app is initially loaded
  mounted() {
    this.handleStyles();
    this.onResize();

  },
  // Handle styles when the route changes
  watch: {
    $route() {
      this.handleStyles();
    },
  //   windowWidth: function (newQuestion, oldQuestion) {
  //     fullwidth===this.windowWidth
  //     console.log(fullwidth)
  // },
}
}
</script>
<style lang="scss">
@import "../node_modules/bulma";
html {
  background: #f9e2e3;
}
section {
  background: #f9e2e3;
  padding: 22px;
}
img {
  object-fit: cover;
  border-radius: 10px;
}
//All titles
h1::before {
  content: "\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0\00a0";
  text-decoration: line-through;
  margin: auto 0.5em;
}

.button {
  background-color: #660746;
  color: #ffffff;
  transition: background-color 1s, color 1s;
}

.button:hover,
.button.is-hovered {
  background-color: #f9e2e3;
  border-color: #660746;
  color: #660746;
}
.button:active,
.button.is-active {
  background-color: #f9e2e3;
  border-color: #660746;
  color: #660746;
  box-shadow: 0 0 0 0.125em rgb(72 95 199 / 25%);
}
.button:focus,
.button.is-focused {
  background-color: #f9e2e3;
  border-color: #660746;
  color: #660746;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
@media (max-width: 768px) {
  h1::before {
  content: "";
  text-decoration: line-through;
  margin: auto 0.5em;
}  
}
</style>
