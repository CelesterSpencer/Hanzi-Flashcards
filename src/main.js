import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import {ChineseParser} from './parser';
import './style.css';

const CARD = {
  words: ChineseParser.parse(
    '哈罗.我很高兴跟你见面!',
    'ha1luo2. wo3 hen3 gao1xing4 gen1 ni3 jian4mian4!'
  ),
  translation: 'Hi. I am happy to meet you!'
}

class WordComponent extends React.Component {
  constructor() {
    super();
    this.toneColor = this.toneColor.bind(this);
  }
  render() {
    return (
      <word>
        <hanzi style={{background: this.toneColor().hanzi}}> {this.props.hanzi} </hanzi>
        <pinyin style={{background: this.toneColor().pinyin}}> {this.props.pinyin} </pinyin>
      </word>
    );
  }
  toneColor() {
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

class Debug extends React.Component {
  constructor() {
    super();
  }
 
  render() {
    return (
      <card>
        <words>
      	  {CARD.words.map((word) =>
            <WordComponent hanzi={word.hanzi} pinyin={word.pinyin} tone={word.tone}/>
          )}
        </words>
        <translation>{CARD.translation}</translation>
      </card>
    );
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Debug),
    document.getElementById('mount')
  );
});