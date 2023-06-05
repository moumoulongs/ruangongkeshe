<template>
	<div class="login-box">
			<h1>Register</h1>
			<div class="input-box">
				<i class="iconfont">&#xe609;</i>
				<input type="text"  v-model="form.email" placeholder="邮箱"/>
			</div>
			<div class="input-box">
				<i class="iconfont">&#xe605;</i>
				<input type="password" v-model="form.password" placeholder="密码" />
			</div>
            <div class="input-box">
				<i class="iconfont">&#xe605;</i>
				<input type="password" v-model="form.rePassword" placeholder="确认密码" />
			</div>
            <div class="input-box">
				<i class="iconfont">&#xe605;</i>
				<input type="password" v-model="form.username" placeholder="用户名" />
			</div>
			<button @click="submit">登录</button>
		</div>
</template>

<script>
    import { apiRegister} from "../../../request/api"
	export default {
		components: {
			apiRegister
		},
		data () {
			return {
				form: {
                    "codeType": 0,
                    "email": "",
                    "password": "",
                    "rePassword": "",
                    "username": ""
                }
			}
		},
		methods: {
			submit() {
				let submitData = {
					"codeType": 1,
                	"email": this.form.email,
                	"password": encrypt(this.form.password),
                	"rePassword": encrypt(this.form.rePassword),
                	"smsCode": this.form.smsCode,
                	"username": this.form.username
				};
				apiRegister(submitData).then(res => {
					alert(res.data.msg);
                	//操作成功
                	if(res.data.code == 200) {
						clearTimeout(this.timer);
						this.timer = setTimeout(() => {
							this.$router.push('/login');
						})
					}
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
.login-box{
	background-color: #00000068;
	border-radius: 13px;
	text-align: center;
	margin: 0px auto;
	margin-top: 20px;
	width: 400px;
	height: 540px;
}

.login-box h1{
	padding-top: 60px;
	color: #ffffff;
}

.login-box .input-box{
	margin-top: 30px;
}
.login-box .input-box input{
	border: none;
	background: none;
	border-bottom: #FFFFFF 2px solid;
	padding: 5px 10px;
	outline: none;
	color: #FFFFFF;
}

.login-box button{
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

.login-box .sendEmail {
    position: relative;
    right: -30px;
    width: 70px;
    background-color: rgb(3, 0, 0);
    color: #000000;
}

.login-box button:hover{
	background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
.login-box .input-box i{
	color: #FFFFFF;
}
</style>
