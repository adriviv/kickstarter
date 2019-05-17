<template>
<div class="AddReview">
    <Navbar></Navbar>
    <body>
        <h5 class="card-title text-center">Rating</h5>
        <form  class="form" id='review-form' @submit.prevent="review">
            <div class="form-label-group">
                <span>You want to share, please leave a review</span>
                <br>
                <textarea v-model="text" id="text" placeholder="Add your Review" class="form-control"></textarea>
            </div>

            <div class="form-label-group">
                <star-rating v-model="rating" ></star-rating>
            </div>

            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Validate</button>
        </form>      
    </body>
</div>
</template>


<script>
import Navbar from "@/components/Navbar";
import StarRating from 'vue-star-rating';
import axios from 'axios'



export default {
  name: 'AddReview',
   components: {
    Navbar,
    StarRating,
  },
  data() {
    return {
        text: '',
        rating: 0,
    }
  },


    methods: {
        review() {
            let slug = this.$route.params.Pid
            console.log('toujour', slug)
            axios.post(`/show/${slug}/review`, {
                text: this.text,
                rating: this.rating
            })
            .then(response => {
                console.log('review answer', response)
                const r = response.data.access_token
                // localStorage.setItem('token', token)
                // context.commit('retrieveToken', token)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

