<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="footer-copyright">
              <b>&copy; {{ year }}, Pokot</b> tours &mdash; Admin Name <span class="tag">v1.0.0</span>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a href="#">
                <img src="../assets/logo.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Footer',
  computed: {
    year () {
      return dayjs().year()
    },
  }
}
</script>

<style scoped>
footer.footer {
  border-top: 3px solid #f1f2f2;
  background: #F9E2E3;
  }

  .logo 
    a {
      display: block;
      height: 2rem;
    }
    .logo img, svg {
      width: auto;
      height: 2rem;
    }
  


 @media (max-width: 1023px) {
 .footer-copyright {
    text-align: center;
  }
 }
</style>