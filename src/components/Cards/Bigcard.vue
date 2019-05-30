<template> 
    <div class="card-trip">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg">
        <div class="percentage-bar">
            <el-progress  :stroke-width="18" :percentage=percentage  :text-inside="true" color="#4b9f75"></el-progress>
        </div>
      <div class="card-trip-infos">
        <div>
          <h2 @click='goToDetail' >{{projectName}}</h2>
          <p  @click='goToDetail' >{{projectDescription}}</p>
          <p id='author'>By {{authorFirstName}} {{authorLastName}}</p>
        </div>
        <div class='favorite-button-pink'>
            <button class="pink-button" @click="addToFavortites" v-if="isFavorite"> <i class="heart fas fa-heart"></i></button>
             <button class="pink-button" @click="addToFavortites" v-else> <i class="heart far fa-heart"></i> </button> 
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Bigcard',
    data() {
      return {
      };
    },
    props: ['projectName', 'projectDescription', 'authorFirstName','authorLastName', 'percentage', "isFavorite" ],
    methods: {
      goToDetail: function() {
        this.$emit('goToDetail')
      },
      addToFavortites: function(){
        this.$emit('addToFavortites')
      }
    },
  };
</script>

<style>
.card-trip {
  overflow: hidden;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
}

.card-trip img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.first-div-left h5 {
  color: grey; 
  padding-bottom: 20px; 
}

.card-trip h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-trip h2:hover {
  color: #397765;
  text-decoration: underline;
  transition: 0.3s;
}

.card-trip p {
  font-size: 12px;
  opacity: .7;
  margin: 0;
}

.card-trip p:hover {
  text-decoration: underline;
  transition: 0.3s;
}

.card-trip .card-trip-infos {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}

.card-trip-infos .favorite-button-pink{
  position: absolute;
  right: 5px;
  top: -199px;
}

.card-trip-infos .favorite-button-pink button{
  width: 56px;
  color: #ea5873;
  font-size: 30px;
  border-radius: 100%;
  background-color: white;
  padding: 5px 13px 5px 13px;
}


.card-trip-infos .favorite-button-pink button:hover {
  color: white ; 
  font-size: 30px;
  border-radius: 100%; 
  background-color: #ea5873; 
  padding: 5px 13px 5px 13px; 
  transition: 0.8s
} */


#author {
  margin-top: 15px;
  font-size: 1.2rem;
  line-height: 1.8rem;
}
</style>

