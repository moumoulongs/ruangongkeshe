<template>
  <div class="cartform">
    <el-table
      class="cart"
      :data="tableData"
      style="width: 100%"
      height="750">
      
      <el-table-column
        prop="book.id"
        label="书籍编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="book.title"
        label="名称"
        width="300">
      </el-table-column>
      <el-table-column
        prop="book.author"
        label="作者"
        width="120">
      </el-table-column>
      <el-table-column
        prop="book.price"
        label="单价"
        width="120">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量"
        width="120">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="总价"
        width="120">
      </el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="aBook(scope.$index)"
          type="text"
          size="small">
          -
        </el-button>
        <el-button
          @click.native.prevent="bBook(scope.$index)"
          type="text"
          size="small">
          +
        </el-button>
        <el-button
          @click.native.prevent="cBook(scope.$index)"
          type="text"
          size="small">
          x
        </el-button>
      </template>
    </el-table-column>
    </el-table>
    <h2 class="sumprice">总金额：￥{{ sumprice }}</h2>
    <el-button type="danger" @click = "bookCheckout" class="bookcheckout">提交订单</el-button>
    <el-button @click = "deleteCart" class="bookcheckout" >清空购物车</el-button>
  </div>
</template>

<script>
import { apigetCarInfo, apideleteCar, apiupdateCarItem, apideleteCarItem, apicheckOut } from '../../../request/api'

export default {
    name: 'Resource',
    components : {
      apigetCarInfo,apideleteCar,apiupdateCarItem, apideleteCarItem, apicheckOut
    },
    data() {
      return {
        tableData: [],
        cart: {},
        sumprice: 0,
      }
    },
    inject: ["reload"],
    methods: {
      deleteCart() {
        let formData = new FormData();
        formData.append("cartId",this.cart.CartID)
        apideleteCar(formData).then(res => {
          if(res.data.code == 200) {
            this.$message.success("清空购物车成功");
            this.reload();
          }
        })
      },
      aBook (index) { // 书籍减
        if(this.tableData[index].count == 1) {
          this.cBook(index);
          return;
        }
        let formData = new FormData();
        formData.append("cartItemId",this.tableData[index].cartItemID)
        formData.append("bookCount",this.tableData[index].count - 1)
        this.tableData[index].count -= 1;
        this.tableData[index].amount -= this.tableData[index].book.price;
        this.sumprice -= this.tableData[index].book.price;
        apiupdateCarItem(formData)
      },
      bBook (index) { // 书籍加
        let formData = new FormData();
        formData.append("cartItemId",this.tableData[index].cartItemID)
        formData.append("bookCount",this.tableData[index].count + 1)
        this.tableData[index].count += 1
        this.tableData[index].amount += this.tableData[index].book.price;
        this.sumprice += this.tableData[index].book.price;
        apiupdateCarItem(formData)
      },
      cBook (index) { // 删除书籍
        let formData = new FormData();
        formData.append("cartItemId",this.tableData[index].cartItemID)
        apideleteCarItem(formData)
        this.reload();
      },
      bookCheckout() {
        apicheckOut().then(res => {
          if(res.data.code == 200) {
            this.$message.success("订单提交成功");
            this.reload();
            return;
          } else {
            this.$message.warning("订单提交失败");
            return;
          }
        }).catch(
          // this.$message.error("出现错误") // 有bug
        )
      },
    },
    created: function () {
      console.log("created");
      apigetCarInfo().then(res => {
        this.cart = res.data.message.res.cart;
        this.sumprice = res.data.message.res.cart.totalAmount;
        // console.log(res.data.message.res.cart.totalAmount);
        this.tableData = res.data.message.res.cart.cartItems;
      });
    }
}
</script>

<style>
.cartform {
  display: inline-block;
  margin-left: 20%;
  background-color: #fff;
  width: 60%;
  height: 80%;
}
.dcf {
  display: inline-block;
}
.bookcheckout {
  display: inline-block;
  margin-right: 5%;
  margin-top: 1%;
  float: right;
}
.sumprice {
  display: inline-block;
  margin-left: 5%;
  float: left;
}
</style>