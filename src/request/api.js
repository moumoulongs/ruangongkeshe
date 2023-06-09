import { get , post } from './http'



//登录
export const apiLogin = p => post('/login', p, {withCredentials: true});

//注册
export const apiRegister = p => post('/reGist',p);
//登出
export const apiLogout = p => get('/logout');

//图书信息获取
export const apiGetBook = p => post('/main',p);

//获取购物车信息
export const apigetCarInfo = p => get('/getCarInfo',p)
//更新购物车
export const apiupdateCarItem = p => post('/updateCarItem', p)
//删除购物项
export const  apideleteCarItem = p => post('/deleteCarItem',p)

//清空购物车
export const apideleteCar = p => post('/deleteCar',p)

//添加书籍到购物车
export const apiaddBookToCar = p => post('/addBookToCar',p)

//结账
export const apicheckOut = p => get('/checkOut',p)

//获取订单
export const apigetMyOrder = p => get('/getMyOrder',p)

//确认收货

export const apitakeOrder = p => post("/takeOrder",p)




