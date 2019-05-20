<template>
    <div class="show">
        <Navbar> </Navbar>
        <!-- <h2>the product id is :{{this.$route.params.Pid}}</h2> -->

        <div class='project-container'>
            <div class='header'>
                <div class='header-left'>
                    <img class="avatar" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="https://kitt.lewagon.com/placeholder/users/ssaunier" />
                    <div class='user-name'> By blablabla</div>
                    <div class='project-number'>X project created</div>
                    <el-button class='follow-btn' type="info" plain>Follow this Creator</el-button>
                </div>
                <div class='header-right'>
                    <div class='project-name'> PORJECT NAME: {{project.name}}</div>
                    <div class='project-description'>DESCRIPTION :{{project.description}}</div>
                    <div class='project-tags'>TAGS :{{project.tags}}</div>
                    <div class='project-date'>DATE :{{project.created}}</div>
            
                    <div class='test'>Exprire in {{this.remainingdays}} Days </div>


                    <div class='project-date'>Money Raised:  {{project.sumOfPledges}} / {{project.pledgeObjective}}$</div>
                    <el-progress :text-inside="false" :stroke-width="18" :percentage=Math.floor(((project.sumOfPledges)/(project.pledgeObjective)*100)) color="rgba(142, 113, 199, 0.7)"></el-progress>

                    <button @click='update(proId)' class='update btn'>update</button> 

                </div>
            </div>

            <div class='project-details'>
                <div class='project-details-left'>
                    <div>
                        <img src="https://source.unsplash.com/random" alt="" mode="aspectFill">
                    </div>
                    <div class='footer-image'>
                        <a href="#">
                           <span>Our Favorites</span> 
                        </a>
                          <a href="#">
                           <span>Product Design</span> 
                        </a>
                         <a href="#">
                           <span>Paris - france</span> 
                        </a>
                    </div>
                     <div class='footer-image'>
                         <a :href="`/show/${proId}/addreview`">
                           <span>Add a Review</span> 
                        </a>
                        <a :href="`/show/${proId}/GetReviews`">
                           <span>See Reviews</span> 
                        </a>
                    </div>
                </div>
                <div class='project-details-right'>
                    <div class="pledge-sub-box">
                        <div>US$ 120k</div>
                        <div>Committed to a goal of US $ 10,000</div>
                    </div>
                     <div class="pledge-sub-box">
                        <div>1021</div>
                        <div>Contributors</div>
                    </div> <div class="pledge-sub-box">
                        <div>29</div>
                        <div>Days before the end</div>
                    </div>
                         <a :href="`/show/${proId}/Pledge`">
                           <span>I support this project</span> 
                        </a>
                    <div class="pledge-sub-box2">
                        <el-button>Remind</el-button>
                        <div class='icons-share'>
                            <a href="#">Twitter</a>
                            <a href="#">Mail</a>
                            <a href="#">Snippet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import axios from "axios";


    export default {
        name: "show",
        components: {
            Navbar
        },
    data() {
        return {
        proId:this.$route.params.Pid,
        title:"show",
        project: [],
        remainingdays: 0
         };
    },
  
    mounted () {
        this.showApi();
    },

    methods: {
        showApi() {
            let slug = this.$route.params.Pid
            axios 
            .get(`/show/${slug}`)
            .then(response => {
                let data = response.data;
                console.log('show-data-fetche',data)
                var date1 = new Date(data.expireAt)
                console.log('expireAt', date1)
                var date2 = new Date (Date.now())
                console.log('datenow', date2)
                this.remainingdays = Math.round(Math.abs((date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000)))
                this.project = data 
            });
        },

        update(proId) {
             this.$router.push({name:'updateProject',params:{_id:proId}})
        },
    },
}
</script>

<style>
    .project-container {
        background-color:#FBFBFA ;
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 54px;
    }
    .header {
        height: 300px;
        display: flex;
        margin: 0 18px 36px;
    }
    .header-left {
        padding: 0px 18px;
        margin: 0px 0px 18px; 
    }
    .header-right {
        padding: 0px 18px;
    }
    .user-name {
        word-break: break-word;
        margin-left: 0rem;
        color: #282828;
        font-size: 14px;
    }
    .project-number {
        color: #656969;
        font-size: 14px;
    }
    .project-name {
        margin-bottom:1.8rem;
        font-weight: 500;
        color: #282828;
        font-size: 3.8rem;
        line-height: 4.2rem;
    }
    .follow-btn {
        padding: 0 1.2rem;
        font-size: 1.2rem;
    }
    .project-description {
        color: #656969;
        font-size: 1.8rem;
        line-height: 2.4rem;
        margin-bottom: 20px;
    }
    .project-details {
        display: flex; 
    }
     .project-details-left {
        width: 66%;
    }
    .project-details-right {
        width: 34%;
    }
   .project-details-left img {
    vertical-align: middle;
    border-style: none;
    width: 65rem;
    height: 30rem;
    }
    .footer-image {
    display: flex;
    justify-content: space-between;
    padding: 15px 35px; 
    }
   .pledge-sub-box2{
       display: flex;
       justify-content: space-between;
   }
    .icons-share{
        display: flex; 
        justify-content: space-between;
    }
</style>
