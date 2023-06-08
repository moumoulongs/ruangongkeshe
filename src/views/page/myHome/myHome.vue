<template>
  <div class="body">
    <cric></cric>
    <myComponent class="cmt"></myComponent>
    <div class = "books">
      <span class = "book" v-for="(book,index) in books">
        <img src="./001.jpg">
        <p>书籍名称：{{ book.title }}</p>
        <p>书籍价格：￥{{ book.price }}</p>
        <el-button size="medium">加入购物车</el-button>
      </span>
    </div>
  </div>
</template>
<script>
  import MyComponent from './myComponent.vue'
  import cric from './cric.vue'
  import { apiGetBook } from '../../../request/api'



  export default {
    components: {
      MyComponent, apiGetBook, cric
    },
    data () {
      return {
        books: [
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          },
          {
          "id":47,
          "title":"1",
          "author":"3",
          "price":2,
          "sales":4,
          "stock":5,
          "imgPath":"./001.jpg"
          }
        ],
      }
    },
    methods: {
        
    },
    created: function () {
      apiGetBook().then(res => {
        // this.data.books = res.message.books;
      })
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
.books {
  margin-left: 15%;
  display: inline-block;
  float: none;
  margin-top: 5%;
  padding: 0;
  width: 70%;
  background-color: rgb(255, 255, 255);
  border-radius: 1px;
}
.book {
  display: inline-block;
  margin-left: 1%;
  margin-top: 1%;
  padding: 0;
  width: 19%;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  top: 0;
}
.book > img {
  margin-left: 13%;
}
.book > button{
  float: right;
}
.cmt {
  float: right;
  margin-right: 5%;
  margin-top: 1%;
}
</style>