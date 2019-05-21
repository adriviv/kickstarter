<template>
  <div class="Dashboard">
    <Navbar></Navbar>
    
    <div>First Name :{{this.user.first_name}}</div>
    <div>Last Name : {{this.user.last_name}}</div>
    <div>Email : {{this.user.email}}</div>


     
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
            <button @click='update(project._id)' class='update btn'>update</button> 

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





export default {
  name: "Dashboard",
  components: {
    Navbar,
  },

  data() {
    return {
    user: JSON.parse(localStorage.getItem('user')),
    projects: [], 
    };
  },
 mounted () {
   this.getProjectDashboard();
  },
   methods: {
        getProjectDashboard() {
            let userId = this.user._id
            console.log('user_id test', userId)
            axios.post(`/dashboard/${userId}`, {
                userId: this.user._id
            })
            .then(response => {
                console.log('dashboard answer', response)
                 this.projects = response.data
            })
            .catch(error => {
                console.log(error)
            })
        },
        update(proId) {
             this.$router.push({name:'updateProject',params:{Pid: proId}})
        },
    }
 }
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
