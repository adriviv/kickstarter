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
              <button class='medium-btn'><i class="fas fa-heart"></i> Reming Me</button>
              <ul>
                  <li><i class="fab fa-facebook-square"></i></li>
                  <li><i class="fab fa-twitter"></i></li>
                  <li><i class="fas fa-envelope"></i></li>
              </ul>
            </div>
            <p>All or nothing. This project will only be funded if it reaches its goal by Thu, June 6 2019 5:24 AM AWST.</p>
        </div>

 <!-- -------------------- NAVABAR 2 ---------------------- -->
        <div class='navbar-2'>
            <div class='navbar-links'>
                <ul>
                    <li @click="showCampaign">Campaign</li>
                    <li @click="showFaq">FAQ</li>
                    <li @click="showUpdates">Updates</li>
                    <li @click="showComments">Comments</li>
                    <li @click="showCommunity">Community</li>
                </ul>
            </div>
            <div class='navbar-btn'>
                <button class='pledge-btn'>Back this project</button>
                <button class='remind-btn'><i class="fas fa-heart"></i> Reming me </button>
            </div>
        </div>

        <div v-if="Campaign ===true">
            <div class='campaign'>
                <div class='campaign-left'>
                    <h4>About</h4>
                    <p>Coined the R.S.V.P (Rapper, Singer, VIOLINIST, Producer) of Music, Humble is making his breakthrough as an international musical phenomenon with his unique integration of classical violin strings fused with rhythms & sounds off all genres to create an electrifying musical experience. The result is a vibrational feeeel-good shift that rings with fresh innovation. Experience the magic of the Fiddla as he takes you on a journey through everything from a Ho Down to AfroBeats, EDM to Hip-Hop & the most original composition from a Violin Virtuoso! "I make music to connect in a way that feels Universal" -HG</p>
                    <img src="https://picsum.photos/450/300" alt="">
                    <p>Humble G tha Fiddla, born Myles Smith, is an international performer and Award Winning Violinist from Cleveland, Ohio and Alumni of the Cleveland School of the Arts. While a student there, he was accepted to the Music School Settlement and later went on to study at the Cleveland Institute of Music (one of America’s top private, independent music conservatories) where he played directly under the tutelage of the former President of CIM and Concert Master of the internationally renowned Cleveland Orchestra, Dr. Joel Smirnoff. Throughout the early days of his music career, at only 15, Humble found prestige as one of only two youth to play in the Cleveland Suburban Orchestra & the Beachwood Symphony Orchestra, leading him to become an organic song writer & composer.</p>
                    <img src="https://picsum.photos/450/300" alt="">
                    <p>Humble has a steady growing fan base for his music and his stage performance gives audiences an experience that is both electrifying and educational. He is coined the R.S.V.P of entertainment, which is also the name of his first EP -an acronym for Rapper, Singer, Violinist, Producer. Humble has provided entertainment for all types of venues including corporate events, weddings, schools, and more too numerous to mention. He has graced stages from Caesars Palace in Las Vegas, to the U.S. Tennis Opening at Flushing Meadows in New York. He has honorably played for government officials across all political parties, including mayors, governors, senators and presidential candidates. Most noteworthy is his performance for our 44th president of the United States, Barack Obama, in an historic accomplishment as the first ever musical act to perform during his campaign.</p>
                    <img src="https://picsum.photos/450/300" alt="">
                    <p>Humble G has shared the stage with numerous artists such as KRS 1, Bun B, Nick Cannon, V. Bozeman, Dru Carey, Kindred the Family Soul, Ohio PlayersPlayersp, Bone Thugs -n- Harmony, Plies, Kim Coles and Force MDs to name a few. His unique style incorporates original music with layers of texture that fuse the classic strings of the Violin with new age rhythms of world music to create an experience that moves the soul. Never before has there been an artist that combines the lyrical prowess of Jay-Z, the musicality & showmanship of Michael Jackson & the classical technique of Joshua Bell to form an original, illuminating musical experience that moves all ages. Currently, Humble is expanding his project with new, highly exhilarating & inspirational music and videos that bring to life the fullness of his mission and vision. One such project slated for 2019, is the filming of a music video in the heart of Miami, titled “Unforgettable” -a vibrant love song with a soft Afro-beat undertone that paints the picture of an unforgettable love connection with culturally flavorful verses from Humble G and a featured Spanish speaking artist from the Dominican Republic.</p>
                    <img src="https://picsum.photos/450/300" alt="">
                </div>
                <div class='campaign-right'>
                    <h4>Support</h4>
                    <div class='pledge'>
                        <h2>Make a pledge without reward</h2>
                        <input type="number" name="" id="" placeholder="10">
                    </div>
                    <div class='pledge'>
                        <h2>Pledge US$ 1 or more</h2>
                        <h3> copy of Every Dollar Count</h3>
                        <p> Thank you for your support</p>
                        <h4>ESTIMATED DELIVERY</h4>
                        <h5>Jul 2019</h5>
                        <p>38 backers</p>
                    </div>
                    <div class='pledge'>
                        <h2>Pledge US$ 1 or more</h2>
                        <h3> copy of Every Dollar Count</h3>
                        <p> Thank you for your support</p>
                        <h4>Estimated Delivery</h4>
                        <h5>Jul 2019</h5>
                        <p>38 backers</p>
                    </div>
                    <div class='pledge'>
                        <h2>Pledge US$ 1 or more</h2>
                        <h3> copy of Every Dollar Count</h3>
                        <p> Thank you for your support</p>
                        <h4>Estimated Delivery</h4>
                        <h5>Jul 2019</h5>
                        <p>38 backers</p>
                    </div>
                </div>
            </div>
        </div> 

        <div v-if="FAQ === true">FAQ</div>
        <div v-if="Updates === true">UPD</div>
        <div v-if="Comments === true">Comments</div>
        <div v-if="Community === true">Community</div>
    </div>
</template>

<script>
export default {
    name: 'showSmallBanner',
    data () {
    return {
        Campaign: true, 
        FAQ: false, 
        Updates: false, 
        Comments: false, 
        Community: false
    }
  },
    props: ["projectName", "projectDescription", "gravatar","authorFirstName", "authorLastName", "percentage", "pledge", "pledgeObjective", "numberOfContributors", "expireAt", "tags", "location"],
    methods: {
        goToTags: function() {
            this.$emit('goToTags')
        },
        addPledge: function() {
            this.$emit('addPledge')
        },
        showCampaign: function() {
            this.Campaign=true
            this.FAQ=false
            this.Updates=false
            this.Comments=false
            this.Community=false
        },
        showFaq: function(){
             this.Campaign=false
            this.FAQ=true
            this.Updates=false
            this.Comments=false
            this.Community=false
        }, 
        showUpdates: function (){
            this.Campaign=false
            this.FAQ=false
            this.Updates=true
            this.Comments=false
            this.Community=false
        },
        showComments: function (){
            this.Campaign=false
            this.FAQ=false
            this.Updates=false
            this.Comments=true
            this.Community=false
        },
        showCommunity: function (){
            this.Campaign=false
            this.FAQ=false
            this.Updates=false
            this.Comments=false
            this.Community=true
        },
    },
}
</script>


<style>

.campaign {
    padding: 3em 1.5em;
    display:flex;
}
.campaign-left {
    padding-right: 1em;
    margin: auto;
}

.campaign-left p{
 font-size: 80%;
 font-weight: lighter;
 padding: 2em 0 2em 0;
 text-align: justify;
}


.campaign-right {
    margin-left: 3.4em;
}


.pledge {
    border: 1px solid #dcdedd;
    padding: 1.4em;
    text-align: justify;
    margin-top: 1.6em;
}

.pledge h2 {
    font-size: 15px;
    font-weight: lighter
}

.pledge h3 {
    font-size: 13px;
    font-weight: lighter
}

.pledge p {
    font-size: 12px;
    font-weight: lighter;
    color: #959794;
}

.pledge h4 {
    font-size: 13px;
    font-weight: lighter;
    color: #959794;
}


.pledge h5 {
    font-size: 12px;
}
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
    padding: 0px 100px;
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

/* ----- PORJECT INFO CATGEORY ------  */
.navbar-2 {
    border-top: 1px solid #f9f9f9;
    border-bottom: 1px solid #f9f9f9;
    display: flex;
    justify-content: space-between;
    padding: 1em;
}

.navbar-links ul {
    display: flex;
    justify-content: space-between;
    margin: 10px auto;
}
.navbar-links li {
margin-right: 1em;
}
.navbar-links li:hover {
margin-right: 1em;
color: #4b9f75;
text-decoration: underline;
transition: 0.5s;
}

.navbar-btn {
    display: flex;
    justify-content: space-between;
}

.pledge-btn {
    background-color: #4b9f75;
    color: white;
    font-weight: lighter;
    padding: 10px 20px;
    transition: 0.5s;
}
.pledge-btn:hover {
    background-color: #377766;
}

.remind-btn {
    margin-right: 2em;
     margin-left: 1.2em;
     padding: 10px 20px;
     border: none;
}

.remind-btn:hover {
    border: solid 1px #bababa;
    transition: 0.5s;
}

/* ----- SUBCATGEROTY CAMPAIGN ------  */

</style>
