/*
* @Author: Administrator
* @Date:   2016-10-25 17:44:18
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-28 17:16:53
*/


(function  () {

	var seckill_time=document.getElementsByClassName('seckill_time')[0];
	var num=seckill_time.getElementsByClassName('num');
	var times=9*60*60;

	setInterval(function(){
		times--;
		var h=Math.floor(times/60/60);
		var m=Math.floor(times/60%60);
		var s=Math.floor(times%60);

		num[0].innerHTML  =	h>10?Math.floor(h/10):0;
		num[1].innerHTML  =	h%10;

		num[2].innerHTML  = m>10?Math.floor(m/10):0;
		num[3].innerHTML  = m%10;

		num[4].innerHTML  =s>10?Math.floor(s/10):0;
		num[5].innerHTML  =s%10;
	},1000)
	window.mySwipe = new Swipe(document.getElementById('slider'), {
	  // startSlide: 2,
	  // speed: 400,
	  auto: 3000,
	  continuous: true,
	  disableScroll: false,
	  stopPropagation: false,
	  callback: function(index, elem) {},
	  transitionEnd: function(index, elem) {}
	});
})()