import { get , post } from './http'



//登录
export const apiLogin = p => post('/login', p);

//注册
export const apiRegister = p => post('/regist',p);
//登出
export const apiLogout = p => post('/rest/api/user/logout');

//图书信息获取
export const apiGetBook = p => post('/main');



