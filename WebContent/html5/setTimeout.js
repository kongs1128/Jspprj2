/**
 * 
 */
var count = 60;
var timer = null;
var win = null;
/*function init()
{
 	var lblcount=document.getElementById("btn-countdown");	()안에 input Id가 들어가야한다.
 	lblcount.onclick=btnSumClick;
}

function btnSumClick()
{
	alert("hello");
}
*/

function init()
{
	var btnCountdown=document.getElementById("btn-countdown");	/*()안에 input Id가 들어가야한다.*/
	btnCountdown.onclick = btnCountDownClick;
	
	var btnNewTab = document.getElementById("btn-new-tab");
	var btnNewWin = document.getElementById("btn-new-win");
	var btnCloseWin = document.getElementById("btn-close-win");
	btnNewTab.onclick = btnNewTabClick;
	btnNewWin.onclick = btnNewWinClick;
	btnCloseWin.onclick = btnCloseWin;
}

function countDown()
{
	var lblCount = document.getElementById("lbl-count");
	lblCount.innerText = --count;
	if(count>0)
		setTimeout(countDown, 1000);
}

function btnCountDownClick()
{
	if(timer == null)	// 계속 클릭했을때 빨라지게 하는걸 막아주기위해서!
	//setInterval(countDown, 1000); 1초마다 계속 호출!
		timer = setTimeout(countDown, 1000);
} 

/*function init(){
	var btnNewTab = document.getElementById("btn-new-tab");
	var btnNewWin = document.getElementById("btn-new-win");
	var btnCloseWin = document.getElementById("btn-close-win");
	btnNewTab.onclick = btnNewTabClick;
	btnNewWin.onclick = btnNewWinClick;
	btnCloseWin.onclick = btnCloswWin
}*/

function btnNewTabClick(){
	win = open("http://www.naver.com", "_blank");
}

function btnNewWinClick(){
	win = open("notice.html", "_blank", "width=500px, height=400px");
}

function btnCloseWin(){
	win.close();
}

window.onload = init;