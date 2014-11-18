/**
 * Author: sherry.lei
 * Date: 2014/11/18
 * Verson: 0.1
 */

//画直线
ctx.beginPath();
ctx.moveTo(110, 80);                 //起点
ctx.lineTo(130, 30);                 //以（110,80）为起点，画条线到（130,30）
ctx.lineTo(115, 30);                 //以（130,30）为起点，画条线到（115,30）
ctx.rect(145, 80, 10, 80);         //画矩形，(145,80)为起点，10为长，80为宽

ctx.lineJoin = "round";          //平滑路径结合点

ctx.strokeStyle = "green";
ctx.stroke();                    //绘制
ctx.fillStyle = "green";
ctx.fill();                          //填充


//画曲线
ctx.moveTo(10, 120);                        //曲线起点
ctx.quadraticCurveTo(190, 100, 230, 10);      //画曲线 （190,100）为控制点坐标，（230,10）为曲线终点  控制点相当于一个拉力

导入图片
ctx.drawImage(sun, 400, -400, 120, 120);  //（400,-400）为图像放置坐标 ，（120,120）为图像显示大小
ctx.drawImage(girl, 100, 50, 250, 800, 200, -280, 100, 250);  //(100,50)为剪裁坐标，(250,800)为剪裁宽高 ,（200,-280）为放置图像的坐标，（100,250）为图像显示宽高