/**
 *
 */
 function init()
{
 	var btnSum=document.getElementByld("btn-sum");
  	btnSum.onclick = btnSumClick;
}
  
 function btnSumClick()
 {
  	var txtX = document.getElementByld("txt-x");
  	var txtY = document.getElementByld("txt-y");
  	var txtSum = document.getElementByld("txt-sum");
  	var x = parseInt(txtX.value);
  	var y = parseInt(txtY.value);
	txtSum.value = x + y;
 }
 
 window.onload = init;