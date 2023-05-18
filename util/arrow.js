function Arrow(x, y, color, angle) {
  //箭头中心的横坐标，默认值为0
  this.x = x || 0;
  //箭头中心的纵坐标，默认值为0
  this.y = y || 0; //颜色，默认值为“#FF0099”
  this.color = color || "#FF0099";
  //旋转角度，默认值为0
  this.angle = angle || 0;
}
Arrow.prototype = {
  stroke: function (cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  },
  fill: function (cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.angle);
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.moveTo(-20, -10);
    cxt.lineTo(0, -10);
    cxt.lineTo(0, -20);
    cxt.lineTo(20, 0);
    cxt.lineTo(0, 20);
    cxt.lineTo(0, 10);
    cxt.lineTo(-20, 10);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  },
};

function Ball(x, y, radius, color) {
  //小球中心的横坐标，默认值为0
  this.x = x || 0; //小球中心的纵坐标，默认值为0
  this.y = y || 0; //小球半径，默认值为12
  this.radius = radius || 12; //小球颜色，默认值为“#6699FF”
  this.color = color || "#6699FF";
  this.scaleX = 1;
  this.scaleY = 1;
}
Ball.prototype = {
  //绘制描边小球
  stroke: function (cxt) {
    cxt.save();
    cxt.scale(this.scaleX, this.scaleY);
    cxt.strokeStyle = this.color;
    cxt.beginPath();
    cxt.arc(this.x, this.y, this.radius, 0, (360 * Math.PI) / 180, false);
    cxt.closePath();
    cxt.stroke();
    cxt.restore();
  }, //绘制填充小球
  fill: function (cxt) {
    cxt.save();
    cxt.translate(this.x, this.y);
    cxt.rotate(this.rotation);
    cxt.scale(this.scaleX, this.scaleY);
    cxt.fillStyle = this.color;
    cxt.beginPath();
    cxt.arc(0, 0, this.radius, 0, (360 * Math.PI) / 180, false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  },
};
