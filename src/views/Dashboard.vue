<template>
  <div class="Dashboard">
    <Navbar></Navbar>
    
    <div>First Name :{{this.user.first_name}}</div>
    <div>Last Name : {{this.user.last_name}}</div>
    <div>Email : {{this.user.email}}</div>

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
    user: JSON.parse(localStorage.getItem('user'))
    };
  },
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
