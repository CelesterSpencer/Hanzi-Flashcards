class Word {
	constructor(hanzi, pinyin, tone) {
		this.hanzi = hanzi;
		this.pinyin = pinyin;
		this.tone = tone;
	}
	toString() {
		`Word: ${this.hanzi}, ${this.pinyin}: ${this.tone}`;
	}
}

class Card {
	constructor(hanzi, pinyin, translation, hint='', examples=[]) {
		this.hanzi = hanzi;
		this.pinyin = pinyin;
		this.translation = translation;
		this.hint = hint;
		this.examples = examples;
	}
	toString() {
		return `Card: ${this.hanzi} | ${this.pinyin} | ${this.translation} | ${this.hint} | ${this.examples}`;
	}
}

export {Word, Card};