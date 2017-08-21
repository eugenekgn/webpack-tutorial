import '../style/main.scss';
import RandomGenerator from './random-generator';
import {
	secretButton,
	secretParagraph,
	outputParagraph,
	buttonRndInt,
	buttonRndRange
} from './dom-loader';

let showSecret = false;

const toggleSecretState = () => {
	showSecret = !showSecret;
	updateSecretParagraph();
	updateSecretButton();
}

const updateSecretButton = () => {
	if (showSecret) {
		secretButton.textContent = 'Hide the Secret';
	} else {
		secretButton.textContent = 'Show the Secret';
	}
}

const updateSecretParagraph = () => {
	if (showSecret) {
		secretParagraph.style.display = 'block';
	} else {
		secretParagraph.style.display = 'none';
	}
}

const outputRandomInt = () => {
	outputParagraph.textContent = RandomGenerator.randomInteger();
}

const outputRandomRange = () => {
	outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
}


buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);
secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();