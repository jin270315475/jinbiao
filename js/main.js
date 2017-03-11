
	suy1.onmouseover=function(){
		suy1.className='animated jello';
	}
	suy1.onmouseout=function(){
		suy1.className='';
	}

	suy2.onmouseover=function(){
		suy2.className='animated jello';
	}
	suy2.onmouseout=function(){
		suy2.className='';
	}

	suy3.onmouseover=function(){
		suy3.className='animated jello';
	}
	suy3.onmouseout=function(){
		suy3.className='';
	}
	suy4.onmouseover=function(){
		suy4.className='animated jello';
	}
	suy4.onmouseout=function(){
		suy4.className='';
	}


+function(){
			//设置id为content1的div显示
			var div1=document.getElementById("content1");
			div1.style.display="block";
			//获得id为divs下的所有ul
			var divs=document.querySelectorAll(
				"#divs>ul"
			);
			//获得ul.option的所有li，绑定单击事件
			var lis=document.querySelectorAll("ul.option>li");
			for(var i=0;i<lis.length;i++){
				lis[i].onclick=toggle;
			}
			function toggle(){
				var li=this;
				//遍历divs中每个div，清除其display属性
				for(var i=0;i<divs.length;i++){
					divs[i].style.display="none"
				}
				//遍历lis中每个li，和当前li比较，获得当前li的下标
				for(var i=0;i<lis.length;i++){
					if(lis[i]==li) break;
				}//i就是li的下标
				//设置divs中i位置的div显示
				divs[i].style.display="block";
			}
}();

