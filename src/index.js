require('jquery')

var laucher = $('#laucher'),
	myModal = $('#myModal'),
	closePop = myModal.find('.close')
	console.log(closePop)

// event binder
laucher.on('click', function() {
	myModal.show()
})

closePop.on('click', function(e) {
	myModal.hide()	
})

