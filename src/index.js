require('jquery')

var laucher = $('#laucher'),
	myModal = $('#myModal'),
	closePop = myModal.find('.close')

// event binder
laucher.on('click', function() {
	myModal.show()
})

closePop.on('click', function(e) {
	console.log(e)
	myModal.hide()	
})

