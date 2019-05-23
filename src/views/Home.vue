<template>
  <div class="home" >
    <Navbar></Navbar>
    <CategoryHeader></CategoryHeader>

<!-- ============= FONT ASEWOME =============  -->
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">


<!-- ============= FIRST DIV =============  -->
    <div class="container1" >
      <div class=" first-div row" >
        <div class="first-div-left col-xs-12 col-sm-12 col-md-12 col-lg-6">
          <h5>PROJET SÉLECTIONNÉ</h5>
            <div v-for="project in projects.slice(0, 1)"  :key="project._id">
              <div class="card-trip">
                  <div>
                    <img @click="goTodetail(project._id)" class="w100p block" style="height: 480px; width: 100%; object-fit: cover"src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg">
                    <div class=favorite-button>
                      <button class="top-right" @click="addToFavortites(project._id)" v-if=" (project.author.hearts.includes(project._id))"> <i class="heart fas fa-heart"></i></button>
                      <button class="top-right" @click="addToFavortites(project._id)" v-else> <i class="heart far fa-heart"></i> </button> 
                    </div>
                  </div>
                  <div class="percentage-bar">
                     <el-progress  :stroke-width="18" :percentage=Math.floor(((project.sumOfPledges)/(project.pledgeObjective)*100))  :text-inside="true" color="#4b9f75"></el-progress>
                  </div>
                <div class="card-trip-infos">
                  <div>
                    <h3 @click="goTodetail(project._id)" >{{project.name}}</h3>
                    <p@click="goTodetail(project._id)">{{project.description}}</p>
                    <p id='author'>By {{project.author.first_name}} {{project.author.last_name}}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class=" first-div-right col-sm-12 col-md-12 col-lg">
          <h5>RIEN QUE POUR VOUS</h5>
          <div class='cardproduct' v-for="project in projects.slice(1, 4)"  :key="project._id">
            <div class="card-product">
                <img @click="goTodetail(project._id)" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg">
                <div class="card-product-infos">
                  <h2 @click="goTodetail(project._id)" >{{project.name}}</h2>
                  <p id="amount-raised">Money Raised:  {{project.sumOfPledges}} / {{project.pledgeObjective}} $</p>
                  <p>By  {{project.author.first_name}} {{project.author.last_name}}</p>
                </div>
                <div class="favorite-btn">
                  <button  @click="addToFavortites(project._id)" v-if=" (project.author.hearts.includes(project._id))">  <i class="heart2 fas fa-heart"></i></button>
                  <button  @click="addToFavortites(project._id)" v-else>  <i class="heart2 far fa-heart"></i></button>
                </div>
              </div>
          </div>
          <a href="#">Plus de projets</a>
        </div>
      </div>
    </div>
<!-- ============= SECOND DIV =============  -->
    <div class="container1" >
      <div class="second-div row">
          <img src="../assets/Kickstarter_10years.png" alt="">
          <div class=" second-div-text col-sm-12 col-md-12 col-lg">
            <h2> Kickstarter fête ses 10 ans. Célébrons ensemble ! </h2> 
            <h5> Grâce à vous, de magnifiques projets ont vu le jour et changé le monde. Découvrez comment.</h5>
            <a href="">En savoir plus</a>
          </div>
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



<Footer></Footer>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import CategoryHeader from "@/components/CategoryHeader";
import Footer from "@/components/Footer";


export default {
  name: "home",
  components: {
    Navbar,
    CategoryHeader,
    Footer
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
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

.container1{
  padding-right:3%;
  padding-left:3%;

}
/* =================  FIRST DIV  ==========================*/
.first-div{
  display: flex; 
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 50px;
  margin-top: 65px;
  border-bottom: 1px solid #e8e8e8
}

/* .................. BIG CARD  .............................*/
.card-trip {
  overflow: hidden;
  background: white;
  height: 750px;
}

.card-trip h3:hover {
  color: #397765;
  text-decoration: underline;
  transition: 0.3s;
}

.card-trip p:hover {
  text-decoration: underline;
  transition: 0.3s;
}

.first-div-left h5 {
  color: grey; 
  padding-bottom: 20px; 
}

.card-trip h3 {
font-family: 'Open Sans', sans-serif;
   font-size: calc(25px + 1vw);
    line-height: 3.6rem;
  font-weight: bold;
  margin: 0;
}

.card-trip p {
  font-size: calc(14px + 0.5vw);
  line-height: 2.4rem;
  opacity: .7;
  margin: 20px 0;
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
  top: 65px;
  right: 32px;
}

.favorite-button  button{
  color:  #ea5873; 
  font-size: 30px;
  border-radius: 100%; 
  background-color: white; 
  padding: 5px 13px 5px 13px; 
}

.favorite-button button:hover{
  color: white ; 
  font-size: 30px;
  border-radius: 100%; 
  background-color: #ea5873; 
  padding: 5px 13px 5px 13px; 
  transition: 0.8s
}
#author {
  margin-top: 15px;
  font-size: 1.2rem;
  line-height: 1.8rem;
}
/* .................  SMALL CARDS LSIT  .............*/

.first-div-right{
  border-left: 1px solid #e8e8e8;
  margin-left: 80px; 
}

.first-div-right h5 {
  color: grey; 
  padding-bottom: 20px; 
  position: relative;
  left: 34px;
}

.cardproduct{
    margin-left: 31px;
    padding-bottom: 13px;
    margin-bottom: 17px;
    border-bottom: 1px solid #e8e8e8;
}
.card-product {
  overflow: hidden;
  height: 145px;
  background: white;
  display: flex;
  align-items: center;
}

.card-product img {
  height: 94%;
  width: 220px;
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
  padding: 45px;
}

.first-div-right a {
    color: #4C6CF8;
    font-size: 1.4rem;
    line-height: 2.4rem;
    padding: 30px 0 0 25px;
}

.favorite-btn {
      margin-left: auto;
    margin-right: 47px;
}


.favorite-btn button {
padding: 0;
border: none;
background: none;
color: #dbdbdb; 
  font-size: 30px;
}

#amount-raised {
  font-family: "open-sans sans-serif"; 
  font-weight: bold;
  color: #4b9f75;
  font-size: 17px;

}

.favorite-btn button:hover{
padding: 0;
border: none;
background: none;
color: black; 
font-size: 30px;
transition: 0.8s;
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
 margin-top: 1em;
 margin-left: 4em;
 margin-bottom: 1em;
}

.second-div-text h2 {
    font-size: calc(22px + 1vw);

    line-height: 3.6rem;
    margin-bottom: 30px;
}

.second-div-text h5 {
     font-size: calc(16px + 0.5vw);
    line-height: 2rem;
    margin-bottom: calc(10px + 1vw);
}

.second-div-text a {
    font-size: 1.2rem;
    line-height: 3.6rem;
}

.second-div-text h2:hover {
    font-size: calc(22px + 1vw);
    line-height: 3.6rem;
    color: #037362;
    text-decoration: underline;
}

.second-div img{
  height: 335px
}


.card-product h2 {
  font-size: 1.4rem;
  line-height: 2.4rem;
font-family: 'Open Sans', sans-serif;
}
.card-product h2:hover {
  color: #397765;
  text-decoration: underline;
  transition: 0.3s;
}
/* =================  THIRD DIV   ==========================*/
.newsletter{
  text-align: center; 
  padding: 30px 10px;
  border: 1px solid #d6d6d6
}

.newsletter button{
  background-color: black;
  color: white;
  padding: 20px 30px; 
  font-size: 20px;
  margin: 40px;
}

.newsletter h2{
  margin: 40px;
  font-size: 2.8rem;
  line-height: 3.6rem;
}

.newsletter h3{
  margin: 40px;
  font-size: 1.8rem;
  line-height: 2.4rem;
}

.newsletter button:hover{
  background-color: #4d4d4d;
  position: relative;
  bottom: 1px;
}


/* =================  FOURTH DIV   ==========================*/


.card{
    width: 331px;
  
}



.title{
    display: flex;
    justify-content: space-around; 
    font-size: 20px;
    text-decoration: none;
    color: black; 
font-family: 'Open Sans', sans-serif;
}

.title:hover{
    text-decoration: none; 
    font-size: 24px; 
    font-weight: bold; 
    color: #397765; 
    transition: 0.3s;
font-family: 'Open Sans', sans-serif;
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







</style>
