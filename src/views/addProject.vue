<template>
   <div class="addProject">

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
            <label for="inputDescription">Description of the project</label>
          </div>
            <div class="form-label-group">
            <input v-model="pledgeObjective" type='number' id="inputPledgeObjective" class="form-control" placeholder="Objective to raise" required autofocus>
            <label for="inputPledgeObjective">Obejctif of money to raise</label>
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
    name: "add",
      components: {
      Navbar
      
  },



 data() {
    return {
    projectName: '',
    projectDescription:'',
    checkList: [],
    photo: '', 
    pledgeObjective: ''
    };
  },

  mounted () {

  },

  methods: {
    processForm: function() {
      alert('Processing!');

      axios({
            method: 'POST',
            url: '/add',
            data: { name: this.projectName,
            description: this.projectDescription,
            tags: this.checkList,
            photo: this.photo,
            pledgeObjective: this.pledgeObjective}
            })
      .then(response => {
          console.log('addproject', response),
          window.location.href = './'      
          });
    },
  },
};
</script>


