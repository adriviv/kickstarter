<template>
    <div class='showBigBanner'>
         <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
 
        <b-container class='showBigBannerTop'>
            <b-row>
                <b-col cols="2">
                     <div class='project-user-big'>
                        <img class="avatar" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-bind:src='gravatar' />  
                        <p>By {{authorFirstName}} {{authorLastName}}</p>
                        <p>2 created</p>
                        <button>Follow Creator</button>
                    </div>
                </b-col>
                <b-col cols="9">
                    <div class='projectName'><h1>{{projectName}}</h1></div>
                    <p class='projectdescription'>{{projectDescription}}</p>   
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col>
                    <div class="banner-image"><img src="https://source.unsplash.com/random" alt="" mode="aspectFill"></div>
                </b-col>
                <b-col class='column2'>
                    <el-progress :text-inside="true" :stroke-width="5" :percentage=percentage color="#4b9f75"></el-progress>
                     <div class='project-details'>
                        <ul>
                            <li> 
                                <h6 >$ {{pledge}}</h6>
                                <p>pledges of ${{pledgeObjective}} goal</p>
                            </li>
                            <li> 
                                <h6>{{numberOfContributors}}</h6>
                                <p>backers</p>
                            </li>
                            <li> 
                                <h6>{{expireAt}}</h6>
                                <p>days to go</p>
                            </li>
                        </ul>
                    </div>
                     <div class='banner-button'>
                        <button @click="addPledge" class='large-btn'>Back This Project</button>
                        <div class='button-right-image'>
                             <button id='medium-button'><i class="fas fa-heart"></i> Remind Me</button>
                            <div class='lis'>
                                <ul>
                                    <li><i class="fab fa-facebook-square"></i></li>
                                    <li><i class="fab fa-twitter"></i></li>
                                    <li><i class="fas fa-envelope"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <p class='lep'>All or nothing. This project will only be funded if it reaches its goal by Thu, June 6 2019 5:24 AM AWST.</p>

                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <div class='project-info-footer'>
                <ul>
                    <li class='kickstarter-logo'><i class="fab fa-kickstarter"></i>  Project we love</li>
                    <li @click="goToTags"> <i class="far fa-compass"></i>  {{tags}}</li>
                    <li> <i class="fas fa-map-marker-alt"></i>  {{location}}</li>
                </ul>
            </div>
        </b-container>
        
    </div>
</template>

<script>
export default {
    name: 'showBigBanner', 
    props: ["projectName", "projectDescription", "gravatar","authorFirstName", "authorLastName", "percentage", "pledge", "pledgeObjective", "numberOfContributors", "expireAt", "tags", "location"],
    methods: {
        goToTags: function() {
            this.$emit('goToTags')
        },
        addPledge: function() {
            this.$emit('addPledge')
        },
    },
}
</script>

<style>

.showBigBannerTop{
    padding: 3em 0;
}

.project-user-big img{
    margin-bottom: 0.7em;
}
.project-user-big p{
    font-size: 70%;
    margin-bottom: 1px;
}
.project-user-big button{
    margin-top: 0.8em;
    font-size: 10px;
    font-weight: lighter;
    border: none;
    background-color:#d6d6d6;
    padding: 6px;
}
.project-user-big button:hover {
    background-color:#8d8d8d;

}

.projectName h1 {
    font-size: 28px;
    line-height: 4.2rem;
        font-weight: 500;
}

.projectdescription {
    font-size: 1rem;
    line-height: 2.4rem;
        color: #656969;
}
.author-logo-name{
    display: flex; 
}

.project-info-footer ul {
    display: flex;
}

.project-info-footer li {
    margin-right: 1em;
}

.project-details li {
    padding-top: 0em;    
}
.project-details p {
    margin-bottom: 0em;
       font-size: 0.6rem;
    line-height: 2.4rem;
    color: #656969;
}

.project-details h6 {
    margin-bottom: -1.5em;
       font-size: 1rem;
    line-height: 2.4rem;
    font-weight: 300;
}

.banner-btn {
    padding-top: 0.2em;
}

.button-right-image {
    display: flex;
    padding-top: 1em;
}

.lis ul {
    display: flex;
}
.lis li {
    font-size: 120%;
    margin-right: 2.1em;
}

#medium-button{
    font-size: calc(5px + 0.5vw);
    margin-right: 4em;
    padding: 0em 4em;
}

.lep {
    margin-top: 1em;
       font-size: 0.8rem;
    line-height: 1.5rem;
    color: #656969;
}

.project-info-footer {
    padding-top: 0.3vw;
    padding-bottom:  0.3vw;
}

.project-info-footer li {
    padding-right: 4vw;
}
</style>

