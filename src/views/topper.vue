<template>
<div class="nav" :key="this.key">
        <div class="nav_left">
            <ul>
                <li><router-link to="/home">首页</router-link></li>
                <li><router-link to="/resource">购物车</router-link></li>
                <li><router-link to="/test">我的订单</router-link></li>
            </ul>
        </div>
        <div class="nav_right">
            <ul>
               <li v-if="isShow[0]"><router-link to="/login">登录</router-link></li>
               <li v-if="isShow[0]"><router-link to="/register">注册</router-link></li>
               <li v-if="isShow[1]">
                  <el-dropdown :hide-on-click="false">
                     <span class="el-dropdown-link">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
                     </span>
                     <el-dropdown-menu slot="dropdown">
                       <el-dropdown-item ><a @click = "logOut">退出登录</a></el-dropdown-item>
                     </el-dropdown-menu>
                  </el-dropdown>   
               </li>
            </ul>  
        </div>
    </div >
</template>

<script>
   import { apiLogout } from '../request/api';
   export default {
       name: 'Topper',
       data () {
         return {
            isShow: [true,false],
            key: 0,
         }
       },
       methods: {
         logOut () {
            var logout = confirm("是否登出");
            if(logout) {
               this.key += 1;
               apiLogout().then(res => {
               localStorage.clear("token");
               console.log(localStorage.getItem("token"));
               this.$message.success("退出登录成功");
               clearTimeout(this.timer);
               const loading = this.$loading({
						lock: 'true',
						text: 'loading',
						spinner: 'el-icon-loading',
						background: 'rgba(21, 25, 24,0.7)'
					});
               this.timer = setTimeout(() => {
                  loading.close();
                  this.$router.push('/');
                  location.reload();
               },1000);
               // this.$message.success(res.data.msg);
            });
            }else{
               return;
            }
         }
       },
       created : function ()
       {
         let _token = localStorage.getItem("token");
         if(_token) {
            this.isShow[0] = false;
            this.isShow[1] = true;
         }
       }
   }

</script>

<style>
.nav{
   
   background-color: rgb(65, 110, 120);
   border-bottom:1px solid #000000;
   height: 60px;
}
.nav div {
   display: inline-block;
}
.nav_lef {
   float: left;
   height: 100%;
}
.nav_right {
   float: right;
   height: 100%;
}

.nav ul {
   display: inline-block;
   list-style-type: none;
   height: 100%;
}
.nav li {
   display: inline-block;
   height: 100%;
}
.nav a {
   display: inline-block;
   padding: 0 15px;
   color: rgb(248, 229, 195);
   text-decoration: none;
}
.nav a:hover {
   background-color: rgba(152, 152, 152, 0.123);
   color: rgb(255, 204, 0);
}
</style>