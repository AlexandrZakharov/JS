class Calculator {

	constructor(arrayOfObjects) {
		this.arrayOfObjects = arrayOfObjects;
		let arrayResult = this.arrayResult;
		let arrayAdmission = this.arrayAdmission;
		let result = this.result;
	}

	selectShaftOption() {
		let shaftSize = document.querySelector('.shaft-size select').value;
		for(let i = 0; i < this.arrayOfObjects.length; i++) {   		// cycle arrayOfObjects
			
			if(this.arrayOfObjects[i].size == shaftSize) {
				this.arrayAdmission = this.arrayOfObjects[i].admission; // array admission
				this.arrayResult    = this.arrayOfObjects[i].result;       // array result
				this.initializeAdmission(this.arrayAdmission);
			}
		}
	}

	initializeAdmission(param) {
		let select = document.querySelector('.admission-size select');
		select.innerHTML = '';
		for(let i = 0; i < param.length; i++) {               		  // cycle admission
			let option = document.createElement('option');            // admission
			option.value       = param[i];
			option.textContent = param[i];
			select.appendChild(option);
			if(this.arrayAdmission[i] == document.querySelector('.admission-size select').value) {
				this.result = this.arrayResult[i];
			}
		}
	}

	selectAdmissionOption() {
		for(let i = 0; i < this.arrayAdmission.length; i++) {
			if(this.arrayAdmission[i] == document.querySelector('.admission-size select').value) {
				this.result = this.arrayResult[i];
			}
		}
	}

	pressButton() {
		let dmin = document.querySelector('.dmin');
		let dmax = document.querySelector('.dmax');
		if (dmin.innerHTML.length > 18 && dmax.innerHTML.length > 18) {
			dmin.innerHTML = dmin.innerHTML.slice(0, 18);
			dmax.innerHTML = dmin.innerHTML.slice(0, 18);
		}
		dmin.innerHTML += this.result[0];
		dmax.innerHTML += this.result[1];
	}
}

let calculator = new Calculator(arrayOfObjects);


