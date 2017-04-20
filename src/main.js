import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CreateWordPage from './pages/create_word_page';



/**
 * App class
 */
class App extends Component {
  render() {
    return (
      <CreateWordPage/>
    );
  }
}



/**
 * Main entry point of react
 */
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('mount')
  );
});