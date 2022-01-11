<template>
  <div class="contact section">
    <!--header corousel-->
      <Fullwidth />

    <section class="section hero">
      <div class="hero-body">
        <div class="columns multiline">
          <!-- contact inputs -->
          <div class="column is-6">
            <!-- enquiry type -->
            <label class="label mt-5 is-uppercase">Enquiry Type *</label>

            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field is-expanded">
                  <div class="control">
                    <div class="select is-fullwidth is-medium">
                      <select v-model="enquiry">
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
            <label class="label mt-5 is-uppercase">Name *</label>
            <div class="field">
              <label class="label is-uppercase"></label>

              <div class="field-body is-horizontal">
                <!-- first name -->
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
            <label class="label mt-5 is-uppercase">contact *</label>

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
            <template v-if="enquiry === 'Reservation enquiry'">
              <div class="reservation pb-3">
                <div class="title mt-5">
                  <h2>Reservation Details</h2>
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
            <template v-if="enquiry === 'Wedding enquiry'">
              <div class="wedding pb-3">
                <div class="title mt-5">
                  <h2>Wedding Details</h2>
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

            <!-- conference details -->
            <template v-if="enquiry === 'Conference enquiry'">
              <div class="conference pb-3">
                <div class="title mt-5">
                  <h2>Conference Details</h2>
                </div>

                <!-- company name -->
                <div class="field is-horizontal mt-5">
                  <div class="field-body">
                    <div class="field">
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-medium"
                          type="text"
                          v-model="company_name"
                          placeholder="Company Name"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-meetuo"></i>
                        </span>
                      </p>
                    </div>

                    <!-- nature of conference -->
                    <div class="field">
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-medium"
                          type="text"
                          v-model="conference_type"
                          placeholder="Nature of conference"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-laptop"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- conference date -->
                <div class="field is-horizontal mt-5">
                  <!-- arrival date -->
                  <div class="field-body">
                    <div class="field">
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-medium"
                          name="date"
                          type="text"
                          onfocus="(this.type='date')"
                          onblur="if(!this.value)this.type='text'"
                          placeholder="Arrival date"
                          v-model="arrival_date"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </p>
                    </div>

                    <!-- departure date -->
                    <div class="field">
                      <p class="control is-expanded has-icons-left">
                        <input
                          class="input is-medium"
                          name="date"
                          type="text"
                          onfocus="(this.type='date')"
                          onblur="if(!this.value)this.type='text'"
                          placeholder="Departure date"
                          v-model="departure_date"
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-calendar"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Conference room -->
                <div class="field is-horizontal mt-5">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Conference room"
                          v-model="conference_room"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <!-- room setup -->
                <div class="field is-horizontal mt-5">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Room set up"
                          v-model="room_setup"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <!-- request package -->
                <div class="field is-horizontal mt-5">
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="Request Package"
                          v-model="request_package"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <!-- Av equipment checkbox-->
                <div class="field is-horizontal mt-5">
                  <div class="field-body">
                    <div class="field">
                      <label class="checkbox mt-5">
                        <input type="checkbox" v-model="check_av" />
                        AudioVisuals Equipment Required?
                      </label>
                    </div>
                  </div>
                </div>
                <!-- interested in team building checkbox -->
                <div class="field is-horizontal mt-5">
                  <!-- Number of rooms -->
                  <div class="field-body">
                    <div class="field">
                      <label class="checkbox mt-5">
                        <input type="checkbox" v-model="check_teambuilding" />
                        Interested in Team Building
                      </label>
                    </div>
                  </div>
                </div>
                <!-- interested in accomodation checkbox -->
                <div class="field is-horizontal mt-5">
                  <!-- Number of rooms -->
                  <div class="field-body">
                    <div class="field">
                      <label class="checkbox mt-5">
                        <input type="checkbox" v-model="check_accomodation" />
                        Interested in accommodation
                      </label>
                    </div>
                  </div>
                </div>
                <!-- Accomodation details -->
                <template v-if="check_accomodation != ''">
                  <div class="conference pb-3">
                    <div class="title mt-5">
                      <h2>Accomodation Details</h2>
                    </div>
                    <div class="field is-horizontal mt-5">
                      <!-- Number of rooms -->
                      <div class="field-body">
                        <div class="field">
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-medium"
                              type="number"
                              placeholder="Number of rooms"
                              v-model="rooms_no"
                            />
                            <span class="icon is-small is-left">
                              <i class="fas fa-home"></i>
                            </span>
                          </p>
                        </div>

                        <!-- occupancy -->
                        <div class="field">
                          <p class="control is-expanded has-icons-left">
                            <input
                              class="input is-medium"
                              type="number"
                              placeholder="Occupancy"
                              v-model="occupancy"
                            />
                            <span class="icon is-small is-left">
                              <i class="fas fa-home"></i>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <!-- room type -->
                    <div class="field is-horizontal mt-5">
                      <div class="field-body">
                        <div class="field">
                          <p class="control">
                            <input
                              class="input"
                              type="text"
                              placeholder="Room type"
                              v-model="room_type"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </template>

            <!-- add comments -->
            <label class="label mt-5 is-uppercase">comment *</label>

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
              <input type="checkbox" v-model="check" />
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
            <div class="notification is-danger mt-4" v-if="errors.length">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
            </div>
          </div>

          <!-- contact details -->
          <div class="column is-6 details m-5">
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
  data() {
    return {
      //general
      enquiry: "",
      first_name: "",
      surname: "",
      email: "",
      phone: "",
      comment: "",
      check: "",

      //reservation
      room_type: "",
      package_type: "",
      check_in: "",
      check_out: "",
      adults_no: "",
      children_no: "",

      //wedding
      wedding_date: "",
      guests_no: "",
      package_type_wed: "",

      //conference
      company_name: "",
      conference_type: "",
      arrival_date: "",
      departure_date: "",
      conference_room: "",
      room_setup: "",
      request_package: "",
      //checkboxes
      check_av: "",
      check_teambuilding: "",
      check_accomodation: "",

      //conference book room
      rooms_no: "",
      occupancy: "",
      room_type: "",

      //errors
      errors: [],
    };
  },
  components: {
    Fullwidth,
  },
  methods: {
    submitForm() {
      this.errors = [];

      console.log("working");
      if (this.enquiry === "") {
        this.errors.push("please select enquiry type!");
      }
      //wedding
      else if (this.enquiry === "Wedding enquiry") {
        if (this.wedding_date === "") {
          this.errors.push("The wedding date field is missing!");
        }
        if (this.guests_no === "") {
          this.errors.push("The guests field is missing!");
        }
        if (this.package_type_wed === "") {
          this.errors.push("The package type field is missing!");
        }
      }
      //reservation
      else if (this.enquiry === "Reservation enquiry") {
        if (this.room_type === "") {
          this.errors.push("The room type field is missing!");
        }
        if (this.check_in === "") {
          this.errors.push("The check in date field is missing!");
        }
        if (this.check_out === "") {
          this.errors.push("The check out date field is missing!");
        }
        if (this.package_type === "") {
          this.errors.push("The package type field is missing!");
        }
        if (this.adults_no < 0) {
          this.errors.push("Adults field can not be a negative number");
        }
        if (this.children_no < 0) {
          this.errors.push("Children field can not be a negative number");
        }
      }
      //conference details
      else if (this.enquiry === "Conference enquiry") {
        if (this.company_name === "") {
          this.errors.push("The company name field is missing!");
        }
        if (this.conference_type === "") {
          this.errors.push("The nature of conference field is missing!");
        }
        if (this.arrival_date === "") {
          this.errors.push("The arrival date field is missing!");
        }
        if (this.departure_date === "") {
          this.errors.push("The departure date field is missing!");
        }
        if (this.conference_room === "") {
          this.errors.push("The conference room field is missing!");
        }
        if (this.room_setup === "") {
          this.errors.push("The room set up field is missing!");
        }
        if (this.request_package === "") {
          this.errors.push("The request package field is missing!");
        }
      }
      //conference accomodation
      else if (check_accomodation != "") {
        if (this.rooms_no === "") {
          this.errors.push("The Number of rooms field is missing!");
        }
        if (this.occupancy < 0) {
          this.errors.push("The occupancy field can not be a negative number!");
        }
        if (this.room_type === "") {
          this.errors.push("The room type field is missing!");
        }
      }
      //general
      if (this.first_name === "") {
        this.errors.push("The first_name field is missing!");
      }
      if (this.surname === "") {
        this.errors.push("The surname field is missing!");
      }
      if (this.email === "") {
        this.errors.push("The email email is missing!");
      }
      if (this.phone === "") {
        this.errors.push("The phone field is missing!");
      }
      if (this.phone.length < 6) {
        this.errors.push("The phone field is short!");
      }
      if (this.comment === "") {
        this.errors.push("The comment field is missing!");
      }
    },
  },
};
</script>
<style scoped>
.details a {
  color: black;
  text-decoration: underline;
  transition: color 0.25s ease-out, background-color 0.25s ease-out,
    border-color 0.25s ease-out;
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
