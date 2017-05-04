$(document).ready(function() {
	$('#Header .menu li').click(function() {
		var li = $(this).html();
		alert(li);
	});
	$('#LeftPanel').click(function() {
		$('#LeftPanel .menu li').slideToggle(2000);
	});
	var li = $('#Header .menu li').html();
	alert('Hello');
});