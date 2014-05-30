$(document).ready(function(){
	var text = 0;
	for (var i=1;i<=100;i++) {
		//If divisible by 3 and 5 (aka 15), use "fizz buzz"
		if (i%15==0) {
			text="fizz buzz";
		}
		//If divisible by 3, use "fizz"
		else if (i%3==0) {
			text="fizz";
		}
		//If divisible by 5, use "buzz"
		else if (i%5==0) {
			text="buzz";
		}
		//Else use the row number
		else {
			text=i;
		}
		//Find the last p in the body and insert a new p with text after it.
		$("body").find("p").last().after("<p></p>").text(text);
	}
})