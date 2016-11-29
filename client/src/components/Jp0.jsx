const React = require('react');
const Hints = require('./Hints.jsx');
// const Phonemes = require('./Phonemes.jsx');
// const Kana = require('./Kana.jsx');
// const Image = require('./Image.jsx');
// const Controller = require('./Controller.jsx');

const Words = require('../res/words.js');



const Jp0 = React.createClass({


  render: function () {

    // return <p>hello</p>;

    return (
      <div className='Jp0'>
        <Hints hiragana={this.state.words[this.state.currentIndex]['hiragana']} revealed={this.state.revealed}/>

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
      currentIndex: 0,
      revealed: []
    };
  },


  componentDidMount: function () {
    this.setState({words: Words});
  }










});

module.exports = Jp0;
