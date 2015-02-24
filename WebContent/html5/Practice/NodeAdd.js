function init(){
	var btnAdd=document.getElementById("btn-add");
	var btnDel=document.getElementById("btn-del");
	var imgAdd=document.getElementById("img-add");
	btnAdd.onclick=addTextNode;
	btnDel.onclick=deleteTextNode;
	imgAdd.onclick=addImg;
}
function addTextNode(){
	var txt=document.createTextNode("안녕하세요");
	var div1=document.getElementById("div1");
	div1.appendChild(txt);
}
function deleteTextNode(){
	var div1=document.getElementById("div1");
	var txt=div1.lastChild;
	div1.removeChild(txt);
}

window.onload=init;