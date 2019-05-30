<template>
   <div class="addProject">

    <Navbar></Navbar>


 
      <body>
        <h5 class="card-title text-center">Add Project</h5>
        <form  class="form-project" id='project-form' @submit.prevent="processForm">
          <div class="form-label-group">
            <input v-model="projectName" @keyup="charCountText()" type="text" :maxlength="maxtitle" id="inputName" class="form-control" placeholder="Project name" required autofocus>
            <label for="inputName">Name of the project</label>
            <span>{{ totalcharactertext }} / {{maxtitle}} </span>
          </div>
           <div class="form-label-group">
            <input v-model="projectDescription" @keyup="charCountDescription()"  type="text"  :maxlength="maxdescritpion" id="inputDescription" class="form-control" placeholder="Project Description" required autofocus>
            <span>{{ totalcharacterdescritpion }} / {{ maxdescritpion}} </span>
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
         
         <!-- <input type="file" multiple :name="uploadFieldName" accept="image/*" class="input-file"> -->
       


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
    pledgeObjective: '',
    maxtitle: 36, 
    maxdescritpion: 200,
    totalcharactertext: 0,
    totalcharacterdescritpion: 0

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
    charCountText: function(){
      this.totalcharactertext = this.projectName.length;
    },
    charCountDescription: function(){
      console.log('test legntht', this.projectDescription.length)
      this.totalcharacterdescritpion = this.projectDescription.length;
    },
  },
};
</script>


