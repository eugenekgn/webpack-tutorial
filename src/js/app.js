import '../css/main.css';
import '../css/input-elements.css'
import { secretButton, secretParagraph } from './dom-loader';

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


secretButton.addEventListener('click', toggleSecretState);
updateSecretParagraph();