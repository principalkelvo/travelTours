<template>
  <section id="cover" class="hero">
    <div id="cover-caption" class="hero-body">
      <div class="container">
        <div class="columns has-text-white">
          <div class="column is-4 is-offset-4">
            <h1 class="title has-text-white">Login</h1>
            <form @submit.prevent="submitForm" class="is-justify-content-center">
              <div class="field">
                <label>Email</label>
                <div class="conrol">
                  <input type="email" name="email" class="input" placeholder="Email" v-model="username"/>
                </div>
              </div>
              <div class="field">
                <label>Password</label>
                <div class="conrol">
                  <input type="password" name="password" class="input" placeholder="Password" v-model="password"/>
                </div>
              </div>
              <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">{{error}}</p>
              </div>
              <div class="field">
                <div class="conrol">
                  <button class="button is-success">Submit</button>
                </div>
              </div>
              
              <hr>

              Or<router-link to="/sign-up"> click here </router-link>to Register
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import {toast} from 'bulma-toast'

export default {
  name: 'Login',
  data(){
    return{
      username:'',
      password :'',
      errors:[]
      }
  },
  mounted(){
    document.title='Welcome | Pokot'
  },
  methods:{
    async submitForm(){
      this.$store.commit('setIsLoading',true)
      axios.defaults.headers.common['Authorization']='' //reset the authorization
      localStorage.removeItem('token') //just to make sure that we are not auntheticated
      const formData={
        username: this.username,
        password: this.password
      }
      await axios
        .post('/api/v1/token/login/',formData)
        .then(response=>{
          const token=response.data.auth_token

          this.$store.commit('setToken', token)
          axios.defaults.headers.common['Authorization']='Token '+ token
          localStorage.setItem('token', token)

          //back to previous page or to home
          const toPath = this.$route.query.to || '/home'
          this.$router.push(toPath)
        })
         .catch(error=>{
            if(error.response){
              for(const property in error.response.data){
                this.errors.push(`${property}:${error.response.data[property]}`)
              }
            }
            else if(error.message){
              this.errors.push('Something went wrong. Please try again')
            }
          })

          this.$store.commit('setIsLoading',false)
    }
  }
};
</script>
