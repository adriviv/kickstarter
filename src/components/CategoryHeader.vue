<template> 
   <div class='category'>
      <a href="#">Art</a>
      <a href="#">Comics</a>
      <a href="#">Design & Technology</a>
      <a href="#">Cinema</a>
      <a href="#">Food & Creation</a>
      <a href="#">Game</a>
      <a href="#">Music</a>
      <a href="#">Book</a>
    </div> 
</template> 


<style>
.category {
  display: flex;
  justify-content: space-between;
  padding: 1.5% 9%;

  border: 1px solid #e8e8e8;
}

.category a {
    text-decoration: none;
 color:#656969;
}
.category a:hover {
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: 0.5s;
}
</style>
