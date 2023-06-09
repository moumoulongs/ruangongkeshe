<template>
	<div id="login-box">
			<h1>Login</h1>
			<div class="input-box">
				<i class="iconfont">&#xe609;</i>
				
				<input type="text"  v-model="form.username" placeholder="账号"/>
			</div>
			<div class="input-box">
				<i class="iconfont">&#xe605;</i>
				<input type="password" placeholder="密码" v-model="form.password"/>
			</div>
			<button @click="submit">登录</button>
		</div>
</template>

<script>
	import { apiLogin } from "../../../request/api";
	export default {
		components: {
			apiLogin
		},
		data () {
			return {
				form: {
					username: '',
					password: ''
				}
			}
		},
		inject: ["reload"],
		methods: {
			submit() {
				let formData = new FormData()
				formData.append("password",this.form.password);
				formData.append("username",this.form.username);
			apiLogin(formData).then(res => {
				console.log(res);
				if(res.data.code == 200) {
					localStorage.setItem('token',1);
					clearTimeout(this.timer);  //清除延迟执行 
					const loading = this.$loading({
						lock: 'true',
						text: 'loading',
						spinner: 'el-icon-loading',
						background: 'rgba(21, 25, 24,0.7)'
					});
					this.timer = setTimeout(()=>{   //设置延迟执行
					    this.$router.replace('/');
						loading.close();
						location.reload();
					},1000);
					this.$message.success('登录成功');
				} else {
					this.$message.warning(res.data.message.res);
				};
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
