
window.onload = () => {
	getForms();
}

function getForms() {
	let forms = document.getElementsByTagName("form");
	for (var i = 0; i < forms.length; i++) {
		let form = forms[i];
		clickEvent(form);

	}
	//console.log(forms);
	//console.log(clickEvent());
}


function clickEvent(form) {
	form.addEventListener("submit", function (evt) {
		evt.preventDefault();
		console.log("im clicked")
		//console.log(this.getElementsByTagName("input"));

		let inputs = this.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++) {
			let currentInput = inputs[i];
			console.log(currentInput)
		}
		required(form);
	});
}

/*function required(clickEvent, form) {

	let classes = currentInput.classList
	if (classes.contains("requires") == "") {
		console.log("failed")
	}
	if (classes.contains("numeric") !== [0 - 9]) {
		console.log("failed")
	}
	if (classes.contains("required_size") == "") {
		console.log("failed")
	}
	else {
		console.log("success")
	}
}*/
