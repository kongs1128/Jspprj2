/**
 * 
 */

function init()
{
	var btnOpenDoc=document.getElementById("btn-open-doc");
	btnOpenDoc.onclick=openDoc;
}

function openDoc()
{
	window.frames[0].location.href = "http://www.daum.net";
	//window.location.href = "http://www.daum.net";
}

window.onload = init;