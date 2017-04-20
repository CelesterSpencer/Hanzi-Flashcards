import React, { Component } from 'react';
import './card.css';

class CharacterComp extends Component {
  constructor() {
    super();
    this.getToneColor = this.getToneColor.bind(this);
  }
  render() {
    return (
      <character>
        <hanzi style={{background: this.getToneColor().hanzi}}> {this.props.hanzi} </hanzi>
        <pinyin style={{background: this.getToneColor().pinyin}}> {this.props.pinyin} </pinyin>
      </character>
    );
  }
  getToneColor() {
    switch(this.props.tone) {
      case '1':
        return {
          hanzi: '#C0392B',
          pinyin:'#E74C3C'
        }
      case '2':
        return {
          hanzi: '#27AE60',
          pinyin:'#2ECC71'
        }
      case '3':
        return {
          hanzi: '#2980B9',
          pinyin:'#3498DB'
        }
      case '4':
        return {
          hanzi: '#8E44AD',
          pinyin:'#9B59B6'
        }
      default:
        return {
          hanzi: '#7F8C8D',
          pinyin:'#95A5A6'
        }
    }
  }
}

class WordComp extends Component {
  render() {
    return (
      	<word>
      		{ this.props.characters.map((word) =>
            	<CharacterComp hanzi={word.hanzi} pinyin={word.pinyin} tone={word.tone}/>
          	)}
    	</word>
    );
  }
}

class CardComp extends Component {
	render() {
		return (
			<card>
        		<WordComp characters={this.props.characters}/>
        		<translation>{this.props.translation}</translation>
      		</card>
		)
	}
}

export { CharacterComp, WordComp, CardComp };