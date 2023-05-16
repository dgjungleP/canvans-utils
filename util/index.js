function drawPolygonPath(context, n, dx, dy, size) {
  context.beginPath();
  var degree = (2 * Math.PI) / n;

  for (let i = 0; i < n; i++) {
    var x = Math.cos(i * degree);
    var y = Math.sin(i * degree);
    context.lineTo(x * size + dx, y * size + dy);
  }
  context.closePath();
}

function drawStarPath(context, dx, dy, size) {
  context.beginPath();
  for (var i = 0; i < 5; i++) {
    context.lineTo(
      dx + Math.cos(((18 + i * 72) * Math.PI) / 180) * size,
      dy + -Math.sin(((18 + i * 72) * Math.PI) / 180) * size
    );
    context.lineTo(
      dx + (Math.cos(((54 + i * 72) * Math.PI) / 180) * size) / 2,
      dy + (-Math.sin(((54 + i * 72) * Math.PI) / 180) * size) / 2
    );
  }
  context.closePath();
}

function drawRoundedRectPath(context, dx, dy, width, height, r) {
  context.beginPath();
  context.moveTo(dx + r, dy);
  context.lineTo(dx + width - r, dy);
  context.arcTo(dx + width, dy, dx + width, dy + r, r);
  context.lineTo(dx + width, dy + height - r);
  context.arcTo(dx + width, dy + height, dx + width - r, dy + height, r);
  context.lineTo(dx + r, dy + height);
  context.arcTo(dx, dy + height, dx, dy + height - r, r);
  context.lineTo(dx, dy + r);
  context.arcTo(dx, dy, dx + r, dy, r);
  context.closePath();
}

function drawLeafPath(context, n, dx, dy, size, length) {
  context.beginPath();
  context.moveTo(dx, dy + size);
  var degree = (2 * Math.PI) / n;
  for (var i = 1; i < n + 1; i++) {
    //计算控制点的坐标
    var cx1 = Math.sin((i - 1) * degree) * length + dx;
    var cy1 = Math.cos((i - 1) * degree) * length + dy;
    var cx2 = Math.sin(i * degree) * length + dx;
    var cy2 = Math.cos(i * degree) * length + dy;
    //计算结束点的坐标
    var x = Math.sin(i * degree) * size + dx;
    var y = Math.cos(i * degree) * size + dy;
    context.bezierCurveTo(cx1, cy1, cx2, cy2, x, y);
  }
  context.closePath();
}
