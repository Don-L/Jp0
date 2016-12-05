const React = require('react');


const KanjiDisplay = React.createClass({

  render: function () {

    return (
      <div className='Kanji'>
        <p className='Kanji'>{this.props.kanjiChars}</p>
      </div>
    );

  }


});

module.exports = KanjiDisplay;
