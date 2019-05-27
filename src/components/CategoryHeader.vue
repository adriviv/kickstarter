<template> 

   <div class='category'>



      <div class="flex mx-4">
        <div class="flex justify-center">
          <button @click="swipeLeft" id="left-button" type="button" class="swipe-left-btn">
              <i class="fas fa-arrow-left"></i>
          </button>
        </div>
          <nav   role="navigation" aria-label="nav" class="auto-scroll-x">
            <ul id="content" ref="content" class="text-nowrap">
              <li><a href="/tags/Art">Art</a></li>
              <li><a href="/tags/Comics">Comics</a></li>
              <li><a href="/tags/Design%20and%20Technology">Design & Technology</a></li>
              <li><a href="/tags/Cinema">Cinema</a></li>
              <li><a href="/tags/Food">Food & Creation</a></li>
              <li><a href="/tags/Game">Game</a></li>
              <li><a href="/tags/Music">Music</a></li>
              <li><a href="/tags/Book">Book</a></li>
            </ul>
          </nav>
        <div class="flex justify-center w6">
          <button @click="swipeRight" id="right-button" type="button" class="swipe-right-btn">
              <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    
     
    </div> 
</template> 

<script>
export default {
  name: "CategoryHeader",
  methods: {
// ----------------------SCROLLING BTN ----------------------- 
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) 
      {
        // Get the start timestamp
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();
        
        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress 
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft() {
      const content = this.$refs.content;
      this.scrollTo(content, -300, 800);
    },
    swipeRight() {
      const content = this.$refs.content;
      this.scrollTo(content, 300, 800);
    }
  }

}

</script>



<style>
.flex{
  display: flex; 
  justify-content: space-between;
}
.category {
  width: 100%;
  border: 1px solid #e8e8e8;
}

.category ul {
  display: flex; 
  justify-content: space-between;
  white-space: nowrap;
	overflow-x: auto;
	overflow-y: hidden;
	-webkit-overflow-scrolling: touch;
}

.category a {
  text-decoration: none;
    color:#656969;
    font-size: calc(10px + 1vw);
    padding-right: 15px; 
}
.category a:hover {
    text-decoration: none;
    color: #4b9f75;
    font-weight: bold;
    border-bottom: 3px solid #4b9f75;
    transition: 0.5s;
}

.auto-scroll-x {
    overflow-x: auto;
}

.no-outline {
    outline: none;
}

.swipe-left-btn{
padding-right: 20px;
margin-left: -25px;
border: none;
}


.swipe-right-btn {
padding-left: 20px;
margin-right: -25px;
border: none;
}
</style>
