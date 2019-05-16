<template>
   <div class="updateProject">

    <Navbar></Navbar>
 
      <body>
        <h5 class="card-title text-center">Add Project</h5>
        <form  class="form-project" id='project-form' @submit.prevent="processForm">
          <div class="form-label-group">
            <input v-model="projectName" type="text" id="inputName" class="form-control" placeholder="Project name" required autofocus>
            <label for="inputName">Name of the project</label>
          </div>
           <div class="form-label-group">
            <input v-model="projectDescription" type="text" id="inputDescription" class="form-control" placeholder="Project Description" required autofocus>
            <label for="inputDescription">Description</label>
          </div>

          <div class="form-label-group">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="Art"></el-checkbox>
              <el-checkbox label="Comics"></el-checkbox>
              <el-checkbox label="Design and Technology"></el-checkbox>
              <el-checkbox label="Cinema"></el-checkbox>
              <el-checkbox label="Food"></el-checkbox>
              <el-checkbox label="Game"></el-checkbox>
              <el-checkbox label="Music"></el-checkbox>
              <el-checkbox label="Book"></el-checkbox>
            </el-checkbox-group>
         </div>

         <input type="file" multiple :name="uploadFieldName" accept="image/*" class="input-file">
       
        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add</button>
       
        </form>
      </body>
    </div>
</template>

<style>
</style>



<script>
import axios from "axios";
import Navbar from "@/components/Navbar"

export default {
    name: "updateProject",
      components: {
      Navbar
      
  },



 data() {
    return {
    project: [],
    projectName: '',
    projectDescription:'',
    checkList: [],
    photo: '',
    id:''
    
    };
  },

  mounted () {
      this.loadData();
  },

  methods: {
        loadData() {
            let slug = this.$route.params.Pid
            axios
            .get(`/show/${slug}`)
            .then(response => {
                console.log('LA REPONSE', response)
                this.project = response.data 
                this.checkList = response.data.tags
                this.projectName = response.data.name
                this.projectDescription = response.data.description
                this.id = response.data._id
               //  console.log('LE PROJET', this.project)
            });
        },
      

    processForm: function() {
      alert('Processing!');
            let slug = this.$route.params.Pid

      axios({
            method: 'POST',
            url: '/add/:slug',
            data: { name: this.projectName,
            description: this.projectDescription,
            tags: this.checkList,
            photo: this.uploadFieldName,
            id: this.id}
            })
      .then(response => {
          console.log('addproject', response)
          window.location.href = 'http://localhost:8080/'      
          });
    },
  },
};
</script>


