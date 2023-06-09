<template>
<div>
  <Topper></Topper>
  <router-view v-if="isRouterAlive"></router-view>
</div>
</template>

<script>
import Topper from './views/topper.vue'

export default {
  name: 'App',
  components: {
    Topper,
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  provide() {
    //提供
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
}
</script>


<style>
html,body {
   margin: 0;
   padding: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(78, 78, 78, 0.409);
  }
</style>
