<template>
<div class="product">
    <div class="product-small-img">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" @click="myfunction(this)">
    </div>
    <div class="img-container">
        <img src="@/assets/fullwidth/alec-brunelle--G5fUA5Zk_U-unsplash.jpg" id="imageBox">
    </div>
</div>
</template>

<script>
export default {
    name:'TripView',
    data(){
        var fullImg = document.getElementById("imageBox")
        return{
        }
    },
    methods:{
        myfunction(smallImg){
        
            
            fullImg.src = smallImg.src;
            console.log(smallImg.src +'small')
            console.log(fullImg.src +'big')
            this.fullImg= this.fullImg
        }
    }
}
</script>
<style scoped>

.product-small-img img{
    height: 92px;
    margin: 10px 0;
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
/* .product{
    top: 10%;
    left: 14rem;
    transform: translate(-50%,-50%);
    position: absolute;
} */

.img-container img{
    height: 500px;
}
.img-container{
    float: right;
    padding: 10px;
}
@media (max-width: 1023px) {
  .img-container img{
    min-height: 125px;
}
.img-container{
    float: right;
    padding: 10px;
}
.product-small-img img{
    min-height: 23px;
    margin: 10px 0;
    cursor: pointer;
    display: block;
    opacity: .5;
}
  
}
</style>