$(function() {

	function postit() {
		$.ajax({
			type: "post",
			url: "http://127.0.0.1:8079/f6-insurance/insurance/employeed",
			async: true,
			data: {
				'id': 12,
				'name': '刘备',
				'age': 43
			},
			success: function(data) {
				console.log(data);
			}
		});
	}

});