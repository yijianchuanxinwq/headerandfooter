//var username='jack';
//var pwd="12345678";
////存储username到cookie中
////(键值对存储，可以存储好多个value值)
////只存储value值，只能存储一个值
//document.cookie="name="+username;
//document.cookie="pwd="+pwd;
////读取cookie中的值
//console.log(document.cookie);


//对比度问题
$('select').on('change',function(){
	var vv=$('select').val();
	console.log($("#select_id :selected").text());
	console.log(vv);
	document.cookie="color="+vv;
	color();
});
function color(){
	var v=(document.cookie).split("=")[1];
	console.log(v);
	switch (v){
		case '0':
			
			$('#color').attr('href','css/index.css');
			break;
		case '1':
			$('#color').attr('href','css/blackblue.css');
			break;
		case '2':
			$('#color').attr('href','css/blackwhite.css');
			break;
		case '3':
			$('#color').attr('href','css/yellowblue.css');
			break;
		case '4':
			$('#color').attr('href','css/whiteblue.css');
			break;
		case '5':
			$('#color').attr('href','css/blueyellow.css');
			break;
		case '6':
			$('#color').attr('href','css/whitered.css');
			break;
		default:
		
			break;
	}
}
window.onload=function(){
	color();
}
