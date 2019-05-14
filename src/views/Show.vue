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
                    <el-button type="success">I support this project</el-button>
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
        project: []
         };
    },
  
    mounted () {
        this.showApi();
    },

    methods: {
        showApi() {
            let id = this.$route.params.Pid
            axios 
            .get(`/show/${id}`)
            .then(response => {
                let data = response.data;
                console.log('yoloooooooooo',data)
                this.project = data 
                console.log('nihao',this.project)
            });
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
