<template>
  <div class="contact">
    <Fullwidth />

    <section class="section hero">
      <div class="hero-body">
        <div class="columns multiline">
          <!-- contact inputs -->
          <div class="column is-6">
            <!-- enquiry type -->
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <div class="select is-fullwidth is-medium">
                      <select v-model="enquiry">
                        <option class="selected">Enquiry type *</option>
                        <option>General enquiry</option>
                        <option>Reservation enquiry</option>
                        <option>Conference enquiry</option>
                        <option>Wedding enquiry</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- name and surname -->
            <div class="field is-horizontal mt-5">
              <!-- first name -->
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input
                      class="input is-medium"
                      type="text"
                      v-model="first_name"
                      placeholder="Name"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>

                <!-- surname -->
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input
                      class="input is-medium"
                      type="text"
                      v-model="surname"
                      placeholder="Surname"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <!-- email and phone -->
            <div class="field is-horizontal mt-5">
              <!-- email -->
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left has-icons-right">
                    <input
                      class="input is-success is-medium"
                      type="email"
                      v-model="email"
                      placeholder="Email"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>

                <!-- phone -->
                <div class="field">
                  <div class="field has-addons">
                    <p class="control">
                      <a class="button is-static is-medium"> +254 </a>
                    </p>
                    <p class="control is-expanded">
                      <input
                        class="input is-medium"
                        type="tel"
                        v-model="phone"
                        placeholder="Your phone number"
                      />
                    </p>
                  </div>
                  <p class="help">Do not enter the first zero</p>
                </div>
              </div>
            </div>

            <!-- reservation -->
            <template v-if="enquiry==='Reservation enquiry'">
            <div class="reservation pb-3">
              <div class="title mt-5">
                <h1>Reservation Details</h1>
              </div>
              <!-- room type -->
              <div class="field is-horizontal mt-5">
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="room_type"
                        placeholder="Room type"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <!-- package type -->
              <div class="field is-horizontal mt-5">
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        v-model="package_type"
                        placeholder="Package type"
                      />
                    </p>
                  </div>
                </div>
              </div>

              <!-- date check-in/out -->
              <div class="field is-horizontal mt-5">
                <!-- check-in -->
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input
                        class="input is-medium"
                        name="date"
                        type="text"
                        onfocus="(this.type='date')"
                        onblur="if(!this.value)this.type='text'"
                        placeholder="Check-in"
                        v-model="check_in"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-calendar"></i>
                      </span>
                    </p>
                  </div>

                  <!-- check-out -->
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input
                        class="input is-medium"
                        name="date"
                        type="text"
                        onfocus="(this.type='date')"
                        onblur="if(!this.value)this.type='text'"
                        placeholder="Check-out"
                        v-model="check_out"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-calendar"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- adults and children -->
              <div class="field is-horizontal mt-5">
                <!-- Adults -->
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input
                        class="input is-medium"
                        type="number"
                        placeholder="Adults"
                        v-model="adults_no"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-male"></i>
                      </span>
                    </p>
                  </div>

                  <!-- child -->
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input
                        class="input is-medium"
                        type="number"
                        placeholder="Children"
                        v-model="children_no"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-child"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </template>

            <!-- wedding details -->
            <template v-if="enquiry==='Wedding enquiry'">
            <div class="wedding pb-3" >
              <div class="title mt-5">
                <h1>Wedding Details</h1>
              </div>

              <!-- wedding date -->
              <div class="field is-horizontal mt-5">
                <!-- check-in -->
                <div class="field-body">
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input
                        class="input is-medium"
                        name="date"
                        type="text"
                        onfocus="(this.type='date')"
                        onblur="if(!this.value)this.type='text'"
                        placeholder="Wedding date"
                        v-model="wedding_date"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-calendar"></i>
                      </span>
                    </p>
                  </div>


                  <!-- number of guests -->
                  <div class="field">
                    <p class="control is-expanded has-icons-left">
                      <input
                        class="input is-medium"
                        type="number"
                        placeholder="Number of guests"
                        v-model="guests_no"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-church"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Package type -->
              <div class="field is-horizontal mt-5">
                <div class="field-body">
                  <div class="field">
                    <p class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Request Package"
                        v-model="package_type_wed"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </template>



            <!-- add comments -->
            <div class="field is-horizontal mt-5">
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea
                      class="textarea is-medium"
                      placeholder="Explain how we can help you"
                      v-model="comment"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <!-- checkbox subscribe to letters -->
            <label class="checkbox mt-5">
              <input type="checkbox" v-model="check"/>
              I consent to receive news and offers via email from Pokot Tours
              and Travel
            </label>

            <!-- submit button  -->
            <div class="field is-horizontal mt-5">
              <div class="field-body">
                <div class="field">
                  <div class="control has-text-centered">
                    <button class="button" @click="submitForm">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- contact details -->
          <div class="column is-6 details">
            <div class="column">
              <h2 class="subtitle has-text-weight-bold is-uppercase">
                Contact Us
              </h2>
              <p>Call : <a href="tel:+254799444133">+254799444133</a></p>
              <p>E-mail : <a href="#">pokotours@gmail.com</a></p>
            </div>
            <div class="column">
              <h2 class="subtitle has-text-weight-bold is-uppercase">Social</h2>
              <p class="mb-2">
                <a href="#"><i class="fab fa-facebook-f mr-3"></i> facebook</a>
              </p>
              <p class="mb-2">
                <a href="#"><i class="fab fa-twitter mr-3"></i> twitter</a>
              </p>
              <p>
                <a href="#"><i class="fab fa-instagram mr-3"></i> instagram</a>
              </p>
            </div>
            <div class="column is-expanded">
              <h2 class="subtitle has-text-weight-bold">HOW TO GET HERE</h2>
              <p>
                <a href="https://goo.gl/maps/JXoruTtZuqT9egM79"
                  >Directions from Nairobi</a
                >
                - 8hrs 16min
              </p>
              <p>
                <a href="https://goo.gl/maps/zqryaNMkg7fFt1ft5"
                  >Directions from Kisumu</a
                >
                - 5hrs 1min
              </p>
              <p>
                <a href="https://goo.gl/maps/nrHkhnPavhB9LjP97"
                  >Directions from Mombasa</a
                >
                - 17hrs 46min
              </p>
            </div>
            <div class="column">
              <h2 class="subtitle has-text-weight-bold">MAPS</h2>
              <p><a href="#">Pokot county map</a></p>
              <p><a href="#">Simuna Cottages and Campsite</a></p>
              <p><a href="#">Nairobi National Park map</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Fullwidth from "../components/Fullwidth_Carousel";

export default {
  name: "Contact",
  data(){
    return{
      first_name:'',
      surname:'',
      email:'',
      phone:'',
      enquiry:'',
      errors:[]
    }
  },
  components: {
    Fullwidth,
  },
  methods:{
    submitForm(){
      console.log('working')
      if(this.enquiry==="" ||this.enquiry==="Enquiry type *" ){
        console.log('empty')
      }
    }
  }
};
</script>
<style scoped>
.details a {
  color: black;
  text-decoration: underline;
  transition: color 0.25s ease-out, background-color 0.25s ease-out, border-color 0.25s ease-out;
}
a:hover {
  color: #660746;
  text-decoration: none;
}
a:focus {
  color: #660746;
  text-decoration: none;
}
</style>
