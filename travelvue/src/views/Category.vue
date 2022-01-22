<template>
    <div class="page-category hero-body">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-3 has-text-centered">
                    {{category.name}}
                </h2>
            </div>
             <TripBox
        v-for="trip in category.trips"
        v-bind:key="trip.id"
        v-bind:trip="trip"
      />
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { toast } from 'bulma-toast'

import TripBox from "@/components/trip/TripBox";
export default {
    name:'Category',
    data(){
        return{
            category:{
                trips:[]
            }
        }
    },
    components:{
        TripBox,
    },
    mounted(){
        document.title=this.category.name +' | Trip'
        this.getCategory()

    },
    //when we switch betweeb two dynamic routes the life cycle hooks will not be caled thats why we use WATCH
    watch:{
        $route(to,from){
            if(to.name==='Category'){
                this.getCategory()
            }
        }
    },
    methods:{
        async getCategory(){
            const categorySlug= this.$route.params.category_slug
            
            await axios
                .get(`/api/v1/trips/${categorySlug}/`)
                .then(response=>{
                    this.category= response.data
                })
                .catch(error=>{
                    console.log(error)
                    toast({
                        message:'Something went wrong. Please try again',
                        type:'is-danger',
                        dismissible: true,
                        pauseOnHover:true,
                        duration:3000,
                        position: 'bottom-right',
                    })
                })
                
        }
    }
}
</script>