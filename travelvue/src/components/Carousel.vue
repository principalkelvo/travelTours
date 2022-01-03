<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <i @click="prevSlide" class="fas fa-chevron-left"></i>
      </div>
      <div class="toggle-page right">
        <i @click="nextSlide" class="fas fa-chevron-right"></i>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="pagintationEnabled" class="pagination" id="pagination">
      <span
        @click="goToSlide(index)"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{ active: index + 1 === currentSlide }"
      >
      </span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: ["startAutoPlay", "timeout", "navigation", "pagination"],
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );
    const timeoutDuration = ref(props.timeout === undefined ? 4000 : props.timeout);
    const pagintationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navEnabled = ref(props.navigation === undefined ? true : props.navigation);
    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };
    // prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };
    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };
    // autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };
    if (autoPlayEnabled.value) {
      autoPlay();
    }
    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });
    return {
      currentSlide,
      nextSlide,
      prevSlide,
      getSlideCount,
      goToSlide,
      pagintationEnabled,
      navEnabled,
    };
  },
};
</script>

<style lang="scss">
.navigate {
  padding: 0 0px;
  height: 50%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  opacity: 0;
  transition: 1s;
  .toggle-page {
    display: flex;
    flex: 1;
  }
  .left{
      justify-content: flex-start;
  }
  .right {
    justify-content: flex-end;
  }
  i {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #3E8ED0;
    color: #fff;
  }
}
.pagination {
  position: absolute;
  bottom: 20px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 1s;
  span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: solid #48C78E 3px ;
    border-radius: 50%;
    //background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  .active {
    background-color: #3E8ED0;
  }
}
.carousel:hover .pagination{
    opacity: 1;
}
.carousel:hover .navigate{
    opacity: 1;
}
@media (max-width:770px){
    .navigate i{
        background: transparent;
    }
    .pagination{ 
        bottom: 10px;
        span{
        width: 10px;
        height: 10px;
        border: solid #48C78E 1px ;
        }
    }
}
</style>