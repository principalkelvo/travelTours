<template>

  <section class="hero-body">
    <div class="image logo mb-4">
        <img src="../assets/logo.png" alt="">
      </div>
    <div class="columns is-multiline">
      
      <div class="column is-12 categoryTitle">
        <h2 class="subtitle has-text-left m-1">Categories</h2>
      </div>

      <!-- Category field  -->
      <div class="field category p-2 mt-3">
        <router-link to="/family" class="aside-item">Family</router-link>
        <router-link to="/wedding" class="aside-item">Wedding</router-link>
        <router-link to="/dinner" class="aside-item is-capitalized">dinner</router-link>
        <router-link to="/conferences" class="aside-item is-capitalized">conferences</router-link>
        <router-link to="/bars_clubs" class="aside-item">Bars and Clubs</router-link>
      </div>

      <div class="field category p-2 mt-2">
        <router-link to="/contact" class="aside-item">Help</router-link>
        <router-link to="/contact" class="aside-item">Terms of Service</router-link>
      </div>

    </div>
    <footer >
        <router-link to="/contact" class="aside-item">
        <img src="../assets/emoji/logout.png" alt="bye">
        Log Out</router-link>
    </footer>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "AsideContent",
  data() {
    return {
      category: {
        trips: [],
      },
    };
  },
  components: {},
};
</script>
<style scoped>
.logo{
  width:8em;
  height: 8em;
  border: 2px white;
  color: #f9e2e3;
  border-radius: 50%;

  
}
.logo img{
  max-width: 100%;
  max-height: 100%;
  border: 2px white;
  padding: 2em;

}
/* category tite its absolute */

.categoryTitle{
    position: absolute;
    width: 70%;
    height: 2em;
    top: 10.5em;
    margin: 0 1.5em;
    left: 0;
    padding: 2px 8px; 
  border-radius: 10px;
  background-color: #f9e2e3de ;

}
.subtitle{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1em;
}
section, footer {
  background: none;
  opacity: 0;
  transition: opacity 2s ease-in;

}
section,
.section,
.title,
h2 {
  color: white;
  font-weight: normal;
    

}
h2.subtitle {
  color: black;
  font-weight: normal;
  transform: scale(0.9, 1.5);

}
.category{
    display: grid;
    line-height: 1.4;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1em;
    margin-left: 5px;
}

.aside-item{
    color: #d1cccf;
    display: inline-flex;
    font-weight: lighter;
    /* transform: scale(0.83, 1.33); */
}
footer{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1em;
    position: absolute;
    bottom: 10%;
    
}
.aside-item img{
    height: 1.5em;
    margin-right: .2em;
}
@media (min-width: 1024px) {
 section,footer {
  opacity: 1;


  }
}


/* .logo:hover{
  box-shadow: 0 0 0 0.125em rgb(102 7 70 / 25%);
} */

</style>