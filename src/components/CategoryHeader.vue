<template> 
   <div class='category'>
      <a href="/tags/Art">Art</a>
      <a href="/tags/Comics">Comics</a>
      <a href="/tags/Design%20and%20Technology">Design & Technology</a>
      <a href="/tags/Cinema">Cinema</a>
      <a href="/tags/Food">Food & Creation</a>
      <a href="/tags/Game">Game</a>
      <a href="/tags/Music">Music</a>
      <a href="/tags/Book">Book</a>
    </div> 
</template> 


<style>
.category {
  display: flex;
  justify-content: space-between;
  padding: 1.5% 10%;

  border: 1px solid #e8e8e8;
}

.category a {
  text-decoration: none;
    color:#656969;;
}
.category a:hover {
    text-decoration: none;
    color: #4b9f75;
    font-weight: bold;
    border-bottom: 3px solid #4b9f75;
    transition: 0.5s;
}
</style>
