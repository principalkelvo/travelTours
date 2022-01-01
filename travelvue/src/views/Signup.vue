<template>
  <section id="cover" class="hero">
    <div id="cover-caption" class="hero-body">
      <div class="container">
        <div class="columns has-text-white">
          <div class="column is-4 is-offset-4">
            <h1 class="title has-text-white">Sign up</h1>
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
                  <input type="password" name="password1" class="input" placeholder="Password" v-model="password1"/>
                </div>
              </div>
              <div class="field">
                <label>Confirm password</label>
                <div class="conrol">
                  <input type="password" name="password2" class="input" placeholder="Confirm Password" v-model="password2"/>
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

              Or <router-link to="/log-in">click here </router-link>to Log-in
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
  name: "SignUp",
  data(){
    return{
      username:'',
      password1 :'',
      password2:'',
      errors:[]
      }
  },
  mounted(){
    document.title='Register | Djackets'
  },
  methods:{
    async submitForm(){
      this.$store.commit('setIsLoading',true)
      this.errors=[]
      if(this.username===''){
        this.errors.push('The username is missing')
      }
      if(this.password1===''||this.password1.length<4){
        this.errors.push('The password is too short')
      }
      if(this.password1!==this.password2){
        this.errors.push('The passwords are not matching')
      }
      if(!this.errors.length){
        const formData={
          username:this.username,
          password:this.password1
        }
        axios
          .post('/api/v1/users/',formData)
          .then(response=>{
            toast({
              message:'Account was created, Please login',
              type:'is-success',
              dismissible:true,
              pauseOnHover:true,
              duration:2000,
              position:'bottom-right'
            })
            this.$router.push('/log-in')
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

      console.log('hello')
    }
  }
};
</script>

<style>
#cover {
    background: #222 url('https://unsplash.it/1920/1080/?random') center center no-repeat;
    background-size: cover;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
}

#cover-caption {
    width: 100%;
    position: relative;
    z-index: 1;
}

/* only used for background overlay not needed for centering */
form:before {
    content: '';
    height: 100%;
    left: 18%;
    position: absolute;
    top: 0;
    width: 65%;
    background-color: rgba(0,0,0,0.3);
    z-index: -1;
    border-radius: 10px;
}
</style>
