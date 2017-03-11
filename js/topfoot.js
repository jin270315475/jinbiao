
+function(){
	var navD=document.getElementById("navD");
	var x=document.getElementById("x");
	var navcolor=document.getElementById("navcolor");
	var key;
	navD.onclick=function(){
		if(key!=1){
			navcolor.style.display="block";
			navcolor.className="animated bounceInDown";
			key=1;
		}else{
			navcolor.style.display="none";
			navcolor.className="";
			navcolor.className="animated zoomOutUp";
			key=0;
		}
	}
	x.onclick=function(){
		navcolor.style.display="none";
	}
}();