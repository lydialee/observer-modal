function initDialog(config) {
	require('jquery')

	var laucher = $('#laucher'),
		myModal = $('#myModal'),
		title = myModal.find('#modalTitle'),
		text = myModal.find('.text'),
		popup = myModal.find('.popup'),
		closeBtn = myModal.find('.close'),
		cancelBtn = myModal.find('.cancel'),
		confirmBtn = myModal.find('.confirm'),
		dialogConfig = {
			events: {}
		}

	// pull the config by user
	$.extend(true, dialogConfig, config)

	// fill the blank
	title.html(dialogConfig.title)
	text.html(dialogConfig.text)

	// event binder
	laucher.on('click', function() {
		myModal.show()
	})
	ShadowHide(popup, myModal)

	bindEventsToBtn(closeBtn, myModal)
	bindEventsToBtn(cancelBtn, myModal, dialogConfig.events.afterCancel)
	bindEventsToBtn(confirmBtn, myModal, dialogConfig.events.afterConfirm)

	function bindEventsToBtn(btn, dialog, fn) {
		$(btn).on('click', function(e) {
			var cb = fn || null
			myModal.trigger('beforeClick')
			$(dialog).hide()
			myModal.trigger('afterClick', fn)
		})
	}

	// 1、点击前
	myModal.on('beforeClick', function() {
		dialogConfig.events.beforeClose()

	})

	// 1、点击后
	myModal.on('afterClick', function(e, fn) {
		dialogConfig.events.afterClose()
		if (fn) {fn()}
	})



	// click the shadow section, hide the dialog
	function ShadowHide(section, dialog) {
		$(document).mouseup(function(e) {
			if (!section.is(e.target) && section.has(e.target).length === 0) {
				dialog.hide()
			}
		})
	}
}

module.exports = {
	initDialog: initDialog
}


