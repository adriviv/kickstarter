<template>
<div class="footer">
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">

  <div class="footer-top">
    hello
  </div>
   <div class="footer-bottom">
      <div class="footer-copyright">
        <h5> <i class="fab fa-kickstarter"> </i></h5>
        <h5>  Kickstarter, PBC © 2019</h5>
      </div>

    <div class="footer-links">
      <a href="#"><i class="fab fa-github"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-linkedin"></i></a>
    </div>
  </div>



  
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>


<style>
.footer {
  background: white;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  padding: 0px 50px;
  color: rgba(0,0,0,0.3);
}

.footer-top {
  display: flex; 
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0px 50px;
  color: rgba(0,0,0,0.3);
}
.footer-links {
  display: flex;
  align-items: center;
}
.footer-links a {
  color: black;
  opacity: 0.15;
  text-decoration: none;
  font-size: 24px;
  padding: 0px 10px;
}
.footer-links a:hover {
  opacity: 1;
}
.footer .fa-heart {
  color: #D23333;
}
.footer-copyright {
    display: flex;
}
</style>