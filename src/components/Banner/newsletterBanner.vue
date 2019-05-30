<template>
    <div class="newsletter">
        <h2>Abonnez-vous à notre lettre d'information hebdomadaire</h2>
        <h5>Quelques projets triés sur le volet par notre équipe, une fois par semaine.</h5>
        <button  @click="automaticSubscribeToNewsletter" v-if="loggedIn"> S'abonner</button> 
        <button v-if="!loggedIn &&  NewsletterForm === false" @click="showNewsletterForm"> S'abonner now</button>
         
         <b-container v-if="NewsletterForm" class=" form col-md-4 col-lg-4 mx-auto">
         <form id='signup-form' @submit.prevent="manuallySubscribeToNewsletter">
                    <div class="form-label-group">
                    <input v-model="first_name" name="first_name" type="text" id="inputFirstName" class="form-control" placeholder="First Name" required autofocus>
                    <label for="inputFirstName">First Name</label>
                    </div>

                    <div class="form-label-group">
                    <input v-model="last_name" name="last_name"type="text" id="inputLastName" class="form-control" placeholder="Last Name" required autofocus>
                    <label for="inputLastName">Last Name</label>
                    </div>

                    <div class="form-label-group">
                    <input v-model="email" name="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                    <label for="inputEmail">Email address</label>
                    </div>

                   <div class="form-label-group">
                    <b-button class="btn btn-lg btn-primary mb-2" type="submit">Sign up</b-button>
                  </div>
                </form>
                </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'newsletterBanner',
    data (){
      return {
        user: JSON.parse(localStorage.getItem('user')),
        NewsletterForm: false,
         email: '',
        first_name:'',
        last_name:''
      }
    },
    computed: {
      loggedIn () {
        return this.$store.getters.loggedIn
      }
    },
    methods: {
      automaticSubscribeToNewsletter() {
        console.log('user infos', this.user)
        axios
        .post("/newslettersubscription", {
          email: this.user.email,
          first_name: this.user.first_name,
          gravatar: this.user.gravatar,
          last_name: this.user.last_name,
          userId: this.user._id
        })
        .then(response => {
          console.log('la reponse', response)
          this.$message({
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
          });
        });
      },
      showNewsletterForm() {
        this.NewsletterForm = true 
      },
      manuallySubscribeToNewsletter(){
        console.log('toputo')
        axios
        .post("/newslettersubscription", {
          email: this.email,
          first_name: this.first_name,
          last_name: this.last_name,
        })
        .then(response => {
          console.log('la reponse', response)
          this.NewsletterForm = false
          this.$message({
          message: 'Félicitations, ceci est un message de succès.',
          type: 'success'
          });
        });
      },
    }
}
</script>

<style>
.newsletter{
  text-align: center; 
  padding: 0 10px;
  border: 1px solid #d6d6d6
}

.newsletter button{
  background-color: black;
  color: white;
  padding: 2%; 
  font-size: 20px;
  margin: 40px;
}

.newsletter h2{
  margin:  40px;
   font-size: calc(24px + 1vw);
  line-height: 2.6rem;
}

.newsletter h3{
  margin: 40px;
  font-size: 1.8rem;
  line-height: 2.4rem;
}

.newsletter button:hover{
  background-color: #4d4d4d;
  position: relative;
  bottom: 1px;
}

</style>

