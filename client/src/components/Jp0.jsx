const React = require('react');
const Hints = require('./Hints.jsx');
const Phonemes = require('./Phonemes.jsx');
const Kana = require('./Kana.jsx');
const Image = require('./Image.jsx');
const Controller = require('./Controller.jsx');

const Jp0 = React.createClass({

  render: function () {

    return (
      <div className='Jp0'>
        <Hints word={this.state.word}/>
        <Phonemes word={this.state.word}/>
        <Kana word={this.state.word}/>
        <Image word={this.state.word}/>
        <Controller />
      </div>
    );

  },


  getInitialState: function () {
    return {
      word: 'test'
    };
  },










});

module.exports = Jp0;
