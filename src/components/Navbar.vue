  <template> 
    <div>
  <b-navbar toggleable="lg"  class='navbar'>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav>
        <b-nav-item class='navbar-text' href="/tags">Explore</b-nav-item>
        <b-nav-item class='navbar-text' href="http://localhost:8080/add">Start A Project</b-nav-item>
      </b-navbar-nav>
   

<img @click="gohome()" id="logo" src="../assets/kickstarter-logo-color.png"  alt="" style="
    width: 16%;
">

          <!-- <div><p>{{this.user.first_name}}</p></div> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input v-model='search' @keyup="searchFunction()" size="sm" class="mr-sm-2" id='btn-search' placeholder="Search"></b-form-input>
        </b-nav-form>


        <b-nav-item-dropdown v-if="loggedIn" right>
          <template slot="button-content">
            <img class="avatar" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="https://kitt.lewagon.com/placeholder/users/ssaunier" />
          </template>
          <b-dropdown-item >Your Account</b-dropdown-item>
          <b-dropdown-item href="#">Projects Saved</b-dropdown-item>
          <b-dropdown-item href="#">Only for me</b-dropdown-item>
          <b-dropdown-item href="#">Subscriptions</b-dropdown-item>
          <b-dropdown-item href="/Dashboard">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Parameters</b-dropdown-item>
          <b-dropdown-item href="#">Messages</b-dropdown-item>
          <b-dropdown-item href="#">Activity</b-dropdown-item>
          <b-dropdown-item><router-link :to="{ name: 'logout' }">Logout</router-link></b-dropdown-item>
        </b-nav-item-dropdown>

        <li v-if="!loggedIn"><router-link :to="{ name: 'login' }">Login</router-link></li>
        <li v-if="!loggedIn"><router-link :to="{ name: 'signup' }">Register</router-link></li>


      </b-navbar-nav>
       </b-collapse>
  </b-navbar>


    <div v-for="(project, index) in projects"  :key="project._id" v-if="projects && projects.length > 0 && index <= limitationList"> 
      <h3 @click="goTodetail(project._id)" >{{project.name}}</h3>
      <div class="description">{{ project.description }}</div>
    </div>
</div>


</template>

<script>
import { Store } from 'vuex'
import axios from "axios";

  export default {
    name: 'Navbar',
    data() {
      return {
        search: '', 
        projects: [], 
        limitationList:4
    };
  },

    computed: {
      loggedIn () {
        return this.$store.getters.loggedIn
      }
    },

    methods: {
      gohome: function() {
        window.location.href = 'http://localhost:8080/' 
      },
    
    searchFunction: function() {
      axios
      .post("/searchProject", {
        searchKeyword: this.search
      })
      .then(response => {
          console.log('la réponse', response)
          this.projects = response.data

        // console.log('index-list', this.projects)
       });
      },
    },
  };
</script>

<style>
.navbar {
    background-color: white; 
    border: 1px solid #e8e8e8;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.navbar-text {
    color: black;
}
#btn-search {
    border-radius: 25px;
}
#logo {
    position: relative;
    left: 25%;
}
</style>

