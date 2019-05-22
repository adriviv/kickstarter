<template>
  <div class="home">
    <Navbar></Navbar>
    <CategoryHeader></CategoryHeader>
    <div class="container1">
<!-- ============= FIRST DIV =============  -->
      <div class=" first-div row" >
        <div class="first-div-left col-sm-12 col-md-12 col-lg-6">
            <div v-for="project in projects.slice(0, 1)"  :key="project._id">
              <div class="card-trip">
                  <div>
                    <img class="w100p block" style="height: 350px; width: 100%; object-fit: cover"src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg">
                      <button class="top-right" @click="addToFavortites(project._id)" v-if=" (project.author.hearts.includes(project._id))"> REMOVE</button>
                      <button class="top-right" @click="addToFavortites(project._id)" v-else> ADD </button> 
                  </div>
                  <div class="percentage-bar">
                     <el-progress  :stroke-width="18" :percentage=Math.floor(((project.sumOfPledges)/(project.pledgeObjective)*100))  :text-inside="true" color="#4b9f75"></el-progress>
                  </div>
                <div class="card-trip-infos">
                  <div>
                    <h3 @click="goTodetail(project._id)" >{{project.name}}</h3>
                    <p>{{project.description}}</p>
                    <p>By {{project.author.first_name}} {{project.author.last_name}}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class=" small-card card-list col-sm-12 col-md-12 col-lg-5">
              <div v-for="project in projects.slice(1, 4)"  :key="project._id">
                <div class="card-product">
                    <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg">
                    <div class="card-product-infos">
                      <h2 @click="goTodetail(project._id)" >{{project.name}}</h2>
                      <p>Money Raised:  {{project.sumOfPledges}} / {{project.pledgeObjective}}$</p>
                      <p>By  {{project.author.first_name}} {{project.author.last_name}}</p>
                    </div>
                    <div class="favorite-btn">
                      <button  @click="addToFavortites(project._id)" v-if=" (project.author.hearts.includes(project._id))"> REMOVE</button>
                      <button  @click="addToFavortites(project._id)" v-else> ADD </button>
                    </div>
                  </div>
              </div>
            </div>
      </div>
<!-- ============= SECOND DIV =============  -->
 <div class="col-12 second-div row">
    <div class="card-category col-sm-12 col-md-12 col-lg-6" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg)">
        10
    </div>
    <div class=" second-div-text col-sm-12 col-md-12 col-lg-5">
      <h2> Kickstarter fête ses 10 ans. Célébrons ensemble ! </h2> 
      <h5> Grâce à vous, de magnifiques projets ont vu le jour et changé le monde. Découvrez comment.</h5>
      <a href="">En savoir plus</a>
    </div>
 </div>
<!-- ============= THIRD DIV =============  -->
 <div>

 </div>
<!-- ============= FOURTH DIV =============  -->
 <div class="newsletter">
   <h2>Abonnez-vous à notre lettre d'information hebdomadaire</h2>
   <h5>Quelques projets triés sur le volet par notre équipe, une fois par semaine.</h5>
    <button> S'abonner</button>
 </div>

  <div v-for="project in projects"  :key="project._id">
        <img :src=" project.image " class="image">
          <h3 @click="goTodetail(project._id)" >{{project.name}}</h3>

          <!-- ---------------- FAVORITES -------------- -->
          <button  @click="addToFavortites(project._id)" v-if=" project.author.hearts.length === 0"> ADD </button>
          <button  @click="addToFavortites(project._id)" v-if=" project.author.hearts.length === 1"> REMOVE</button>
           <!-- -------------------------- --------------- -->

            <div class="description">{{ project.description }}</div>
            <div class='createdAt'> created at {{ project.created }}</div>
            <a href="#" class="owner">By To define</a>
          </div>

  </div>




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
    user: localStorage.getItem('token')
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
        console.log('la reponse', response),
        window.location.reload(true)
       });
    }, 
  }
};
</script>



<style>

.container1{
  padding-right:7%;
  padding-left:7%;
}

/* =================  FIRST DIV  ==========================*/
.first-div{
  display: flex; 
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 50px;
  margin-top: 65px;
  border-bottom: 1px solid #d6d6d6
}

/* .................. BIG CARD  .............................*/
.card-trip {
  overflow: hidden;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  height: 500px;
 
}

.card-trip h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-trip p {
  font-size: 12px;
  opacity: .7;
  margin: 0;
}


.card-trip .card-trip-infos {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}

.card-trip-infos .card-trip-user {
  position: absolute;
  right: 16px;
  top: -20px;
  width: 40px;
}
.top-right {
  position: absolute;
  top: 8px;
  right: 32px;
}

/* .................  SMALL CARDS LSIT  .............*/
.card-product {
  overflow: hidden;
  height: 120px;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
}

.card-product img {
  height: 100%;
  width: 120px;
  object-fit: cover;
}

.card-product h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-product p {
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-product .card-product-infos {
  padding: 16px;
}

/* =================  SECOND DIV  ==========================*/

.second-div{
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.card-category {
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

.second-div-text{
  border-left: 10px solid #037362;
 height: 180px;
}
/* =================  THIRD DIV   ==========================*/
.newsletter button{
  background-color: black;
  color: white;
  padding: 20px 30px; 
  font-size: 20px;
  margin: 40px;
}

.newsletter h2{
  margin: 40px;
}

.newsletter h3{
  margin: 40px;
}

.newsletter button:hover{
  background-color: #4d4d4d;
  position: relative;
  bottom: 1px;
  box-shadow: 2px 3px #cecccc;
}

.card{
    width: 331px;
  
}


.title{
    display: flex;
    justify-content: space-around; 
    font-size: 20px;
    text-decoration: none;
    color: black; 
    font-family: Helvetica, Arial, sans-serif;
}

.title:hover{
    text-decoration: none; 
    font-size: 24px; 
    font-weight: bold; 
    color: #397765; 
    transition: 0.3s;
    font-family: Helvetica, Arial, sans-serif;
}

  .description{
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
  .bottom{
    margin-top: 13px;
    line-height: 12px;
  }

 

  .image{
    width: 331px;
    height: 60px;

  }

.clearfix:before,
  .clearfix:after{
      display: table;
      content: "";
  }

  .clearfix:after{
      clear: both
  }


.newsletter{
  text-align: center; 
  padding: 30px 10px;
  border: 1px solid #d6d6d6
}




</style>
