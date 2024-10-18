// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x =[700,0,800,100,200], y = [0,0,600,100,200], dx = [5,10,5,14,18], dy = [5,10,5,14,18], r = [30,30,30,50,20], m=[10,5,30,10,30],color = ["#f08080","#e9967a","#adff2f",'#87ceeb','#ff00ff'];

let N=0;
let msg =["最多就五個球球!!"]

function show()
    {
    	N=N+1;
		if(N>=5)  {
			document.getElementById("text").innerHTML = msg;
		}
   
   }
// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	for(let i=0;i<N ;i++){
		x[i] = x[i] + dx[i];
		y[i] = y[i] + dy[i];
	}
	for(let i=0;i<N ;i++){
		if(x[i]<0 || x[i]>canvas.width) dx[i] = -dx[i]; 
		if(y[i] < 0 || y[i] > canvas.height) dy[i] = -dy[i];
		drawBall(x[i], y[i], r[i], color[i]);
	}
	requestAnimationFrame(draw);
	
for(let i=0;i<N ;i++){
	for(let j=i+1;j<N ;j++){
		if((x[i]-x[j])*(x[i]-x[j]) + (y[i]-y[j])*(y[i]-y[j]) < (r[i]+r[j])*(r[i]+r[j])) {
			[[dx[i],dy[i]], [dx[j],dy[j]]] = [[dx[j],dy[j]], [dx[i],dy[i]]]
		}
	}
}
	
	
	
	
}
draw();



//let vcx=(m[i]*dx[i]+m[j]*dx[j])/m[i]+m[j];
			//let vcy=(m[i]*dy[i]+m[j]*dy[j])/m[i]+m[j];
			
			//dx[i]=2*vcx-dx[i];
			//dy[i]=2*vcy-dy[i];