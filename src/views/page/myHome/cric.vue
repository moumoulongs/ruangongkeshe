<template>
    <div class="cric">
        <div class="nav_s"></div>
        <div class="cricList" v-for="(cric, index) in cricList" :key="index">
            <span class="cric_index">1</span>
            <a href="" class="cric_title">{{cric.title}}</a>
        </div>
    </div>
</template>

<script>
    import { apiGetCricList } from '../../../request/api';

    export default {
        name: 'cric',
        components: {
            apiGetCricList
        },
        data () {
            return {
                cricFrom: {
                    pageNum: 1,
                    pageSize: 10,
                    checkStatus: 1
                },
                cricList: [

                ]
            }
        },
        created: function () {
        console.log("created");
        var _this = this;
        console.log(1);
        apiGetCricList(this.cricFrom).then(res => {
          console.log(res);
          _this.cricList = res.data.data.list;
          console.log(_this.cricList);
        });
      },
    }
</script>

<style>
.cric {
    margin-top: 50px;
    padding: 0;
    position: relative;
    box-shadow:0 0 20px #666;
    width: 86%;
    left: 7%;
}
.nav_s {
    position: relative;
    width: 100%;
    height: 56px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid rgba(0, 0, 0, 0.13);
}
.cricList {
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    height: 52px;
    background-color: rgba(255, 255, 255, 0.849);
    border-bottom: 1px solid rgba(180, 176, 176, 0.274);
}
.cric_index {
    display: inline-block;
    margin: 0;
    padding: 0;
    position: relative;
    width: 5%;
    height: 97%;
    right: 0;
    border: 1px solid #fff;
}
.cric_title {
    text-decoration: none;
}
</style>