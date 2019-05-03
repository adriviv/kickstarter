<template>
<el-row>
  <el-col>
    <el-card class='card' :body-style="{ padding: '0px' }">
      <img src="https://source.unsplash.com/random/331x221" class="image">
      <div style="padding: 14px;">
        <a href="#" class="title">Operating{{ projectName }}</a>
        <div class="bottom clearfix">
          <div class="description">blabla {{ projectDescription }}</div>
          <a href="#" class="owner">By {{profileName}}</a>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>


</template>


<style>
.card {
    width: 331px;
}

.title {
    display: flex;
    justify-content: space-around; 
    font-size: 20px;
    text-decoration: none;
    color: black; 
    font-family: Helvetica, Arial, sans-serif;
}

.title:hover {
    text-decoration: none; 
    font-size: 24px; 
    font-weight: bold; 
    color: #397765; 
    transition: 0.3s;
    font-family: Helvetica, Arial, sans-serif;
}

  .description {
    font-size: 15px;
    color:#282828;
  }

.owner{
    color: gray;
    text-decoration: none;
}
.owner:hover{
    color: #959794;
    font-weight: bolder;
    text-decoration: none;
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

 

  .image {
    width: 331px;
    height: 212px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

