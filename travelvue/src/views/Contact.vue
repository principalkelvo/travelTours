<template>
  <div class="contact">
    <Fullwidth />

    <section class="section hero">
      <div class="hero-body">
        <div class="columns multiline">
          <div class="column is-12">
            <!-- contact inputs -->
            <div class="column is-6">
              <!-- enquiry type -->
              <div class="field is-horizontal">
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="control">
                      <div class="select is-fullwidth is-medium">
                        <select>
                          <option>Enquiry type *</option>
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
                    <p
                      class="control is-expanded has-icons-left has-icons-right"
                    >
                      <input
                        class="input is-success is-medium"
                        type="email"
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
                          placeholder="Your phone number"
                        />
                      </p>
                    </div>
                    <p class="help">Do not enter the first zero</p>
                  </div>
                </div>
              </div>

              <!-- reservation -->
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
                          type="date"
                          placeholder="Check-in"
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
                          type="date"
                          placeholder="Check-out"
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
                        />
                        <span class="icon is-small is-left">
                          <i class="fas fa-child"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <!-- add comments -->
              <div class="field is-horizontal mt-5">
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea
                        class="textarea is-medium"
                        placeholder="Explain how we can help you"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <!-- checkbox subscribe to letters -->
              <label class="checkbox mt-5">
                <input type="checkbox" />
                I consent to receive news and offers via email from Pokot Tours
                and Travel
              </label>

              <!-- submit button  -->
              <div class="field is-horizontal mt-5">
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <button class="button">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- contact details -->
            <div class="column is-6"></div>
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
  components: {
    Fullwidth,
  },
};
</script>
