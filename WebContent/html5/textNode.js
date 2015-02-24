function init(){
	var btnNode=document.getElementById("btn-node");
	var btnImg=document.getElementById("btn-img");
	var btnDel=document.getElementById("btn-del");
	var btnCopy=document.getElementById("btn-copy");
	btnNode.onclick=changeNode;
	btnImg.onclick=changeImg;
	btnDel.onclick=removeNode;
	btnCopy.onclick=copyNode;
}

function changeNode(){
	var txt=document.createTextNode("안녕하세요");
	var div1=document.getElementById("div1");
	div1.appendChild(txt);
}

function changeImg(){
	var img1=document.createElement("img");
	img1.src="pic1.jpg";
	var div1=document.getElementById("div1");
	div1.appendChild(img1);
}

function removeNode(){
	var div1=document.getElementById("div1");
	var txt=div1.lastChild;
	div1.removeChild(txt);
}

function copyNode(){
	var div1=document.getElementById("div1");
	var clone1=div1.cloneNode(true);
	var target=document.body;
	target.appendChild(clone1);
}


window.onload=init;