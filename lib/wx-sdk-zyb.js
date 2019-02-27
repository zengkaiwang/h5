/*
 * @Author: WangZengKai 
 * @Date: 2019-02-26 17:39:07 
 * @Last Modified by: WangZengKai
 * @Last Modified time: 2019-02-27 17:01:23
 */

!(function(win, doc) {
  console.log("wx-sdk-zyb, wx", wx);

  //构造函数
  function MYSDK(option) {
    this.option = option;
  }

  // 移除构造函数原型上的方法
  MYSDK.prototype._remove = function(key) {
    delete this[key];
    return this;
  };

  /*
   * @method 获取当前环境
   * @param { function } 
   */
  MYSDK.prototype.getEnv = function(callback) {
    wx.miniProgram.getEnv(callback);
    return this;
  }  

  /*
   * @method 跳转到小程序
   * @param { Object } url:跳转路径
   */
  MYSDK.prototype.reLaunch = function(params) {
    wx.miniProgram.reLaunch(params);
    return this;
  }
  MYSDK.prototype.navigateBack = function(params) {
    wx.miniProgram.navigateBack(params);
    return this;
  }

  /*
   * @method 下载(待确定)
   * @param { 参数类型 } url 下载地址
   * @return { Promise } 
   */
  MYSDK.prototype.downloadFile = function(url) {
    return new Promise((resolve, reject) => {
      wx.downloadFile({
        url: url,
        complete(res) {
          if(res.statusCode === 200) {
            resolve(res)
          } else {
            reject()
          }
        }
      })
    })
  }

  /*
   * @method 跳转到小程序
   * @param { 参数类型 } 参数名 参数说明
   * @return { 返回值类型 } 返回值说明
   */
  MYSDK.prototype.aaa = function(param, callback) {
    wx.miniProgram.aaa({
      url:'/pages/course/main'
    });
    return this;
  }

  //new一个实例
  win.jsSdkZyb = new MYSDK();

})(window, document);
























// test
// JSsdk.loginApi({ username: 'admin', pwd: '123456' }, function(res) {
//   console.log(res);
// });

// JSsdk._update('logout', { redirect: 'http://aaa.com/bbb' });
// JSsdk.logout({}, function(res) {
//   console.log(res);
// });
