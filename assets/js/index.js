const counterInput = document.querySelector('.counter-input');
const btnSubmit = document.querySelector('button.submit');
const checkbox = document.querySelector('.custom-input');
const submited = document.querySelector('footer #success');
const minusCounter = document.querySelector('#minus-counter');
const plusCounter = document.querySelector('#plus-counter');

btnSubmit.disabled = true;
btnSubmit.className = 'disabled';

function downCounter() {
	if (counterInput.value > 0) {
		counterInput.value--;
	}

	if (counterInput.value > 0) {
		btnSubmit.disabled = false;
		btnSubmit.className = null;
		btnSubmit.setAttribute('aria-disabled', 'false');
	} else {
		btnSubmit.disabled = true;
		btnSubmit.className = 'disabled';
		btnSubmit.setAttribute('aria-disabled', 'true');
	}
}

function upCounter() {
	counterInput.value++;

	if (counterInput.value > 0) {
		btnSubmit.disabled = false;
		btnSubmit.className = null;
		btnSubmit.setAttribute('aria-disabled', 'false');
	} else {
		btnSubmit.disabled = true;
		btnSubmit.className = 'disabled';
	}
}

function verifyCheckbox(checkbox) {
	for (let i = 0; checkbox.length; i++) {
		if (checkbox[i].checked === true) {
			return true;
		}
	}
}

function submit() {
	if (counterInput.value > 3 && verifyCheckbox(checkbox)) {
		submited.className = 'successText';
		submited.innerHTML = '<p>Formulário enviado com sucesso!</p>';
	} else {
		submited.className = 'errorText';
		submited.innerHTML =
			'<p>Ops! Algo está errado. Verique se algo está faltando.</p>';
	}
}

minusCounter.setAttribute('onclick', 'downCounter()');
plusCounter.setAttribute('onclick', 'upCounter()');
btnSubmit.setAttribute('onSubmit', 'submit()');
