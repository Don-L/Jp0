const React = require('react');


const KanjiDisplay = React.createClass({

  render: function () {

    return (
      <div className='Kanji'>
        <h1 className='Kanji'>{this.props.kanjiChars}</h1>
      </div>
    );

  }


});

module.exports = KanjiDisplay;
