<template>
    <div class='resetPassword'>
        <div v-if='showResetForm'>
            <h5 class="card-title text-center">Change your password</h5>
            <form  class="form" id='review-form' @submit.prevent="newPassword">
                <div class="form-label-group">       
                    <input v-model="password" name="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required  >
                    <label for="inputPassword">Password</label>
                </div>

                <div class="form-label-group">
                    <input v-model="password_confirm" name="password_confirm" type="password" id="inputPasswordConfirm" class="form-control" placeholder="Confirm Password" required  >
                    <label for="inputPasswordConfirm">Confirm Password</label>
                </div>

                <button class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign up</button>
            </form>      
        </div>

        <div v-else>
            <h2>ERROR 404, something wrong happened</h2>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'resetPassword', 
     data() {
    return {
      showResetForm: false,
      password: '',
      password_confirm:'',
    }
  },
    mounted () {
         this.resetPassword();
    }, 
    methods: {
        resetPassword() {
            let slug = this.$route.params.token
            axios
                .get(`/account/reset/${slug}`)
                .then(response => {
                    if (response.status === 200) {
                        this.showResetForm = true
                    } 
                })
                .catch(error => {
                console.log(error)
                })
        },
        newPassword (){
            let slug = this.$route.params.token
            axios
                .post(`/account/reset/${slug}`, {
                    password: this.password,
                    password_confirm: this.password_confirm
                })
                .then(response => {
                     if (response.status === 200) {
                        this.$router.push({ name: 'login' })
                    } 
                })
                 .catch(error => {
                console.log(error)
                })
        },
    }
}
</script>
