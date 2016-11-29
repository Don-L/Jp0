const React = require('react');
const Char = require('./Char.jsx');

const Phonemes = React.createClass({

  render: function () {

    let word = this.props.word;
    let nodes = [];

    for (let i = 0; i < word.length; i++) {
      nodes.push(<Char key={i} char={word[i]} />);
    }

    return (
      <div className='phonemes'>
        {nodes}
      </div>
    );

  }










});

module.exports = Phonemes;
