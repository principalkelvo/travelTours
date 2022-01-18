<template>
    <!--carousel-->
    <section class="section hero">
      <div class="hero-body">
    <div class="columns">
      <div class="product column is-6 ">
        
        <div class="field">
          <div class="field-body">
        <div class="img-container image">
          <img
            v-bind:src="productImage"
            
          />
        
        </div>
        </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
        <div class="image product-small-img">
          <img v-for="variant in variants"
            :key="variant.variantId"
            @click="updateImage(variant.variantImage)"
           v-bind:src="variant.variantImage">
        </div>
        </div>
        </div>
      </div>
    </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "TripView",
  data() {
    return {
      productImage:require("@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg"),
      variants:[
        {
          variantId:1,
          variantImage:require("@/assets/fullwidth/pawan-sharma-m41i9RcGcAo-unsplash.jpg")
        },
        {
          variantId:2,
          variantImage:require("@/assets/fullwidth/lunch.jpg")
        },
        {
          variantId:3,
          variantImage:require("@/assets/fullwidth/sandy-millar-YeJWDWeIZho-unsplash.jpg")
        },
        {
          variantId:4,
          variantImage:require("@/assets/fullwidth/windows-4nSKsoYyuPQ-unsplash.jpg")
        },
        {
          variantId:5,
          variantImage:require("@/assets/fullwidth/sutirta-budiman-Wdq1B_wZQUQ-unsplash.jpg")
        }
      ]
    };
  },
  methods: {
    updateImage(variantImage){
      this.productImage = variantImage;
    }
  },
};
</script>
<style scoped>
.product-small-img img {
  height: 4.5em;
  width: 4.5em;
  padding: .5em;
  margin: .2em;
  cursor: pointer;
  display: block;
  opacity: 0.5;
}
.product-small-img img:hover {
  opacity: 1;
}
.product-small-img {
  display: inline-flex;

}

.img-container img {
  height: 16.5em;
}
.img-container {
  float: right;
  width: 80%;

}
.product{
  border: 2px solid;
  
}
/* @media (max-width:767px) {
    .portfolio img {
        max-width: 100%;
        max-height: 100%;
    }
}

@media (min-width:768px) {
    .portfolio img {
        max-width: 240px;
        max-height: 240px;
    }
}

@media (min-width:992px) {
    .portfolio img {
        max-width: 314px;
        max-height: 314px;
    }
}

@media (min-width:1200px) {
    .portfolio img {
        max-width: 380px;
        max-height: 380px;
    }
} */
</style>
