$().ready(function() {

	var InputTextIsRed = !true;

	console.log("jQuery ready");

	$("button").click(function() {
		console.log("button clicked!");

		// $("#buttonOut").val("Button click worked!!!");

		var msg = $("#buttonOut").val();

		$("#valueIn").val("GregD:" + msg);

		if(InputTextIsRed) {
			$("#valueIn").css("color", "red");
		} else	{
			$("#valueIn").css("color", "green"); 
		}

		InputTextIsRed = !InputTextIsRed;

		$("ul").append("<li>" + msg + "</li>");

	});

});