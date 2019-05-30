<template>
  <div class="footer">
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

    <!------------ FOOTER TOP ------------ -->
    <div class="footer-top row">
      <div class='footer-top-first-column col-lg-3 col-md-3 col-sm-12'>
        <h4>À PROPOS DE KICKSTARTER</h4>
        <ul>
          <li><a href="#">À propos de Kickstarter</a></li>
          <li><a href="#">Notre charte</a></li>
          <li><a href="#">Statistiques</a></li>
          <li><a href="#">Presse</a></li>
          <li><a href="#">Carrières</a></li>
        </ul>
      </div> 
      <div class='footer-top-second-column col-lg-3 col-md-3 col-sm-12'>
        <h4>ASSISTANCE</h4>
        <ul>
          <li><a href="#">Centre d'aide</a></li>
          <li><a href="#">Nos règles</a></li>
          <li><a href="#">Manuel du créateur</a></li>
          <li><a href="#">Presse</a></li>
          <li><a href="#">Mécénat</a></li>
        </ul>
      </div> 
      <div class='footer-top-third-column col-lg-3 col-md-3 col-sm-12'>
         <h4>BONJOUR</h4>
        <ul>
          <li><a href="#">Lettres d'information</a></li>
          <li><a href="#">Applications mobiles</a></li>
          <li><a href="#">Blog Kickstarter</a></li>
          <li><a href="#">Blog technique</a></li>
          <li><a href="#">Recherche</a></li>
        </ul>
      </div> 
      <div class='footer-top-fourth-column col-lg-3 col-md-3 col-sm-12'>
        <h4>AUTRES RESSOURCES KICKSTARTER</h4>
        <ul>
          <li><a href="#">The Creative Independent</a></li>
          <li><a href="#">Kickstarter Magazine</a></li>
          <li><a href="#">Podcast Kickstarter</a></li>
        </ul>
      </div> 
    </div>
<!------------ FOOTER middle  ------------ -->
    <div class="footer-middle row">
      <div class="footer-middle-left col-sm-12 col-md-12 col-lg-6">
        <div class="footer-copyright ">
          <h5> <i class="fab fa-kickstarter"> </i></h5>
          <h5>  Kickstarter, PBC © 2019</h5>
        </div>
      </div>
      <div class="footer-middle-right col-sm-12 col-md-12 col-lg-6 row">
        <div class="footer-links ">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="Language-Currency-btn row">
          <b-dropdown id="dropdown-1" lg="4" class="pb-2 m-2" variant="outline-secondary" text="Language">
            <b-dropdown-item href="#" class='dropdown-items'>English</b-dropdown-item href="#">
            <b-dropdown-item href="#" class='dropdown-items'>Italian</b-dropdown-item href="#">
            <b-dropdown-item href="#" class='dropdown-items'>Espanol</b-dropdown-item href="#">
            <b-dropdown-item href="#" class='dropdown-items'>Français</b-dropdown-item href="#">
          </b-dropdown>
          <b-dropdown id="dropdown-1" lg="4" class="pb-2 m-2" variant="outline-secondary" text="Currency">
            <b-dropdown-item href="#" class='dropdown-items'>US Dollar (USD)</b-dropdown-item href="#">
            <b-dropdown-item href="#" class='dropdown-items'>Euros (EUR)</b-dropdown-item href="#">
            <b-dropdown-item href="#" class='dropdown-items'>Canadian Dollar (CAD)</b-dropdown-item href="#">
            <b-dropdown-item href="#" class='dropdown-items'>Singapore Dollar (SGD)</b-dropdown-item href="#">
          </b-dropdown>
        </div>
      </div>
    </div>
<!------------ FOOTER bottom ------------ -->
    <div class="footer-bottom">
      <a href="#">Trust and Safety</a>
      <a href="#">Terms of Use</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Cookie Policy</a>
    </div> 

</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
 /* ------------ TOP -----------  */
.footer-top{
  width: 100%;
  text-decoration-line: none;
  display: flex; 
  justify-content: space-between;
  padding: 3% 3% 0 3%;
}

ul {
list-style-type: none;
padding: 0;
position: relative;

}

.footer-top h4 {
  font-size: calc(15px + 1vw);
  font-weight: bold;
}

.footer-top a{
  text-decoration-line: none;
  color: black;
   font-size: calc(10px + 1vw);
}

.footer-top a:hover{
  color: #377766;
}

.footer-top-first-column{
  width: 25%;
  padding:3%; 
}
.footer-top-second-column{
  width: 25%;
  padding:3%; 
}
.footer-top-third-column{
  width: 25%;
  padding:3%; 
}
.footer-top-fourth-column{
  width: 25%;
  padding:3%; 
}

 /* ------------ MIDDLE -----------  */
.footer-middle .row {
    margin-right: 0px;
    margin-left: 0px; 
}
 .footer-middle {
   display: flex; 
   justify-content: space-between;
 }

  .footer-copyright{
   display: flex; 
 }

  .footer-copyright h5{
    padding-left: 10px;
    font-size: calc(20px + 0.5vw);
  }

 .footer-middle-right {
   display: flex;
   text-align: center;

 }

 .footer-links a{
   padding: 10px;
   color: #bdbfbe;
  font-size: calc(20px + 1.5vw);
 }
  .footer-links a:hover{
   padding: 10px;
   color: black
 }

#dropdown-1 button{
  padding: 10% 30% ; 
  max-width: 140px;
}

</style>


