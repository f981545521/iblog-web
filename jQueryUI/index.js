$(function() {
	var tags = ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby"];
	$("#autocomplete").autocomplete({
		source: function(request, response) {
			var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
			response($.grep(tags, function(item) {
				return matcher.test(item);
			}));
		}
	});
});