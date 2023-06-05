<template>
  <div class="body">
  <myComponent></myComponent>
  <cric></cric>

    

  </div>
</template>
<script>
  import MyComponent from './myComponent.vue'
  import cric from './cric.vue'



  export default {
    components: {
      MyComponent, cric
    },
    data () {
      return {

      }
    },
    methods: {
        
    },
    created: function () {
      console.log(localStorage.getItem("token"));
    }
  }

</script>

<style>
.body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}


</style>