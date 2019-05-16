<template>
  <div class="tags">
    <Navbar></Navbar>
    <CategoryHeader></CategoryHeader>
    


    <div v-for="tag in tags"  :key="tag._id">
        <button @click="navigateTo(tag._id)">{{tag._id}} -- {{tag.count}}</button>
    </div>

      <div v-for="project in projects"  :key="project._id">
        <p>{{project.name}}</p>
        <p>{{project.description}}</p>
        <p>{{project.created}}</p>
    </div>

  </div>
</template>



<script>

import Navbar from "@/components/Navbar";
import axios from "axios";
import CategoryHeader from "@/components/CategoryHeader";

export default {
  name: "tags",
  components: {
    Navbar,
    CategoryHeader
  },

  data() {
    return {
        tags: [],
        projects: [], 
    };
  },

  mounted () {
      this.loadTags();
    
  },

    methods: {
        loadTags() {
            let tag = this.$route.params.tag
            axios
            .get(`/tags/${tag}`)
            .then(response => {
                console.log('tag Reponse', response)
                this.tags = response.data.tags
                this.projects = response.data.projects
                this.tag = response.data.tag
                // console.log('index-list', this.projects)
            });
        },
        navigateTo(tagId) {
            //console.log(tagId)
            this.$router.push({name:'tag',params:{tag:tagId}})

        }
    },
};
</script>


<style>

</style>


  
