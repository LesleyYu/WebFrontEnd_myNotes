function UserError(message) {
  this.message = message || '默认信息';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;


new UserError("这是自定义的错误！");

throw new UserError('出错了！');