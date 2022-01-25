<template>
  <div class="column is-3">
    <div class="box">
      <figure class="image mb-3">
        <img v-bind:src="trip.get_thumbnail" />
      </figure>
      <h3 class="is-size-6 has-text-weight-medium is-capitalized">{{ trip.name }}</h3>
      <p class="is-size-6 has-text-grey">KSh {{ trip.price }}</p>
      <div v-if="trip.rate===0" class="is-size-5 star"><img src="../../assets/stars/0_star.png" alt=""></div>
      <div v-if="trip.rate===1" class="is-size-5 star"><img src="../../assets/stars/1_star.png" alt=""></div>
      <div v-if="trip.rate===2" class="is-size-5 star"><img src="../../assets/stars/2_star.png" alt=""></div>
      <div v-if="trip.rate===3" class="is-size-5 star"><img src="../../assets/stars/3_star.png" alt=""></div>
      <div v-if="trip.rate===4" class="is-size-5 star"><img src="../../assets/stars/4_star.png" alt=""></div>
      <div v-if="trip.rate===5" class="is-size-5 star"><img src="../../assets/stars/5_star.png" alt=""></div>
      <router-link
        v-bind:to="trip.get_absolute_url"
        class="button mt-2 is-size-7"
        >View details</router-link
      >
      
    </div>
  </div>
</template>

<script>
export default {
  name: "TripBox",
  props: {
    trip: Object,
  },
};
</script>
<style lang="scss" scoped>
.box {
  background-color: transparent;
  box-shadow: none;
  padding: 1.25em 1.25em;
  transition: box-shadow .3s ease-in;
}
.box:hover {
  // box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
  img {
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 100%),
      0 0px 0 1px rgb(10 10 10 / 100%);
  }
}

.image img {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  border-radius: 10%;
  transition: border-radius 1s;
  height: 12em;
  max-height: 100%;
  width:100%;
  max-width:100%;
}

div.star{
  width: 5em;
  img{
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
}

</style>
