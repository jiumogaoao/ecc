var CryptoJS = require("crypto-js");

export const encrypt64 = (data) => {
  var str = CryptoJS.enc.Utf8.parse(data);
  var base64 = CryptoJS.enc.Base64.stringify(str);
  return base64;
};
export const decrypt64 = (data) => {
  var words = CryptoJS.enc.Base64.parse(data);
  var parseStr = words.toString(CryptoJS.enc.Utf8);
  return parseStr;
};

export const MD5 = (data)=>{
	return CryptoJS.MD5(data).toString()
}