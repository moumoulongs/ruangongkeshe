<template>
  <div class="body">
    <myComponent class="cmt"></myComponent>
    <div class = "books">
      <span class = "book" v-for="(book,index) in books">
        <img v-bind:src="img[index]" />
        <p>{{ book.title }}</p>
        <p>书籍价格：￥{{ book.price }}</p>
        <el-button size="medium" @click="atc(book.id)">加入购物车</el-button>
      </span>
      <div class="block">
        <span class="demonstration"></span>
        <el-pagination
          layout="prev, pager, next"
          :current-page.sync="pagination.current"
          :page-size="pagination.size"
          @current-change="currentChange"
          :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import MyComponent from './myComponent.vue'
  import cric from './cric.vue'
  import axios from 'axios'
  import { apiGetBook , apiaddBookToCar, apigetBookCover} from '../../../request/api'



  export default {
    components: {
      MyComponent, apiGetBook, cric, apiaddBookToCar, apigetBookCover, axios
    },
    data () {
      return {
        pagination: {
          current: 1,
          size: 10//每页显示多少条数据
        },
        page:1,
        books: [],
        img:[],
        imgpath:[],
      }
    },
    inject: ["reload"],
    methods: {
      currentChange(page) {
        let formData = new FormData()
        formData.append("pageNo",page);
        apiGetBook(formData).then(res => {
          this.books = res.data.message.res.books;
          console.log(this.books)
          this.imgpath = {};
          this.img = [];
          for(var i in res.data.message.res.books)
          {
            let imgPath = this.books[i].imgPath
            let formData = new FormData();
            formData.append('imgpath',imgPath)
            axios.post('http://localhost:8080/getBookCover', formData, {responseType: 'arraybuffer' }).then(res => {
              // let blob = new Blob([res], { type: 'image/' });
              this.img.push(URL.createObjectURL(new Blob([new Uint8Array(res.data)], { type: 'image/jpeg' })));
            })
          }
        })
        // this.reload();
      },
      atc(id) {
        console.log(document.cookie)
        let formData = new FormData()
        formData.append("bookId",id);
        apiaddBookToCar(formData).then(res => {
          if(res.data.code == 200) {
            this.$message.success(res.data.message.res);
          } else {
            this.$message.warning(res.data.message.res);
          }
          
        }).catch(res => {
          this.$message.error("连接服务器失败");
        })
      }
    },
    beforeCreate: function () {
      console.log("beforeCreated")
      let formData = new FormData()
        formData.append("pageNo",1);
      apiGetBook(formData).then(res => {
        this.books = res.data.message.res.books;
        for(var i in res.data.message.res.books)
        {
          let imgPath = this.books[i].imgPath
          let formData = new FormData();
          formData.append('imgpath',imgPath)
          axios.post('http://localhost:8080/getBookCover', formData, {responseType: 'arraybuffer' }).then(res => {
            // let blob = new Blob([res], { type: 'image/' });
            this.img.push(URL.createObjectURL(new Blob([new Uint8Array(res.data)], { type: 'image/jpeg' })));
          })
        }
        console.log(this.img);
      })
    },
    created: function() {
      let img = this.img;
      console.log("Created")
      console.log(img);
      console.log(img.length);
      console.log("asdads")
    },
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
  margin-top: 2%;
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
  height: 240px;
}
.book > button{
  float: right;
}
.cmt { /** 轮播图 */
  margin-left: 5%;
  margin-top: 2%;
}
.block {/**分页 */
  margin-left: 31%;
} 
</style>