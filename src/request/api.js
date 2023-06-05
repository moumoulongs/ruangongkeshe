import { get , post } from './http'



//登录
export const apiLogin = p => post('/login', p);

//注册
export const apiRegister = p => post('/rest/api/user/register',p);
//登出
export const apiLogout = p => post('/rest/api/user/logout');



