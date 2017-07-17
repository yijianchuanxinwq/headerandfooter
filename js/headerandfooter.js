//创建头部和尾部
$('body').append("<div class='header'></div><div class='footer'></div>");
//头部样式
$('.header').append("<div class='headerL'></div><div class='headerR'></div>");
//头部左部分
$('.headerL').append('<h3>中国盲文数字平台</h3><h3>Chinese Braille digital platform</h3>');
$('.headerR').append('<select name="" id="select_id">'
			+'<option value="0">取消对比</option>'
			+'<option value="1">黑蓝对比</option>'
			+'<option value="2">黑白对比</option>'
			+'<option value="3">黄蓝对比</option>'
			+'<option value="4">白蓝对比</option>'
			+'<option value="5">蓝黄对比</option>'
			+'<option value="6">白红对比</option>'
		+'</select>');
//尾部样式
$('.footer').append("<p class='introduce'><a href='http://www.zgmx.org.cn/html/Index.html'>中国盲人协会</a> © 版权所有 2017 </p><p class='relation'>技术支持: 兰州大学·中国盲人协会 信息无障碍联合实验室 | 联系我们</p>");
