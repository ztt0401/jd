/*
* @Author: Administrator
* @Date:   2016-10-28 17:27:37
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-29 10:54:28
*/


(function  () {
	// console.log($('.delete_box'))
	 var  deleteTop;
	$('.delete_box').on('tap',function(){

		$('.alert').css({'display':'block'});

		var top=(window.innerHeight-$('.alert-box').height())/2;
		$('.alert-box').css({
			transition:'all 1s ease 0s',
			transform:'translateY('+top+')px'
		})
		deleteTop=$(this).find('.delete_top');
		deleteTop.css({
			transition:'all  1s ease 0s',
			transform:'translateY(-5px) rotate(-45deg)'
		})	
	})

	// 点击按钮,隐藏弹出框
	$('.alert_box .submit').on('tap',function(){
			close()
			console.log('确定')
	})
	$('.alert_box .cancle').on('tap',function(){
			close()
	})
	function  close(){
		$('.alert_box ').css({'display':'none'});
		deleteTop.css({
			transition:'all  1s ease 0s',
			transform:'translateY(0px) rotate(0deg)'
		})	
		$('.alert-box').css({
			transition:'all 1s ease 0s',
			transform:'translateY(0px)'
		})
	}

	// 选中
	$('.checkbox').on('tap',function(){
		if ($(this).attr('checked')) {
			$(this).removeAttr('checked')
		}else{
			$(this).attr('checked','1')
		}
	})
})()