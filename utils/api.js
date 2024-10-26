// API request functions
function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      success: resolve,
      fail: reject
    });
  });
}
module.exports = {
  request
};
