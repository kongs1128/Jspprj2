/**
 * 
 */
function init()
{
	var btnResize=document.getElementById("btn-resize");
	var btnMove=document.getElementById("btn-move");
	var btnOpenerClose=document.getElementById("btn-opener-close");
	btnResize.onclick = btnResizeClick;
	btnMove.onclick = btnMoveClick;
	btnOpenerClose.onclick = btnOpenerCloseClick;
}

function btnResizeClick()
{	
	opener.resizeTo(100,100);
}

function btnMoveClick()
{
	
}

function btnOpenerCloseClick()
{
	opener.close();
}

window.onload = init;