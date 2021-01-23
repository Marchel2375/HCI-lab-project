var container=document.getElementById("card-content-container");


if(window.innerWidth>800){
	var height=window.innerHeight-265;
	height=height+"px";
	container.style.height=height;
}
else{
	container.style.height="auto";
}

window.addEventListener("resize", function(event) {
	if(window.innerWidth>800){
	    height=window.innerHeight-265;
		height=height+"px";
		container.style.height=height;

	}
	else{
		container.style.height="auto";
	}
})