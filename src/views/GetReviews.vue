<template>
  <div class="getReviews">
    <Navbar></Navbar>
    <CategoryHeader></CategoryHeader>


 <div v-for="review in reviews"  :key="review._id">
          <h3>{{review.text}}</h3>
          <h2>{{`★`.repeat(review.rating)}}</h2>`

 </div>
</div>
</template>
<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import CategoryHeader from "@/components/CategoryHeader";
import StarRating from 'vue-star-rating';

export default {
  name: "getReviews",
  components: {
    Navbar,
    CategoryHeader,
    StarRating
  },

  data() {
    return {
    reviews: [],
    };
  },

  mounted () {
   this.loadData();
  },

  methods: {
    loadData() {
        const slug = this.$route.params.Pid
    axios
      .get("/show/:slug/getReviews")
      .then(response => {
          console.log('response getReviews', response)
          this.reviews = response.data.reviews 
       });
    },
  }
};
</script>





<style>


</style>
