<template>
    <div class="card-product">
        <img @click="goToDetail" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg">
          <div class="card-product-infos">
              <h2 @click="goToDetail" >{{projectName}}</h2>
              <p id="amount-raised">Money Raised:  {{sumOfPledges}} / {{pledgeObjective}} $</p>
              <p>By  {{authorFirstName}} {{authorLastName}}</p>
          </div>
          <div class="favorite-btn">
              <button  @click="addToFavortites" v-if="isFavorite">  <i class="heart2 fas fa-heart"></i></button>
              <button  @click="addToFavortites" v-else>  <i class="heart2 far fa-heart"></i></button>
          </div>
    </div>
</template>

<script>
  export default {
    name: 'Smallcard',
    data() {
      return {
      };
    },
    props: ['projectName', 'authorFirstName','authorLastName', 'sumOfPledges', "isFavorite", 'pledgeObjective' ],
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

.card-product {
  overflow: hidden;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #d6d6d6 ;
  padding-left: 25px;
}

.card-product img {
  height: 100%;
  width: 120px;
  object-fit: cover;
}


.card-product h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-product p {
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
}


.card-product .card-product-infos {
  padding: 16px;
  margin-right: auto;
}



.favorite-btn button {
border: none;
background: none;
color: #dbdbdb; 
font-size: 30px;
}

#amount-raised {
  font-family: "open-sans sans-serif"; 
  font-weight: bold;
  color: #4b9f75;
  font-size: 14px;

}

.favorite-btn button:hover{
padding: 0;
border: none;
background: none;
color: black; 
font-size: 30px;
transition: 0.8s;
}
</style>
