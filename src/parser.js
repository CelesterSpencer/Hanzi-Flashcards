import * as peg from 'pegjs';
import ChunkGrammar from './grammars/chunk';
import PinyinGrammar from './grammars/pinyin';
import HanziGrammar from './grammars/hanzi';
import {Word} from './data';

console.log(ChunkGrammar);

class ChunkParserClass {
	constructor() {
		this.chunkParser  = peg.generate(ChunkGrammar);
		this.pinyinParser = peg.generate(PinyinGrammar);
		this.hanziParser  = peg.generate(HanziGrammar);
	}
	parse(hanziInput, pinyinInput) {
		try {
			var words = [];

			let hanziChunks = this.hanziParser.parse(hanziInput);
			let pinyinChunks = this.chunkParser.parse(pinyinInput);
			console.log(hanziChunks);
			console.log(pinyinChunks);
			if(hanziChunks.length != pinyinChunks.length) throw 'Length of hanzi and pinyin chunks do not match';
			for(var i = 0; i < hanziChunks.length; i++) {
				if(hanziChunks[i].type != pinyinChunks[i].type) throw 'Types of hanzi and pinyin chunk do not match';
				let hanzi = hanziChunks[i];
				let pinyin = (pinyinChunks[i].type === 'word') ? this.pinyinParser.parse(pinyinChunks[i].content) : {chars: pinyinChunks[i].content, tone: 5};
				console.log(hanzi);
				console.log(pinyin);
				words.push(new Word(hanzi.content, pinyin.chars, pinyin.tone));
			}
			console.log(words);
			return words;
		} catch (e) {
			if(e instanceof peg.parser.SyntaxError) {
				console.log(e);
			} else {
				console.error(`Error thrown while parsing ${hanziInput}, ${pinyinInput}.`);
				console.error(`what: ${e}`);
			}
			return [];
		}
	}
}

let ChineseParser = new ChunkParserClass();
export {ChineseParser};