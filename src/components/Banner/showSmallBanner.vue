<template>
    <div class='showSmallBanner'>
            <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
 
<!-- --------------------BANNER IMAGE---------------------- -->
        <div class="banner-image">
            <img src="https://source.unsplash.com/random" alt="" mode="aspectFill">
        </div>


<!-- --------------------PROJECT INFOS ---------------------- -->
        <div class='banner-infos'>
            <div class='project-name'>
                <h1>{{projectName}}</h1>
            </div>
            <div class='project-user'>
                <img class="avatar" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-bind:src='gravatar' />  
                <p>By {{authorFirstName}} {{authorLastName}}</p>
                <button>Follow this Creator</button>
            </div>
            <p class='author-description'>{{projectDescription}}</p>
            <el-progress :text-inside="true" :stroke-width="5" :percentage=percentage color="#4b9f75"></el-progress>
            <div class='project-numbers'>
                <ul>
                    <li> 
                        <h6 id='pledge-amount'>$ {{pledge}}</h6>
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
        </div>
<!-- --------------------PROJECT INFO CATGEORY ---------------- -->
        <div class='project-info-category'>
            <ul>
                <li class='kickstarter-logo'><i class="fab fa-kickstarter"></i>Project we love</li>
                <li @click="goToTags"> <i class="far fa-compass"></i>{{tags}}</li>
                <li> <i class="fas fa-map-marker-alt"></i>{{location}}</li>
            </ul>
        </div>
 <!-- --------------------BANNER BTN ---------------------- -->
        <div class='banner-btn'>
            <button @click="addPledge" class='large-btn'>Back This Project</button>
            <div class='button-second-div'>
              <button class='medium-btn'><i class="fas fa-heart"></i> Remind Me</button>
              <ul>
                  <li><i class="fab fa-facebook-square"></i></li>
                  <li><i class="fab fa-twitter"></i></li>
                  <li><i class="fas fa-envelope"></i></li>
              </ul>
            </div>
            <p>All or nothing. This project will only be funded if it reaches its goal by Thu, June 6 2019 5:24 AM AWST.</p>
        </div>

 <!-- -------------------- NAVABAR 2 ---------------------- -->
  
    </div>
</template>

<script>
export default {
    name: 'showSmallBanner',
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


/* ---------BANNER IMAGE ------- */
  .banner-image img {
    vertical-align: middle;
    border-style: none;
    max-height:  26em;
    width: 100%
    }

/* ------PROJECT INFO CATGEORY-----  */
.banner-infos{
    margin: 0 1em 0 1em;
}
.project-user {
    display: flex;
    text-align: center;
    font-size: 0.8em;
}

.project-user p{
margin-left: 1em;
}

.project-user button{
color: black;
background-color: #e5eae8;
font-size: 0.8em;
margin-left: 1em;
}

.project-user button:hover{
background-color: #a6babf;
position: relative;
top: 0.1em;
}

.author-description {
    color: #878787;
    font-size: 90%;
    padding-top: 1em;
}

.project-numbers ul {
    display: flex;
    padding-top: 1em;
}

.project-numbers li {
    padding-right: 1.5em;
}
.project-numbers p {
    font-weight: light;
    font-size: 0.8em;
    color: #878787;
}
#pledge-amount {
      font-weight: lighter;
    font-size: 0.9em;
    color: #4b9f75;
}

.project-numbers h6 {
    font-weight: lighter;
    font-size: 0.9em;
}
/* ----- PORJECT INFO CATGEORY ------  */
.project-info-category ul{
    display: flex;
    padding: 1em;
    border: 1px solid #dcdedd;
}

.project-info-category li{
    padding-right: 1em;
    font-size: 20px
}
.project-info-category i{
    padding-right: 0.5em;
}

.kickstarter-logo i:hover {
    color: #4b9f75
}

.banner-btn {
    margin: 0 1em 0 1em;
}

.large-btn {
    background-color: #4b9f75;
    padding: 10px;
    width: 100%;
    color: white;
    font-weight: lighter;
}
.large-btn:hover {
    background-color: #377766;
    position: relative;
    top: 0.1em;
}

.medium-btn {
    margin-right: 2em;
    padding: 0px 80px;
}

.medium-btn:hover {
    border: solid 1px black;
    position: relative;
    top: 0.1em;
}

.button-second-div {
    display: flex; 
    margin-top: 1.5em;
}
.banner-btn ul {
    display: flex; 
}

.banner-btn li  {
    margin-right: 3em;
    margin-top: 1em;
    font-size: 120%;
    color: #959794;
}

.banner-btn p {
    font-weight: lighter;
    font-size: 90%;
    color: #959794;
}


</style>
