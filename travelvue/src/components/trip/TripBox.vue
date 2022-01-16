<template>
  <div class="column is-3">
    <div class="box">
      <figure class="image mb-3">
        <img v-bind:src="trip.get_thumbnail" />
      </figure>
      <h3 class="is-size-4">{{ trip.name }}</h3>
      <p class="is-size-6 has-text-grey">${{ trip.price }}</p>
      <router-link
        v-bind:to="trip.get_absolute_url"
        class="button mt-4"
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
  width:100%;
}
</style>
