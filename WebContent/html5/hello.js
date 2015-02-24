/**
 *	 
 *		function init()
		{
			btnPrint.onclick = printResult;	
		}
		
 *		function printResult()
		{
			var btnPrint = document.getElementById("btn-print");
			var x, y;
			x = prompt("x값을 입력하세요");
			y = prompt("y값을 입력하세요");
			x = parseInt(x);
			y = parseInt(y);
			btnPrint.value=x+y;
		}
		
		window.onload = init;
 */