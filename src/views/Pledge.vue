<template>
<div class="Pledge">
    <Navbar></Navbar>
    <body>
        <h5 class="card-title text-center">PLEDGE</h5>
        <form  class="form" id='pledge-form' @submit.prevent="pledge">
            <div class="form-label-group">
                <span>MAKE A DONATION</span>
                <br>
                <input v-model="pledgeAmount" type='number' id="pledge" placeholder="Add the Amount" class="form-control"></input>
            </div>


            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Validate</button>
        </form>      
    </body>
</div>
</template>


<script>
import Navbar from "@/components/Navbar";
import axios from 'axios'



export default {
  name: 'Pledge',
   components: {
    Navbar,

  },
  data() {
    return {
        pledgeAmount: 0,
    }
  },


    methods: {
        pledge() {
            let slug = this.$route.params.Pid
            // console.log('toujour', slug)
            axios.post(`/show/${slug}/pledge`, {
                pledge: this.pledgeAmount,
            })
            .then(response => {
                console.log('pledge answer', response)
                this.$router.push({ name: 'home' })
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

