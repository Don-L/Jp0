const React = require('react');
const Words = require('../res/words.js');



const Jp0 = React.createClass({


  render: function () {

    return (
      <div className='Jp0'>
        <p>Hello</p>
      </div>
    );

  },


  getInitialState: function () {
    return {
      words: [{
        'name': 'init',
        'hiragana': ['I', 'N', 'I', 'T'],
        'kana': 'KANA',
        'imgsrc': 'res/Nightingale.JPG'
      }],
      currentIndex: 0
    };
  },


  componentDidMount: function () {
    this.setState({words: Words});
  }










});

module.exports = Jp0;
