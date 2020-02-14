import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import {encrypt64,MD5} from './security_UT.js'

let uid=''
let token=''
let time=''
export const logon = (data,cb)=>{
	uid=data.uid;
	token=data.token;
	time=new Date().getTime()
	uni.setStorageSync('uid', uid);
	uni.setStorageSync('token', token);
	uni.setStorageSync('time', time);
	if(cb){cb()}
}
export const logout = ()=>{
	uid=null;
	token=null;
	time=null;
	uni.removeStorageSync('uid', uid);
	uni.removeStorageSync('token', token);
	uni.removeStorageSync('time', time);
}
function tokenCheck(){
	var t = new Date().getTime()
	if(time && ((t-time)<(1000*60*60*2))){
		return true;
	}else if(uni.getStorageSync('time')&& ((t-uni.getStorageSync('time'))<(1000*60*60*2))){
		uid=uni.getStorageSync('uid');
		token=uni.getStorageSync('token');
		time=uni.getStorageSync('time');
		return true;
	}else{
		return false;
	}
}
export const postFetch =  async (url,params = {},callback) => {
	
	if(url=="index/login/login"){
		let t = new Date().getTime()
		params.time=t
		params.token=MD5('indexlogin'+t)
	}else if(!tokenCheck()){
		logout();
		uni.reLaunch({
			url:"/pages/index/index"
		})
		return;
	}else{
		params.token = token;
		params.uid = uid;
	}
  try{
	 const res = await uni.request({
	 		url: 'https://api.ecc.city/usa_ecc/public/index.php/'+url, //仅为示例，并非真实接口地址。
	 		data: params,
	 			method:"POST",
	 		header: {
	 			'Content-Type':'application/json',
	 		},
	 	});
	if(callback){callback(res[1])}
    return res[1];
  }catch(e){
	// console.log(cacheKey+':请求错误',e)
    return {
      code:-1,
      message:e.message,
      status:false,
    };
  }
};