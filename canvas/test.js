/**
 * Author: sherry.lei
 * Date: 2014/11/18
 * Verson: 0.1
 */

//画直线
ctx.beginPath();
//起点
ctx.moveTo(110, 80);
//以（110,80）为起点，画条线到（130,30）
ctx.lineTo(130, 30);
//以（130,30）为起点，画条线到（115,30）
ctx.lineTo(115, 30);
//画矩形，(145,80)为起点，10为长，80为宽
ctx.rect(145, 80, 10, 80);
//平滑路径结合点
ctx.lineJoin = "round";

ctx.strokeStyle = "green";
//绘制
ctx.stroke();
ctx.fillStyle = "green";
//填充
ctx.fill();


//画曲线
//曲线起点
ctx.moveTo(10, 120);
//画曲线 （190,100）为控制点坐标，（230,10）为曲线终点  控制点相当于一个拉力
ctx.quadraticCurveTo(190, 100, 230, 10);

//导入图片
//（400,-400）为图像放置坐标 ，（120,120）为图像显示大小
ctx.drawImage(sun, 400, -400, 120, 120);
//(100,50)为剪裁坐标，(250,800)为剪裁宽高 ,（200,-280）为放置图像的坐标，（100,250）为图像显示宽高
ctx.drawImage(girl, 100, 50, 250, 800, 200, -280, 100, 250);