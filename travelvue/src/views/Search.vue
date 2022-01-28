<template>
    <div class="page-search">
        <div class="utility columns is-multiline">
            <div class="column is-4">
                <h1 class="title">Search</h1>
                <h2 class="is-size-5 has-text-grey">Search term: " {{query}} "</h2>
            </div>
            
            <!-- for filtering based on price  -->
            <div class="column is-4">
                <select name="price" id="price-list" onchange="location = finalurl2()">
                    <option value="" id="price-placeholder" disabled selected hidden>Price</option>
                    <option id="pr500" value="500">less than 500</option>
                    <option id="pr1000" value="1000">less than 1000</option>
                    <option id="pr2000" value="2000">less than 2000</option>
                    <option id="pr5000" value="5000">less than 5000</option>
                    <option id="pr10000" value="10000">less than 10000</option>

                </select>
            </div>

            <!-- for making sorting functionality -->
            <div class="column is-4">
                <select name="sort" id="sort-list" @change="finalurl()">
                    <option value="" id="price-placeholder" disabled selected hidden>Sort</option>
                    <option id="price" value="price">Price: Low to High</option>
                    <option id="price" value="-price">Price: High to Low</option>
                    <option id="trip_name" value="name">Title</option>
                    <option id="-date_added" value="-date_added">What's New</option>

                </select>
                
            </div>
            <TripBox
                class="column is-3"
                v-for="trip in trips"
                v-bind:key="trip.id"
                v-bind:trip="trip"
                />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TripBox from "@/components/trip/TripBox";




export default {
    name:'Search',
    components:{
        TripBox
    },
    data(){
        return{
            trips:[],
            query:'',
        }
    },
    mounted(){
        document.title='Search | Trip'

        //all search
        let uri= window.location.search.substring(1)
        let params = new URLSearchParams(uri)
        if(params.get('query')){
            this.query= params.get('query')
            this.performSearch()
        }
    },
    methods:{
        async performSearch(){

            await axios
                .post('/api/v1/trips/search/',{'query':this.query})
                .then(response=>{
                    this.trips= response.data
                })
                .catch(error=>{
                    console.log(error)
                })

        },
        finalurl(){
            var url = new URL(window.location.href);
            console.log(url);
            var search_params = url.searchParams
            search_params.set('ordering',document.getElementById('sort-list').value);
            url.search= search_params.toString();
            var new_url = url.toString();
            window.location = new_url
        }
    }

}
</script>
<style scoped>
h1::before{
    content: '';
}
</style>