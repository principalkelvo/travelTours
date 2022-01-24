<template>
    <!--Footer-->
    <footer>
      <div class="footer">
        <!--footerimage-->
        <div class="footer_img image">
          <img src="../assets/fullwidth/harshil-gudka-nvGlbNu_07I-unsplash.jpg" alt="" />
        </div>

        <!--footer content-->
        <div class="content_bg">
          <div class="footer_content">
            <!--footer subscribe input-->
            <div class="field has-addons pt-6 pr-6">
              <div class="control is-expanded">
                <input
                  class="input is-normal"
                  type="email"
                  placeholder="Your email..."
                />
              </div>
              <!--footer subscribe button-->
              <div class="control is-expanded">
                <button class="button is-light is-normal">Subscribe</button>
              </div>
            </div>
            <div class="columns is-multiline pt-6 pb-6 mt-5 pr-6">
              <div class="services column is-4">
                <h2 class="subtitle mb-1">Services</h2>
                <ul class="mb-1">
                  Tour guiding
                </ul>
                <ul class="mb-1">
                  wedding
                </ul>
                <ul class="mb-1">
                  Team building
                </ul>
                <ul class="mb-1">
                  Conference
                </ul>
              </div>
              <div class="about column is-4">
                <h2 class="subtitle mb-1">About Us</h2>
                <ul class="mb-1">
                  Get to know us
                </ul>
                <ul class="mb-1">
                  Customers' Reviews
                </ul>
              </div>
              <div class="contact_us column is-4">
                <h2 class="subtitle mb-1">Contact Us</h2>

                <ul class="mb-1">
                  <i class="fas fa-map-marked-alt pr-2"></i>
                  Kapenguria, Kenya
                </ul>
                <ul class="mb-1">
                  <i class="fas fa-phone pr-2"></i>
                  +254712345678
                </ul>
                <ul class="mb-1">
                  <i class="fa fa-envelope pr-2" aria-hidden="true"></i>
                  pokotours@gmail.com
                </ul>
              </div>
            </div>

            <hr class="mr-6" />

            <div class="columns is-multiline">
              <div class="column is-9">All rights reserved @2022</div>

              <div class="footer_icons column is-3">
                <a><i class="fab fa-instagram"></i></a>
                <a><i class="fab fa-facebook-f"></i></a>
                <a><i class="fab fa-twitter"></i></a>
                <a><i class="fab fa-tripadvisor"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>
<script>
export default {
    name:'BigFooter',
}
</script>
<style lang="scss" scoped>
//footer
.footer {
  position: relative;
  height: 100%;
}
.footer_img {
  position: absolute;
  width: 30%;
  height: 78%;
  left: 1%;
  border: 2px solid;
  top: -2%;
  border-radius: 10px;
  
  img {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  border-radius: 10px;
}
}

.footer {
  background: #f9e2e3;
  .subtitle {
    color: white;
  }
  a i {
    color: #f9e2e3;
    padding: 0 10px;
  }
  input.input {
    background-color: none;
  }
  .select select,
  .textarea,
  .input {
    background-color: #660746;
    border-color: #f9e2e3;
    border-radius: 20px;
    color: #ece4e9;
  }
  ::-webkit-input-placeholder {
    color: #ece4e9a6;
  }
  :-moz-placeholder {
    color: #ece4e9a6;
  }
  :-ms-input-placeholder {
    color: #ece4e9a6;
  }
  ::-moz-placeholder {
    color: #ece4e9a6;
  }
}
.content_bg {
  padding-left: 2%;
  height: 100%;
}
.footer_content {
  background-color: #660746;
  padding-left: 35%;
  padding-top: 2%;
  height: 100%;
  border-radius: 2%;
  color: #f9e2e3;
  padding-bottom:10% ;
}
</style>