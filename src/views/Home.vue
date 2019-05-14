<template>
  <div class="home">
    <Navbar></Navbar>
    <CategoryHeader></CategoryHeader>
    
 
  <div v-for="project in projects"  :key="project._id">
    <el-row id='cardtest' >
      <el-card class='card' :body-style="{ padding: '0px' }">
        <img :src=" project.image " class="image">
        <div style="padding: 14px;">
          <h3 @click="goTodetail(project._id)" >{{project.name}}</h3>
          <div class="bottom clearfix">
            <div class="description">{{ project.description }}</div>
            <div class='createdAt'> created at {{ project.created }}</div>
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
import CategoryHeader from "@/components/CategoryHeader"





export default {
  name: "home",
  components: {
    Navbar,
    CategoryHeader
  },

  data() {
    return {
    projects: [],
    title:"home", 
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
      .get("projects")
      .then(response => {
        console.log(response)
        this.projects = response.data.projects 
        console.log('nihao', this.projects)
       });
    },
  }
};
</script>





<style>
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

/* ========================================================= */


</style>
