/*eslint-disable */
var intervalTimer = {
  timer1:0,
  timer2:0
};
export default {
  intervalTimer,
  bubbleFn:function (oc) {
    clearInterval(intervalTimer.timer1);
    clearInterval(intervalTimer.timer2);

    var arr = [];
    var ctx = oc.getContext("2d");
    //提供圆信息
    intervalTimer.timer1=setInterval(() => {
      //半径   4-6之间
      var radius = Math.round(Math.random() * 6) + 4;
      //初始x坐标
      var x = Math.round(Math.random() * (oc.width - 2 * radius)) + radius;
      var startX = x;
      //初始y坐标
      var y = oc.height - radius;
      var startY = y;
      var r = Math.round(Math.random() * 255);
      var g = Math.round(Math.random() * 255);
      var b = Math.round(Math.random() * 255);
      var a = 1;

      var deg = 0;
      //随机幅度
      var stepX = Math.round(Math.random() * 40) + 10;
      var stepY = Math.round(Math.random() * 40) + 10;
      arr.push({x, startX, y, startY, radius, r, g, b, a, stepX, stepY, deg})
    }, 500);


    //画圆
    intervalTimer.timer2=setInterval(() => {
      ctx.clearRect(0, 0, oc.width, oc.height);

      //动画&限制数组
      arr.forEach((item, index) => {
        item.deg += 5;
        item.x = item.startX - Math.sin(item.deg * Math.PI / 180) * item.stepX;
        item.y = item.startY - item.deg * Math.PI / 180 * item.stepY;
        if (item.y < -item.radius) {
          arr.splice(index, 1)
        }
      });
      arr.forEach((item) => {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = `rgba(${item.r},${item.g},${item.b},${item.a})`;
        ctx.arc(item.x, item.y, item.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();
      })
    }, 1000 / 60)
  }
}
