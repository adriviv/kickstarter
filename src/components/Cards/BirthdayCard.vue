<template>
<div class='container1'>
    <div class="birthday-card row">
        <img class=' col-sm-12 col-md-12 col-lg-6' src="@/assets/Kickstarter_10years.png" alt="">
        <div class="  birthday-card-text col-sm-12 col-md-12 col-lg-6">
        <h2> Kickstarter fête ses 10 ans. Célébrons ensemble ! </h2> 
        <h5> Grâce à vous, de magnifiques projets ont vu le jour et changé le monde. Découvrez comment.</h5>
        <a href="">En savoir plus</a>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    name: 'BirthdayCard'

}
</script>

<style>

.container1 {
    margin-right: -32px;
}

.birthday-card{
    width: 100%;
  display: flex;
  justify-content: space-between;
}

.birthday-card-text{
  border-left: 10px solid #037362;
 margin-bottom: 1em;
}

.birthday-card-text h2 {
    font-size: calc(20px + 1vw);
    line-height: 1.8rem;
    margin-bottom: 4.5%;
}

.birthday-card-text h5 {
    font-size: calc(16px + 0.5vw);
    line-height: 1.6rem;
    margin-bottom: 1.5%;
}

.birthday-card-text a {
    font-size: 1.2rem;
    line-height: 3.6rem;
}

.birthday-card-text h2:hover {
    font-size: calc(20px + 1vw);
    line-height: 3.6rem;
    color: #037362;
    text-decoration: underline;
}

.birthday-card img{
height: 250px;
  object-fit: cover;
}

</style>

