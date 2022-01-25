<template>
    <div class="page-search">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">Search</h1>
                <h2 class="is-size-5 has-text-grey">Search term: " {{query}} "</h2>
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
            query:''
        }
    },
    mounted(){
        document.title='Search | Trip'
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

        }
    }

}
</script>