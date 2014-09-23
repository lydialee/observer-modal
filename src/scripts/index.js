require('jquery')

var laucher = $('#laucher'),
	myModal = $('#myModal')

// event binder
laucher.on('click', function() {
	myModal.show()
})

