// window.onload=function(){
	function bannernl(banner,dots,imgs,leftBtn,rightBtn,widths,active,second){
		// let banner = document.querySelector(".banner");
		// let dots = document.querySelectorAll(".dot");
		// let imgs = document.querySelectorAll(".banner img");
		// let leftBtn = document.querySelector(".left-btn");
		// let rightBtn = document.querySelector(".right-btn");
		// let widths = parseInt(getComputedStyle(banner,null).width);
		// let t;
		let now = 0;
		let next = 0;
		let flag = true;
		
	dots[0].classList.add("active");
	// animate(imgs[0],{left:0});
	imgs[0].style.left = 0;
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover = function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove("active");
				imgs[j].style.left = -widths+"px";
			}
			dots[i].classList.add("active");
			imgs[i].style.left = 0;
		}
	}

	// 自动轮播
	// t = setInterval(move,second);
	function move(){
		next++;
		if(next == imgs.length){
			next = 0;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = widths + "px";
		animate(imgs[now],{left:-widths},function(){
			for(let i=0;i<dots.length;i++){
				dots[i].classList.remove("active");
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("active");
			flag = true;
		});
		now = next;
	}

	// banner.onmouseover = function(){
	// 	clearInterval(t);
	// }
	// banner.onmouseout = function(){
	// 	t = setInterval(move,second);
	// }

	function moveL(){
		if(!flag){
			return;
		}
		flag = false;
		next--;
		if(next == -1){
			next = imgs.length-1;
		}
		imgs[now].style.left = 0;
		imgs[next].style.left = -widths + "px";
		animate(imgs[now],{left:widths},function(){
			for(let i=0;i<dots.length;i++){
				dots[i].classList.remove("active");
				flag = true;
			}
		});
		animate(imgs[next],{left:0},function(){
			dots[next].classList.add("active");
			flag = true;
		});
		now = next;
	}
	rightBtn.onclick = function(){
		if(!flag){
			return;
		}
		flag = false;
		move();
	}
	leftBtn.onclick = function(){
		moveL();
	}
	// window.onblur = function(){
	// 	clearInterval(t);
	// }
	// window.onfocus = function(){
	// 	t = setInterval(move, second);
	// }
}
// }