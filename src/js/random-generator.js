export default class RandomGenerator {
	static randomInteger() {
		return Math.ceil(Math.random() * 1000);
	}

	static randomRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}