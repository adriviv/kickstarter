<template>
  <div class="home">
    <Navbar></Navbar>
    <CategoryHeader></CategoryHeader>

<!-- ============= FONT ASEWOME =============  -->
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

<!-- ============= FIRST DIV =============  -->
  <div class='first-div row'>
    <div class='col-sm-12 col-md-6 col-lg-6'>
      <h5>PROJET SÉLECTIONNÉ</h5>
      <Bigcard
      v-for="project in projects.slice(0, 1)"  :key="project._id"
      :projectName = project.name
      :projectDescription = project.description
      :authorFirstName = project.author.first_name
      :authorLastName = project.author.last_name
      :percentage= Math.floor(((project.sumOfPledges)/(project.pledgeObjective)*100))
      :isFavorite = (project.author.hearts.includes(project._id))
      v-on:goToDetail="goTodetail(project._id)"
      v-on:addToFavortites="addToFavortites(project._id)"
      ></Bigcard>
    </div>
    <div class='first-div-right col-sm-12 col-md-6 col-lg-6'>
      <h5>RIEN QUE POUR VOUS</h5>
      <Smallcard
        v-for="project in projects.slice(1, 4)"  :key="project._id"
        :projectName = project.name
        :authorFirstName = project.author.first_name
        :authorLastName = project.author.last_name
        :sumOfPledges = project.sumOfPledges
        :pledgeObjective = project.pledgeObjective
        :isFavorite = (project.author.hearts.includes(project._id))
        v-on:goToDetail="goTodetail(project._id)"
        v-on:addToFavortites="addToFavortites(project._id)"
      ></Smallcard>
      <a href="#">Plus de projets</a>
    </div>
  </div>    
<BirthdayCard></BirthdayCard>
<NewsletterBanner></NewsletterBanner>
<!-- ============= SECOND DIV =============  -->

<!-- ============= THIRD DIV =============  -->
 
<!-- ============= FOURTH DIV =============  -->


<!-- ============= FOOTER =============  -->
  <Footer></Footer>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";
import CategoryHeader from "@/components/CategoryHeader";
import Footer from "@/components/Footer";
import Bigcard from "@/components/Cards/Bigcard";
import Smallcard from "@/components/Cards/Smallcard";
import BirthdayCard from "@/components/Cards/BirthdayCard";
import NewsletterBanner from "@/components/Banner/newsletterBanner";



export default {
  name: "home",
  components: {
    Navbar,
    CategoryHeader,
    Footer,
    Bigcard,
    Smallcard,
    BirthdayCard,
    NewsletterBanner,
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

.test {
  display: flex;
}
.container1{
  padding-right:3%;
  padding-left:3%;

}
/* =================  FIRST DIV  ==========================*/
.first-div{
  display: flex; 
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 65px;
  border-bottom: 1px solid #e8e8e8
}

.first-div h5{
  padding: 20px;
}

.first-div-right {
  margin-bottom: 2%;
  padding-left: 50px;
}


.first-div-right a {
  padding: 5%;
}







</style>
