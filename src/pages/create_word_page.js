import React, { Component } from 'react';
import { ChineseParser } from './../parser';
import { WordComp } from './../core/card';
import './create_word_page.css';


/*
const CARD = {
  words: ChineseParser.parse(
    '哈罗.我很高兴跟你见面!',
    'ha1luo2. wo3 hen3 gao1xing4 gen1 ni3 jian4mian4!'
  ),
  translation: 'Hi. I am happy to meet you!'
}
*/


class CreateWordPage extends Component {
	constructor(props) {
		super(props);

		/*
		 * set state
		 */
		this.state = { 
			hanziText: '妈妈',
			pinyinText: 'ma1 ma',
			translationText: 'mother' ,
			characters: []
		};

		/*
		 * register functions
		 */
		this.handleHanziInput 		= this.handleHanziInput.bind(this);
		this.handlePinyinInput 		= this.handlePinyinInput.bind(this);
		this.handleTranslationInput = this.handleTranslationInput.bind(this);
		this.processInput 			= this.processInput.bind(this);
		
	}
	render() {
		return (
			<page>
				<card_input>
					<table><tbody>
						<tr> 
							<td>
								Hanzi:
							</td>
							<td> 
								<input type='text' value={this.state.hanziText} onChange={this.handleHanziInput}/> 
							</td>
						</tr>
						<tr> 
							<td>
								Pinyin: 
							</td>
							<td> 
								<input type='text' value={this.state.pinyinText} onChange={this.handlePinyinInput}/> 
							</td>
						</tr>
						<tr> 
							<td>
								Translation: 
							</td>
							<td> 
								<input type='text' value={this.state.translationText} onChange={this.handleTranslationInput}/> 
							</td>
						</tr>
					</tbody></table>
					<input type='button' value='Add card' onClick={this.processInput}/>
					
					<debug_word>
					<label>Preview</label>
						<WordComp characters={this.state.characters}/>
					</debug_word>
				</card_input>
			</page>
		);
	}

	handleHanziInput(event)  		{ this.setState({ hanziText:  		event.target.value }); }
	handlePinyinInput(event) 		{ this.setState({ pinyinText: 		event.target.value }); }
	handleTranslationInput(event) 	{ this.setState({ translationText: 	event.target.value }); }
	processInput(event) {
		let characters = ChineseParser.parse(this.state.hanziText, this.state.pinyinText);
		console.log(characters);
		if (characters) this.setState({ characters: characters });
	}
}

export default CreateWordPage;