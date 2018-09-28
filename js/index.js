window.onload=function(){
	// 顶部导航栏中购物车的移入移出效果
	let cartmenu=document.querySelectorAll('.cartmenu')[0];
	let topbarcart=document.querySelectorAll('.topbar-cart')[0];
	let topbarcart1=document.querySelectorAll('.topbar-cart > a')[0];
	let topbarcart2=document.querySelectorAll('.topbar-cart > i')[0];
	// console.log(cartmenu);
	// console.log(topbarcart);
	topbarcart.onmouseover=function(){
		cartmenu.style.display='block';
		topbarcart1.style.color='#ff6700';
		topbarcart2.style.color='#ff6700';
		topbarcart.style.background='#fff';
	}
	topbarcart.onmouseout=function(){
		cartmenu.style.display='none';
		topbarcart1.style.color='#b0b0b0';
		topbarcart2.style.color='#b0b0b0';
		topbarcart.style.background='#333';
	}
	// 顶部导航栏中的移入移出效果
	let topbar=document.querySelectorAll('.topbar-nav > a');
	let topbarinfo=document.querySelectorAll('.topbar-info > a');
	// console.log(topbar);
	for(let i=0;i<topbar.length;i++){
		topbar[i].onmouseover=function(){
			topbar[i].style.color='#fff';
		}
		topbar[i].onmouseout=function(){
			topbar[i].style.color='#b0b0b0';
		}
	}
	// for(let i=0;i<topbar.length;i++){
	// 	topbarinfo[i].onmouseover=function(){
	// 		topbarinfo[i].style.color='#fff';
	// 	}
	// 	topbarinfo[i].onmouseout=function(){
	// 		topbarinfo[i].style.color='#b0b0b0';
	// 	}
	// }
	// 中间导航栏选项卡开始
	let headernavmenu=document.querySelectorAll('.header-nav-menu')[0];
	let firstli=document.querySelectorAll('.first-li');
	let firstliinfo=document.querySelectorAll('.first-li-info');
	for(let i=0;i<firstli.length;i++){
		firstli[i].onmouseover=function(){
			headernavmenu.style.display='block';
		}
		firstli[i].onmouseout=function(){
			headernavmenu.style.display='none';
		}
	}
	for(let i=0;i<firstliinfo.length;i++){
		firstliinfo[i].onmouseover=function(){
			firstliinfo[i].style.color='#ff6700';
		}
		firstliinfo[i].onmouseout=function(){
			firstliinfo[i].style.color='#333';
		}
	}

	// let sitecategorylist=document.querySelectorAll('.site-category-list > li');
	// let select=document.querySelectorAll('.select')[0];
	// // console.log(sitecategorylist);
	// for(let i=0;i<sitecategorylist.length;i++){
	// 	sitecategorylist[i].onmouseover=function(){
	// 		sitecategorylist[i].style.background="#ff6700";
	// 		select.style.display="block";
	// 	}
	// 	sitecategorylist[i].onmouseout=function(){
	// 		sitecategorylist[i].style.background="#4e5a62";
	// 		select.style.display="none";
	// 	}
	// }
	// 轮播图开始
	let dots=document.querySelectorAll('.dot');
	let imgs=document.querySelectorAll('.banner1 .banner-img1');
    let banner=document.querySelectorAll('.banner1')[0];
    let lbtn=document.querySelectorAll('.left-btn')[0];
    let rbtn=document.querySelectorAll('.right-btn')[0];
    banner_oi(dots,imgs,banner,lbtn,rbtn,"active",2000);
    //轮播图的选项卡
    let leftlist=document.querySelectorAll(".left-list1 ul .listss .title1");
    let seclectA=document.querySelectorAll(".seclectA");
    console.log(leftlist);
    console.log(seclectA);
    for(let i=0;i<seclectA.length;i++){
        leftlist[i].onmouseover=function(){
            for(let j=0;j<seclectA.length;j++){
                seclectA[j].style.opacity="0";
            } 
            seclectA[i].style.opacity="1";
        }
        leftlist[i].onmouseout=function(){
            for(let m=0;m<seclectA.length;m++){
                seclectA[m].style.opacity="0";
            } 
        }
    }


    // 内容部分的轮播图实现
    let banner1 = document.querySelector(".box-hot1-list-first  ul");
	let dots1 = document.querySelectorAll(".bannercircle span");
	let imgs1 = document.querySelectorAll(".box-hot1-list-first ul li");
	let leftBtn = document.querySelector(".left-btn1");
	let rightBtn = document.querySelector(".right-btn1");
	let widths = parseInt(getComputedStyle(banner1,null).width);

	let banner2 = document.querySelector(".box-hot1-list-first1  ul");
	let dots2 = document.querySelectorAll(".box-hot1-list-first1 .bannercircle span");
	let imgs2 = document.querySelectorAll(".box-hot1-list-first1 ul li");
	let leftBtn1 = document.querySelector(".box-hot1-list-first1 .left-btn1");
	let rightBtn1 = document.querySelector(".box-hot1-list-first1 .right-btn1");
	let widths1 = parseInt(getComputedStyle(banner2,null).width);

	let banner3 = document.querySelector(".box-hot1-list-first2  ul");
	let dots3 = document.querySelectorAll(".box-hot1-list-first2 .bannercircle span");
	let imgs3 = document.querySelectorAll(".box-hot1-list-first2 ul li");
	let leftBtn2 = document.querySelector(".box-hot1-list-first2 .left-btn1");
	let rightBtn2 = document.querySelector(".box-hot1-list-first2 .right-btn1");
	let widths2 = parseInt(getComputedStyle(banner3,null).width);

	let banner4 = document.querySelector(".box-hot1-list-first3  ul");
	let dots4 = document.querySelectorAll(".box-hot1-list-first3 .bannercircle span");
	let imgs4 = document.querySelectorAll(".box-hot1-list-first3 ul li");
	let leftBtn3 = document.querySelector(".box-hot1-list-first3 .left-btn1");
	let rightBtn3 = document.querySelector(".box-hot1-list-first3 .right-btn1");
	let widths3 = parseInt(getComputedStyle(banner4,null).width);

	console.log(banner1);
	console.log(dots1);
	console.log(imgs1);
	console.log(leftBtn);
	console.log(rightBtn);
	console.log(widths);
	bannernl(banner1,dots1,imgs1,leftBtn,rightBtn,widths,"hot",1500);
	bannernl(banner2,dots2,imgs2,leftBtn1,rightBtn1,widths1,"hot",1500);
	bannernl(banner3,dots3,imgs3,leftBtn2,rightBtn2,widths2,"hot",1500);
	bannernl(banner4,dots4,imgs4,leftBtn3,rightBtn3,widths3,"hot",1500);

	//为你推荐的水平轮播图开始
	//1,获取元素
	let leftbtn=document.querySelectorAll(".lbtn")[0];
	let rightbtn=document.querySelectorAll(".rbtn")[0];
	let con=document.querySelectorAll(".box-bd10 ul")[0];
	console.log(con);
	let widths0=parseInt(getComputedStyle(con,null).width)/4;
	console.log(widths0);
	// let widths = parseInt(getComputedStyle(banner,null).width);
	console.log(leftbtn);
	console.log(rightbtn);
	// console.log(widths);
	//2,点击右箭头
	let num=0;
	rightbtn.onclick=function(){
		leftbtn.style.background="#f5f5f5";
		num++;
		if(num==4){
			rightbtn.style.background="#ff6700";
			num=3;
			return;
		}
		con.style.transform="translateX("+(-widths0*num)+"px)";
	}
	//3,点击左箭头
	leftbtn.onclick=function(){
		rightbtn.style.background="#f5f5f5";
		num--;
		if(num==-1){
			leftbtn.style.background="#ff6700";
			num=0;
			return;
		}
		con.style.transform="translateX("+(-widths0*num)+"px)";
	}


	// 闪购的水平轮播图开始
	//1,获取元素
	let leftbtn1=document.querySelectorAll(".morepre")[0];
	let rightbtn1=document.querySelectorAll(".morenext")[0];
	let cons=document.querySelectorAll(".wrapper ul")[0];
	console.log(cons);
	let widths01=parseInt(getComputedStyle(cons,null).width)/2;
	console.log(widths01);
	// let widths = parseInt(getComputedStyle(banner,null).width);
	console.log(leftbtn1);
	console.log(rightbtn1);
	// console.log(widths);
	//2,点击右箭头
	let num1=0;
	rightbtn1.onclick=function(){
		leftbtn1.style.background="#f5f5f5";
		num1++;
		if(num1==2){
			rightbtn1.style.background="#ff6700";
			num1=1;
			return;
		}
		cons.style.transform="translateX("+(-widths01*num1)+"px)";
	}
	//3,点击左箭头
	leftbtn1.onclick=function(){
		rightbtn1.style.background="#f5f5f5";
		num1--;
		if(num1==-1){
			leftbtn1.style.background="#ff6700";
			num1=0;
			return;
		}
		cons.style.transform="translateX("+(-widths01*num1)+"px)";
	}

	//家电选项卡开始
	let resa=document.querySelectorAll(".resa");
	let rmselect=document.querySelectorAll(".rm-select");
	console.log(resa,rmselect);
	 resa[0].style.color="#ff6700";
	 resa[0].style.borderBottom="2px solid #ff6700";
	 rmselect[0].style.display="block";
	for(let i=0;i<resa.length;i++){
		resa[i].onmouseover=function(){
			for(j=0;j<resa.length;j++){
				resa[j].style.color="#333";
				resa[j].style.borderBottom="none";
				rmselect[j].style.display="none";
			}
			resa[i].style.color="#ff6700";
			resa[i].style.borderBottom="2px solid #ff6700";
			rmselect[i].style.display="block";
		}
	}


	let resax=document.querySelectorAll(".resax");
	let rmselectx=document.querySelectorAll(".rm-selectx");
	console.log(resax,rmselectx);
	 resax[0].style.color="#ff6700";
	 resax[0].style.borderBottom="2px solid #ff6700";
	 rmselectx[0].style.display="block";
	 for(let i=0;i<resax.length;i++){
		resax[i].onmouseover=function(){
			for(j=0;j<resax.length;j++){
				resax[j].style.color="#333";
				resax[j].style.borderBottom="none";
				rmselectx[j].style.display="none";
			}
			resax[i].style.color="#ff6700";
			resax[i].style.borderBottom="2px solid #ff6700";
			rmselectx[i].style.display="block";
		}
	}
}
