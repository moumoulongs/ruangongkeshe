<template>
  <el-table
    class="orderform"
    :data="orderData"
    style="width: 60%">
    <el-table-column
      label="订单编号"
      width="210">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.orderID }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="210">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="书籍总数"
      width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.totalCount }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="总价格"
      width="100">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.TotalAmount }}</span>
      </template>
    </el-table-column>
    
    <el-table-column
      label="订单状态"
      width="120">
      <template slot-scope="scope">
        <el-tag type="success" v-show=scope.row.state>已签收</el-tag>
        <el-tag type="danger"  v-show=2-scope.row.state>未签收</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="订单详情"
      width="200">
      <template slot-scope="scope">
        <el-popover
          placement="right"
          width="390"
          trigger="click">
          <el-table :data="gridData[scope.$index]">
            <el-table-column width="50" property="orderItemID" label="书籍编号"></el-table-column>
            <el-table-column width="80" property="title" label="书名"></el-table-column>
            <el-table-column width="80" property="author" label="作者"></el-table-column>
            <el-table-column width="50" property="price" label="价格"></el-table-column>
            <el-table-column width="50" property="count" label="数量"></el-table-column>
            <el-table-column width="80" property="amount" label="金额"></el-table-column>
          </el-table>
          <el-button slot="reference">订单详情</el-button>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="takeOrder(scope.row.orderID)">确认收货</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { apigetMyOrder, apitakeOrder, apigetOrderInfo1 } from '../../../request/api';
  export default {
    components: {
      apigetMyOrder, apitakeOrder, apigetOrderInfo1
    },
    data() {
      return {
        orderData: [],
        gridData:[],
        gindex: 0,
      }
    },
    inject: ["reload"],
    methods: {
      takeOrder (orderId) {
        let formData = new FormData();
        formData.append("orderId",orderId);
        apitakeOrder(formData).then(res => {
          if(res.data.code == 200) {
            this.$message.success("确认收货成功");
            this.reload();
          } else {
            this.$message.warning("确认收货失败");
          }
        })
      }
    },
    beforeCreate: function () {
      console.log("before created");
    },
    created: function () {
      console.log("created");
      apigetMyOrder().then(res => {
        if(res.data.code == 200) {
          this.orderData = res.data.message.res.orders;
          for(var i in res.data.message.res.orders) {
            let formData = new FormData();
            formData.append('orderId', res.data.message.res.orders[i].orderID)
            apigetOrderInfo1(formData).then(res => {
              this.gridData.push(res.data.message.res);
            })
          }
        } else {
          this.$message.warning("获取订单失败");
        }
      })
    }
  }
</script>

<style>
.orderform {
  margin-left: 20%;
  margin-top: 1%;
  
}
a {
  text-decoration: none;
}
</style>