/**
 * 目标：封装校验用户名和密码长度的函数
 * 要求：用户名最少 8 位，密码最少为 6 位
 */

const checkUserName = username => {
  return username.length >= 8
}

const checkPassWord = password => {
  return password.length >= 6
}

module.exports = {
  checkUser: checkUserName,
  checkPwd: checkPassWord
}