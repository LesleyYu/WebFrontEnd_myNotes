// 封装校验手机号长度和校验验证码长度的函数
export const checkPhone = phone => phone.length === 11
export const checkCode = code => code.length === 6