<template>
  <el-carousel :interval="4000" type="card" height="320px">
    <el-carousel-item>
      <h3 class="medium"><img src="./c1.jpg" alt=""></h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3 class="medium"><img src="./c2.jpg" alt=""></h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3 class="medium"><img src="./c3.jpg" alt=""></h3>
    </el-carousel-item>
    <el-carousel-item>
      <h3 class="medium"><img src="./c4.jpg" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #47566900;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf00;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce600;
  }
</style>