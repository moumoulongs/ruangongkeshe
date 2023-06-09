<template>
  <el-table
    class="orderform"
    :data="orderData"
    style="width: 40%">
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
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.totalCount }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="总价格"
      width="150">
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
import { apigetMyOrder, apitakeOrder } from '../../../request/api';
  export default {
    components: {
      apigetMyOrder, apitakeOrder
    },
    data() {
      return {
        orderData: []
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
    created: function () {
      console.log("created");
      apigetMyOrder().then(res => {
        if(res.data.code == 200) {
          this.orderData = res.data.message.res.orders;
        } else {
          this.$message.warning("获取订单失败");
        }
      })
    }
  }
</script>

<style>
.orderform {
  margin-left: 28%;
  margin-top: 1%;
}
</style>