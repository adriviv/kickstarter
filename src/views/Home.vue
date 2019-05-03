<template>
  <div class="home">
  <div>{{user}}</div>
    <Navbar></Navbar>

    <div class='category'>
      <a href="#">Art</a>
      <a href="#">Comics</a>
      <a href="#">Design & Technology</a>
      <a href="#">Cinema</a>
      <a href="#">Food & Creation</a>
      <a href="#">Game</a>
      <a href="#">Music</a>
      <a href="#">Book</a>
    </div> 


<div v-for="project in projects"  :key="project.id">
  <el-row id='cardtest' >
    <el-card class='card' :body-style="{ padding: '0px' }">
      <img :src=" project.image " class="image">
      <div style="padding: 14px;">
        <h3 @click="goTodetail(project.id)" >{{project.name}}</h3>
        <div class="bottom clearfix">
          <div class="description">{{ project.description }}</div>
          <a href="#" class="owner">By To define</a>
        </div>
      </div>
    </el-card>
  </el-row>
</div>



  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import CardMedium from "@/components/CardMedium"




export default {
  name: "home",
  components: {
    Navbar
  },

  data() {
    return {
    projects: [],
    title:"show", 
    user: localStorage.getItem('token'),

    };
  },

  mounted () {
   this.loadData();
  },

  methods: {
    goTodetail(proId) {
 
      this.$router.push({name:'show',params:{Pid:proId}})
      },

    loadData() {
    axios
      .get("http://localhost:3000/api/v1/projects")
      .then(response => {
        let data = response.data.projects;
        console.log('yoloooooooooo',data)
        this.projects = data 
        console.log('nihao',this.projects)
      });
    },
  }
};
</script>


<style>
.category {
  display: flex;
  justify-content: space-between;
  padding: 1.5% 9%;

  border: 1px solid #e8e8e8;
}

.category a {
    text-decoration: none;
 color:#656969;
}
.category a:hover {
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: 0.5s;
}

/* ========================================================= */

.card {
    width: 331px;
}

.title {
    display: flex;
    justify-content: space-around; 
    font-size: 20px;
    text-decoration: none;
    color: black; 
    font-family: Helvetica, Arial, sans-serif;
}

.title:hover {
    text-decoration: none; 
    font-size: 24px; 
    font-weight: bold; 
    color: #397765; 
    transition: 0.3s;
    font-family: Helvetica, Arial, sans-serif;
}

  .description {
    font-size: 15px;
    color:#282828;
  }

.owner{
    color: gray;
    text-decoration: none;
}
.owner:hover{
    color: #959794;
    font-weight: bolder;
    text-decoration: none;
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

 

  .image {
    width: 331px;
    height: 212px;
    display: block;
  }

.clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
