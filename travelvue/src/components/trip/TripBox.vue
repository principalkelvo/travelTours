<template>
    <div class="column is-3">
        <div class="box">
            <figure class="image mb-4">
                <img v-bind:src="trip.get_thumbnail">
            </figure>
            <h3 class="is-size-4">{{trip.name}}</h3>
            <p class="is-size-6 has-text-grey">${{trip.price}}</p>
            <!-- <router-link v:bind:to="trip.get_absolute_url" class="button is-dark mt-4">View details</router-link> -->

        </div>
    </div>
</template>

<script>
export default {
    name:'TripBox',
    props:{
        trip:Object
    }
}
</script>