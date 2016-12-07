const React = require('react');


const KanjiDisplay = React.createClass({

  render: function () {

    return (
      <div className='Kanji'>
        <p className='Kanji' onClick={this.showTableWithAllSelected}>{this.props.kanjiChars}</p>
      </div>
    );

  },


  showTableWithAllSelected: function () {
    this.props.showTableWithAllSelected();
  }


});

module.exports = KanjiDisplay;
