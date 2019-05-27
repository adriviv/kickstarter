<template>
    <div class="newsletter">
        <h2>Abonnez-vous à notre lettre d'information hebdomadaire</h2>
        <h5>Quelques projets triés sur le volet par notre équipe, une fois par semaine.</h5>
        <button> S'abonner</button>
  </div>
</template>

<script>
export default {
    name: 'newsletterBanner'
}
</script>

<style>
.newsletter{
  text-align: center; 
  padding: 0 10px;
  border: 1px solid #d6d6d6
}

.newsletter button{
  background-color: black;
  color: white;
  padding: 2%; 
  font-size: 20px;
  margin: 40px;
}

.newsletter h2{
  margin:  40px;
   font-size: calc(24px + 1vw);
  line-height: 2.6rem;
}

.newsletter h3{
  margin: 40px;
  font-size: 1.8rem;
  line-height: 2.4rem;
}

.newsletter button:hover{
  background-color: #4d4d4d;
  position: relative;
  bottom: 1px;
}
</style>

