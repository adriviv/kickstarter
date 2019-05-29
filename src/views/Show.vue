<template>
    <div class="show">
        <Navbar></Navbar>
        <showSmallBanner
            :projectName = project.name
            :projectDescription = project.description
            :gravatar = project.author.gravatar
            :authorFirstName = project.author.first_name
            :authorLastName = project.author.last_name
            :percentage = Math.floor(((project.sumOfPledges)/(project.pledgeObjective)*100))
            :pledge = project.sumOfPledges
            :pledgeObjective = project.pledgeObjective
            :numberOfContributors = contributor
            :expireAt = remainingdays
            :tags = project.tags[0]
            :location = location
            v-on:goToTags="goToTags(project.tags[0])"
            v-on:addPledge="addPledge(project._id)"
        ></showSmallBanner>

        <div class='separator'></div>
        
        <b-container>
            <b-row class='navbar-2'>
                    <b-col @click="showCampaign" class=navbar-links>Campaign</b-col>
                    <b-col @click="showFaq" class=navbar-links>FAQ</b-col>
                    <b-col @click="showUpdates" class=navbar-links>Updates</b-col>
                    <b-col @click="showComments" class=navbar-links>Comment</b-col>
                    <b-col @click="showCommunity" class=navbar-links>Community</b-col>                    
                    <b-col  sm="6" md="6" lg="6" class='navbar-btn'>
                        <button class='pledge-btn'>Back this project</button>
                        <button class='remind-btn'><i class="fas fa-heart"></i> Remind me </button>
                    </b-col>
                </b-row>
            </b-container>
           
        <div class='separator'></div>

   

            <div v-if="Campaign ===true">
                <b-container> 
                    <b-row class='campaign-sub-div'>
                        <b-col cols="6" class='campaign-left'>
                            <img src="https://source.unsplash.com/random" alt="">
                            <p>UPDATE: I have reached my first goal! I have created a stretch goal so I can put up a billboard in Ohio. Right now, American women are facing yet another surge in right-wing, reactionary efforts to control their bodies. This time, legislatures in Alabama, Missouri, Georgia, Ohio and others states have recently passed highly restrictive laws aimed at bringing a case to the now stacked conservative Supreme Court in a calculated effort to overturn Roe v Wade. We must answer with the voice of the majority! I will be responding by placing a billboard in Birmingham, Alabama that speaks to everyone. Your body is your business... and not the business of a hyper-conservative legislature made up mostly of men. Please help support this effort by donating to this Kickstarter. If we surpass the goal, any overage (up to double) will be sent to NARAL Pro-Choice America. If we double the goal, I'll put up a billboard in Ohio.</p>
                        </b-col>
                        <b-col cols="6">
                            <pledgeShowCard></pledgeShowCard>                                                                                     
                        </b-col>
                    </b-row>
                </b-container>
            </div> 

            <div v-if="FAQ === true">FAQ</div>
            <div v-if="Updates === true">UPD</div>
            <div v-if="Comments === true">Comments</div>
            <div v-if="Community === true">Community</div>                                    
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import axios from "axios";
    import showSmallBanner from "@/components/Banner/showSmallBanner";
    import pledgeShowCard from "@/components/Cards/pledgeShowCard";




    export default {
        name: "show",
        components: {
            Navbar,
            showSmallBanner,
            pledgeShowCard,

        },
    data() {
        return {
        proId:this.$route.params.Pid,
        title:"show",
        project: [],
        remainingdays: 0,
        contributor: 0,
        location: "undefined",
        Campaign: true, 
        FAQ: false, 
        Updates: false, 
        Comments: false, 
        Community: false
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
                var date2 = new Date (Date.now())
                this.contributor = data.pledges.length
                this.remainingdays = Math.round(Math.abs((date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000)))
                this.project = data 
            });
        },
        goToTags(tagId) {
            //console.log('test tag',tagId)
             this.$router.push({name:'tag',params:{tag:tagId}})
        },
        addPledge(projectId){
            console.log('test Pledge', projectId )
            this.$router.push({name: 'Pledge', params:{Pid: projectId}})
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

.separator {  
    border-top: 1px solid #dcdedd;

}
.navbar-2 {
    padding: 1em 0;
}


.navbar-links {
    font-size: calc(10px + 0.5vw);
    text-align: center;
    padding-bottom: 1em;
}


.navbar-btn {
    display: flex;
     font-size: 15px;
}

.pledge-btn {
    padding: 10px 40px;
}
.remind-btn {
    margin-left: 1em;
    padding: 10px 40px;
}

.pledge-btn {
    color: white;
    background-color: #4b9f75; 
}

.pledge-btn:hover {
    background-color: #377766; 
}

.remind-btn {
    border: none; 
    color: #a298a1;
}

.remind-btn:hover {
    color: black;
}
.campaign-sub-div {
    padding: 1em 0;
}
.campaign-left img{
    width: 100%;
    padding-bottom: 1em;
}
.campaign-left p{
    font-size: calc(10px + 0.6vw)
}
</style>
