<template>
	<div id="login-box">
			<h1>管理系统登录</h1>
			<div class="input-box">
				<i class="iconfont">&#xe609;</i>
				
				<input type="text"  v-model="form.adminname" placeholder="账号"/>
			</div>
			<div class="input-box">
				<i class="iconfont">&#xe605;</i>
				<input type="password" placeholder="密码" v-model="form.adminpassword"/>
			</div>
			<button @click="submit">登录</button>
		</div>
</template>

<script>
	import { apiadminLogin } from "../../../request/api";
	export default {
		components: {
			apiadminLogin
		},
		data () {
			return {
				form: {
					adminname: '',
					adminpassword: ''
				}
			}
		},
		inject: ["reload"],
		methods: {
			submit() {
				let formData = new FormData()
				formData.append("adminname",this.form.adminname);
				formData.append("adminpassword",this.form.adminpassword);
			apiadminLogin(formData).then(res => {
				if(res.data.code == 200) window.location.href='http://localhost:8082/pages/manager/manager.html';
                else this.$message.warning(res.data.message.res);
			});
		},
		}
	}
</script>

<style>
	body{
	background-repeat: no-repeat;
	background-size:100%;
	background-position: 0px -50px;
}
#login-box{
	background-color: #00000068;
	border-radius: 13px;
	text-align: center;
	margin: 0px auto;
	margin-top: 80px;
	width: 350px;
	height: 400px;
}

#login-box h1{
	padding-top: 60px;
	color: #ffffff;
}

#login-box .input-box{
	margin-top: 30px;
}
#login-box .input-box input{
	border: none;
	background: none;
	margin-left: 15px;
    border-radius: 5px;
    height: 30px;
	border-bottom: #FFFFFF 2px solid;
	padding: 5px 10px;
	outline: none;
	color: #FFFFFF;
}

#login-box button{
	line-height:30px;
	margin-top: 30px;
	width: 130px;
	height: 30px;
	border-radius:13px ;
	outline: none;
	border: none;
	background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
	color: #FFFFFF;
}

#login-box button:hover{
	background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
#login-box .input-box i{
	color: #FFFFFF;
}


</style>