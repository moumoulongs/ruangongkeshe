<template>
  <H1>考试</H1>
</template>

<script>

import { apigetMyOrder } from '../../../request/api'

export default {
    name: 'Test',
    components: {
      apigetMyOrder,
    },
    data () {
      return {
        myOrder:[],
      }
    },
    methods: {

    },
    created: function () {
      apigetMyOrder().then(res => {
        this.myOrder = res.data.message.res;
      })
    }
}
</script>

<style>

</style>