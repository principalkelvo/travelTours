<template>
  <div class="trip section">
    <div class="page-product">
      <div class="columns is-multiline">
        <div class="column is-7">
          <figure class="image mb-3">
            <img v-bind:src="trip.get_image" />
          </figure>

          <h2 class="title">{{ trip.name }}</h2>
          <p>{{ trip.description }}</p>
        </div>
        <div class="column is-5">
          <h2 class="subtitle">Information</h2>
          <p><strong>Price:</strong>${{ trip.price }}</p>
          <div class="field has-addons mt-6">
            <div class="control">
              <input type="number" class="input" min="1" v-model="quantity" />
            </div>
            <div class="control">
              <a class="button">Book Now</a>
            </div>
          </div>
        </div>      
          <div class="column is-4">
              a
          </div>
          <div class="column is-4">
              b
          </div>
          <div class="column is-4">
              c
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'

export default {
  name: "Trip",
  data(){
      return{
          trip:{}
      }
  },
  mounted(){
        this.gettrip()

  },
  methods:{
      async gettrip(){

            const category_slug= this.$route.params.category_slug
            const trip_slug= this.$route.params.trip_slug

            await axios
                .get(`/api/v1/trips/${category_slug}/${trip_slug}`)
                .then(response=>{
                    this.trip= response.data
                    document.title= this.trip.name + ' | Pokot'
                })
                .catch(error=>{
                    console.log(error)
                })

        },
  }
};
</script>
<style scoped>
.image{
    height: 35%;
} 
.image img {
    display: block;
    height: 100%;
    width: 90%;
    border-radius: 10px;

}
</style>