jQuery(function() {
	// $("#new_button").hide();
	let my_switch = 0;
	// $('#new_button').click(function () {
	// 	$("#facts").text("Pumpkin spice has nothing to do with pumpkins.");
	// });

	$('#my_button').click(function () {
		if (my_switch == 0) {
			my_switch += 1;
			$(this).html('Click for Summer').removeClass('btn-primary').addClass('btn-success');
			$("#new_button").html('Winter Fun Facts').removeClass('btn-success').addClass('btn-primary');;
			$('#my_image').attr('src', 'images/winter.jpeg');
			$("body").css("background-color", "blue");
			$("h1").text("Happy Winter!");
			$('#new_button').click(function () {
				$("#facts").text("Snowmen have cold feet but warm hearts.");
			});
		} else if (my_switch == 1){
			my_switch += 1;
			$(this).html('Click for Spring').removeClass('btn-success').addClass('btn-primary');;
			$("#new_button").html('Summer Fun Facts').removeClass('btn-success').addClass('btn-primary');;
			$('#my_image').attr('src', 'images/summer.jpeg');
			$("h1").text("Happy Summer!");
			$("body").css("background-color", "orange");
			$('#new_button').click(function () {
				$("#facts").text("Feel the summer breeze.");
			});

		} else if (my_switch == 2){
			my_switch += 1;
			$(this).html('Click for Fall').removeClass('btn-success').addClass('btn-primary');;
			$("#new_button").html('Spring Fun Facts').removeClass('btn-success').addClass('btn-primary');;
			$('#my_image').attr('src', 'images/spring.jpeg');
			$("h1").text("Happy Spring!");
			$("body").css("background-color", "green");
			$('#new_button').click(function () {
				$("#facts").text("From sweet April showers spring May flowers.");
			});

		} else if (my_switch == 3){
			my_switch = 0;
			$(this).html('Click for Winter').removeClass('btn-success').addClass('btn-primary');;
			$("#new_button").html('Fall Fun Facts').removeClass('btn-success').addClass('btn-primary');;
			$('#my_image').attr('src', 'images/fall.jpg');
			$("h1").text("Happy Fall!");
			$("body").css("background-color", "red");
			$('#new_button').click(function () {
				$("#facts").text("Pumpkin spice has nothing to do with pumpkins.");
			});
		}

	});


});
