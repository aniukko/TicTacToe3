import "./styles.css";

var counter = 0;

var id;
var timer;

var elem = document.querySelectorAll(".col");
for (var i = 0; i < elem.length; i++) {
	elem[i].addEventListener("click", function() {
		fill(this);
	});
}

function fill(cell) {
	barMove();
	if (counter % 2 === 0) {
		if (cell.innerHTML === "") {
			cell.innerHTML = "X";
			cell.style.backgroundColor = "rgb(124, 252, 0)";
			counter++;
			timeOut();
			winCheck();
			drawCheck();
		} else {
			alert("Pick a free cell");
		}
	} else {
		if (cell.innerHTML === "") {
			cell.innerHTML = "O";
			cell.style.backgroundColor = "rgb(250, 128, 114)";
			counter++;
			timeOut();
			winCheck();
			drawCheck();
		} else {
			alert("Pick a free cell");
		}
	}
}

function winCheck() {
	var winner = ["X", "O"];

	for (var i = 0; i < 2; i++) {
		var r0 = 0;
		var r1 = 0;
		var r2 = 0;
		var r3 = 0;
		var r4 = 0;
		var c0 = 0;
		var c1 = 0;
		var c2 = 0;
		var c3 = 0;
		var c4 = 0;
		var d1 = 0;
		var d2 = 0;

		for (var j = 0; j < 5; j++) {
			if (elem[j].innerHTML === winner[i]) {
				r0++;
				if (j === 0) {
					c0++;
					d1++;
				}
				if (j === 1) {
					c1++;
				}
				if (j === 2) {
					c2++;
				}
				if (j === 3) {
					c3++;
				}
				if (j === 4) {
					c4++;
					d2++;
				}
			}
			if (elem[j + 5].innerHTML === winner[i]) {
				r1++;
				if (j === 0) {
					c0++;
				}
				if (j === 1) {
					c1++;
					d1++;
				}
				if (j === 2) {
					c2++;
				}
				if (j === 3) {
					c3++;
					d2++;
				}
				if (j === 4) {
					c4++;
				}
			}
			if (elem[j + 10].innerHTML === winner[i]) {
				r2++;
				if (j === 0) {
					c0++;
				}
				if (j === 1) {
					c1++;
				}
				if (j === 2) {
					c2++;
					d1++;
					d2++;
				}
				if (j === 3) {
					c3++;
				}
				if (j === 4) {
					c4++;
				}
			}
			if (elem[j + 15].innerHTML === winner[i]) {
				r3++;
				if (j === 0) {
					c0++;
				}
				if (j === 1) {
					c1++;
					d2++;
				}
				if (j === 2) {
					c2++;
				}
				if (j === 3) {
					c3++;
					d1++;
				}
				if (j === 4) {
					c4++;
				}
			}
			if (elem[j + 20].innerHTML === winner[i]) {
				r4++;
				if (j === 0) {
					c0++;
					d2++;
				}
				if (j === 1) {
					c1++;
				}
				if (j === 2) {
					c2++;
				}
				if (j === 3) {
					c3++;
				}
				if (j === 4) {
					c4++;
					d1++;
				}
			}
		}
		if (
			r0 === 5 ||
			r1 === 5 ||
			r2 === 5 ||
			r3 === 5 ||
			r4 === 5 ||
			c0 === 5 ||
			c1 === 5 ||
			c2 === 5 ||
			c3 === 5 ||
			c4 === 5 ||
			d1 === 5 ||
			d2 === 5
		) {
			if (winner[i] === "X") {
				alert("Player 1 won!");
				empty();
				r0 = 0;
				r1 = 0;
				r2 = 0;
				r3 = 0;
				r4 = 0;
				c0 = 0;
				c1 = 0;
				c2 = 0;
				c3 = 0;
				c4 = 0;
				d1 = 0;
				d2 = 0;
				break;
			}
			if (winner[i] === "O") {
				alert("Player 2 won!");
				empty();
				r0 = 0;
				r1 = 0;
				r2 = 0;
				r3 = 0;
				r4 = 0;
				c0 = 0;
				c1 = 0;
				c2 = 0;
				c3 = 0;
				c4 = 0;
				d1 = 0;
				d2 = 0;
				break;
			}
		}
	}
}

function drawCheck() {
	var filled = 0;
	for (var i = 0; i < elem.length; i++) {
		if (elem[i].innerHTML === "X" || elem[i].innerHTML === "O") {
			filled++;
		}
	}
	if (filled === 25) {
		alert("Draw!");
		empty();
	}
}

function empty() {
	for (var i = 0; i < elem.length; i++) {
		elem[i].innerHTML = "";
		elem[i].style.backgroundColor = "rgb(255, 255, 255)";
	}
	clearTimeout(timer);
}

function barMove() {
	clearInterval(id);
	var barElem = document.querySelector(".determinate");
	var width = 0;
	id = setInterval(frame, 100);
	function frame() {
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			barElem.style.width = width + "%";
		}
	}
}

function timeOut() {
	clearTimeout(timer);
	timer = setTimeout(timeAlert, 10000);
	function timeAlert() {
		counter++;
		alert("You took too long");
	}
}
