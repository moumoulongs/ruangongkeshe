<template>
  <div class="nav-bottom">
        <a href="#">动漫</a>
        <a href="">|</a>
        <a href="#">游戏</a>
</template>

<script>
export default {
    name: 'Footter',
}
</script>

<style>
.nav-bottom {
   display: inline-block;
   position: relative;
   top: 600px;
   left: 45%;
   background-color: rgba(77, 77, 77, 0);
   height: 52px;
   width: 195px;
}
.nav-bottom a {
   display: inline-block;
   text-decoration: none;
   color: rgb(255, 255, 255);
   margin: 10px;
   font-size: 25px;
}
</style>