<template>
  <div class="Booking section">    
    <!--header corousel-->
    <Fullwidth/>

  <div class="columns is-multiline">
    <div class="column is-12">
      <h2 class="is-size-2 has-text-weight-bold has-text-centered">
        Latest Products 😋
      </h2>
    </div>

    <TripBox v-for="trip in latestTrips" v-bind:key="trip.id" v-bind:trip='trip'/>

  </div>
  </div>
</template>

<script>
import axios from 'axios'

import Fullwidth from '../components/Fullwidth_Carousel.vue'
import TripBox from '@/components/trip/TripBox'
export default {
  name: 'Booking',
  data(){
    return{
      latestTrips:[]
    }
  },
  components:{
    Fullwidth,
    TripBox,
  },
  mounted(){
    this.getLatestTrips()
  },
  methods:{
    getLatestTrips(){
      axios
        .get('/api/v1/latest-trips/')
        .then(response=>{
          this.latestTrips=response.data
        })
        .catch(error=>{
          console.log(error)
        })
    }
  }

}
</script>
<style scoped>
h2{
  color: black;
}

</style>