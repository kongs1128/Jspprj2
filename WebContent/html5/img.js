function init(){
	var img1=document.getElementById("img1");
	img1.src="pic1.jpg";
}

function changeImage(){
	var img1=document.getElementById("img1");
	var txt1=document.getElementById("txt1");
	var txt2=document.getElementById("txt2");
	img1.src=txt1.value;
	img1.style.borderWidth=txt2.value;
}

window.onload=init;