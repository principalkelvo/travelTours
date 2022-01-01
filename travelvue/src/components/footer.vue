<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="footer-copyright">
              <b>&copy; {{ year }}, tours</b> &mdash; Admin <span class="tag">v1.0.0</span>
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a href="#">
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