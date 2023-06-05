<template>
<div>
  <Topper></Topper>
  <router-view></router-view>
</div>
</template>

<script>
import Topper from './views/topper.vue'

export default {
  name: 'App',
  components: {
    Topper,
  }
}
</script>


<style>
html,body {
   margin: 0;
   padding: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(0, 0, 17, 0.596);
   background-image: linear-gradient(to right, rgba(44, 102, 56, 0.315), rgba(69, 144, 187, 0.438))

  }
</style>
