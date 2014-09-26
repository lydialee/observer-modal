var initDialog = require('observer-modal.js').initDialog;

initDialog({
	title: 'Modal title',
	text: 'Apple Watch Sport Sport 系列的表壳材料为轻巧的银色及深空灰色阳极氧化铝金属，强韧的 Ion-X 玻璃材质为显示屏提供保护。共有 5 款缤纷色彩任你选择。',
	events:{
		beforeClose: function() {
			alert('你确定啊？')
		},
		afterClose: function(){
			console.log('被你关闭了！')
		},
		afterCancel: function() {
			console.log('被你取消了！')
		},
		afterConfirm: function() {
			console.log('被你确认了！')
		}
	}
})