<template>
  <div class="home">
    <Navbar></Navbar>
    <CategoryHeader></CategoryHeader>
    
 
  <div v-for="project in projects"  :key="project._id" :hearts="hearts">
    <el-row id='cardtest' >
      <el-card class='card' :body-style="{ padding: '0px' }">
        <img :src=" project.image " class="image">
        <div style="padding: 14px;">          
          <h3 @click="goTodetail(project._id)" >{{project.name}}</h3>

          <!-- ---------------- FAVORITES -------------- -->
          <button v-on:click="toggle" @click="addToFavortites(project._id)" v-if="show === true && project.author.hearts.length === 0"> ADD TO FAVORITES</button>
          <button v-on:click="toggle" @click="addToFavortites(project._id)" v-if="show === true && project.author.hearts.length === 1"> REMOVE TO FAVORITE</button>
          <button v-if="show === false && hearts.length === 0" @click="addToFavortites(project._id)">ADD TO FAVORITES</button>
          <button v-if="show === false && hearts.length === 1" @click="addToFavortites(project._id)">REMOVE TO FAVORITE</button>
           <!-- -------------------------- --------------- -->
           
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
import CategoryHeader from "@/components/CategoryHeader";





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
    hearts: [], 
    show: true



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
      .get("/projects")
      .then(response => {
        this.projects = response.data.projects 
        console.log('index-list', this.projects)
       });
    },
    addToFavortites(proId) {
      axios
      .post(`api/stores/${proId}/heart`, {
      })
      .then(response => {
        console.log('response favorites', response);
        this.hearts =  response.data.hearts
        console.log('test heart', this.hearts)
       });
    }, 
    toggle: function() {
      this.show = false;
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
    height: 60px;

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
