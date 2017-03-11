/*门牌进入*/
+function(){
	var inputGM=document.getElementById("inputGM");
	var inputs=document.getElementById("inputs");
	majs.onmouseover=function(){
		majs.className='main animated fadeInDown';
	}
	inputs.onclick=function(){
		majs.className='main animated slideOutUp';	
		setTimeout(time,2000)
		function time(){
		//document.getElementById('aHTML').href='******';
		//blog.majsdelete();//进入特效
		window.open("http://www.jinbiaode.com/main.html","_self");
		body.className='animated slideOutUp';
		}
	}

	inputGM.onclick=function(){
		majs.className='main animated wobble';
	}
	inputGM.onmouseout=function(){
		majs.className='main';
	};
}();

/*黑客幕布*/
         $(document).ready(function() {
                //设备宽度

                $("canvas").attr("width", $(window).get(0).innerWidth);
        		$("canvas").attr("height", $(window).get(0).innerHeight);
                 var width = q.width = $("canvas").width();
                var height = q.height= $("canvas").height();
                var yPositions = Array(300).join(0).split('');
                 var ctx = q.getContext('2d');
                var draw = function() {
                         ctx.fillStyle = 'rgba(0,0,0,.05)';
                         ctx.fillRect(0, 0, width, height);
                         ctx.fillStyle = 'green';/*代码颜色*/
                         ctx.font = '10pt Georgia';
                         yPositions.map(function(y, index) {
                                 text = String.fromCharCode(1e2 + Math.random() * 330);
                                 x = (index * 10) + 10;
                                 q.getContext('2d').fillText(text, x, y);
                                 if (y > Math.random() * 1e4) {
                                        yPositions[index] = 0;
                                     } else {
                                        yPositions[index] = y + 10;
                                     }
                            });
                     };
                RunMatrix();
               function RunMatrix() {
                        Game_Interval = setInterval(draw,60);
                     }
             });

/*对象*/
var blog={
	majs:null,
	body:null,
	sections:null,
	d1:null,
	d2:null,
	d3:null,
	majs:null,
	timer:null,

	/*构建*/
	majsdelete(){
		this.majs=document.getElementById("majs");
		this.majs.remove();
		this.sections();
		this.txt();//内容介绍

	},
	/*内容输出*/
	txt(){
	var index=0;
		var text = "*/组建加载启动......<br><br><br>非常感谢您的到来，欢迎进入我的博客。博客将由CSS+原生JS自动组建而成，请您稍后等待，我将为您展示我的个人介绍，希望您能耐心看完，马上开始，不要走开。。。。。。<br><br><br>";
		function type(){
			document.getElementById("d3").innerHTML = text.substring(0,index++);
			if(text.length-1==index){
				clearInterval(timer);
			}
		}
		var timer=setInterval(type, 200);
	},
	/*创建section*/
	sections(){
		this.body=document.getElementsByTagName("body")[0];
		this.sections=document.createElement("section");
		this.body.appendChild(this.sections);
		this.d3();
		this.timer=setTimeout(this.d2.bind(this),10000);
		this.timer=setTimeout(this.d1.bind(this),15000);
	},
	/*创建D3*/
	d3(){
		var divs=document.createElement("div");
		divs.innerHTML="123";
		divs.id="d3";
		this.sections.appendChild(divs);
		$d3=$("#d3");
		$("#d3").animate({
				width:"100%",
				border:"1px solid #ccc",
		},1000,function(){
				$(this).css({
				overflow:"auto",
				background:"rgb(48,48,48)",
				border:"1px solid #ccc",})
				}).animate({
				padding:"10px 10px 20px",
		},1000,function(){
				$(this).css({
				marginTop:"10px",
				boxShadow:"-4px 4px 2px 0 rgba(0,0,0,0.3)",})
				}).animate({
				margin:"10px",
		},1000).animate({
				outline:"0",
		},1000).animate({
				fontFamily:"monospace",
		},1000).animate({
				fontSize:"14px",
		},1000).animate({
				width:"49%",
				height:"20%",
		},1000,function(){
				$(this).css({
				marginTop:"10px",
				transformOrigin:"left",
				transform:"rotateY(10deg)",})
				});
	},
	/*创建D2*/
	d2(){
		var d3=document.getElementById("d3");
		var divs=document.createElement("div");
		divs.innerHTML="123";
		divs.id="d2";
		this.sections.insertBefore(divs,d3);
		$d2=$("#d2");
		$("#d2").animate({
				width:"100%",
				border:"1px solid #ccc",
		},1000,function(){
				$(this).css({
				overflow:"auto",
				background:"rgb(48,48,48)",
				border:"1px solid #ccc",})
				}).animate({
				padding:"10px 10px 20px",
		},1000,function(){
				$(this).css({
				marginTop:"10px",
				boxShadow:"-4px 4px 2px 0 rgba(0,0,0,0.3)",})
				}).animate({
				margin:"10px",
		},1000).animate({
				outline:"0",
		},1000).animate({
				fontFamily:"monospace",
		},1000).animate({
				fontSize:"14px",
		},1000).animate({
				width:"49%",
				height:"69%",
		},1000,function(){
				$(this).css({
				transformOrigin:"left",
				transform:"rotateY(10deg)",
				transform:"rotateX(0deg) rotateY(190deg) rotateZ(180deg)",
				transform:"rotateY(10deg)",})
				});
	},
	/*创建D1*/
	d1(){
		var d2=document.getElementById("d2");
		var divs=document.createElement("div");
		divs.innerHTML="123";
		divs.id="d1";
		this.sections.insertBefore(divs,d2);
		$d1=$("#d1");
		$("#d1").animate({
				width:"100%",
				border:"1px solid #ccc",
		},1000,function(){
				$(this).css({
				overflow:"auto",
				background:"rgb(48,48,48)",
				border:"1px solid #ccc",})
				}).animate({
				padding:"10px 10px 20px",
		},1000,function(){
				$(this).css({
				marginTop:"10px",
				boxShadow:"-4px 4px 2px 0 rgba(0,0,0,0.3)",})
				}).animate({
				margin:"10px",
		},1000).animate({
				outline:"0",
		},1000).animate({
				fontFamily:"monospace",
		},1000).animate({
				fontSize:"14px",
		},1000).animate({
					width:"49%",
				height:"94.5%",
		},1000,function(){
				$(this).css({
				transformOrigin:"right",
				transform:"translateX(98.5%) rotateY(-10deg)",
				position:"absolute",})
				});
	},
};
