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
   
    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import axios from "axios";
    import showSmallBanner from "@/components/Banner/showSmallBanner";


    export default {
        name: "show",
        components: {
            Navbar,
            showSmallBanner,
        },
    data() {
        return {
        proId:this.$route.params.Pid,
        title:"show",
        project: [],
        remainingdays: 0,
        contributor: 0,
        location: "undefined"
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
        }
    },
}
</script>

<style>
</style>
