var timeModel = function (time){
  var min = parseInt(time / 60);
  var sec = time % 60;
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  return min + ":" + sec;
}
// 模块向外导出
module.exports = {
  timeModel: timeModel
}
