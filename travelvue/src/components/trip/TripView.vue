<template>
<div class="product">
    <div class="image product-small-img">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
    </div>
    <div class="img-container image">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" id="imageBox">
    </div>
</div>
</template>

<script>
export default {
    name:'TripView',
    data(){
        
        return{
        }
    },
    methods:{
        myfunction(smallImg){
            var fullImg = document.getElementById("imageBox")
            smallImg.src= fullImg.src
            this.fullImg= this.fullImg
        }
    }
}
</script>
<style scoped>

.product-small-img img{
    height: 2.5em;
    margin: 1em 0;
    cursor: pointer;
    display: block;
    opacity: .5;
}
.product-small-img img:hover{
    opacity: 1;
}
.product-small-img{
    float: left;
}

.img-container img{
    height: 16.5em;
}
.img-container{
    float: right;
    padding: 1em;
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