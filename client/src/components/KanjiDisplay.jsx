const React = require('react');


const KanjiDisplay = React.createClass({


  render: function () {

    console.log(this.props.kanjiChars);

    let clss = 'Kanji hrg' + this.props.kanjiChars.length;

    return (
      <div className='Kanji'>
        <p className={clss} onClick={this.showTableWithAllSelected}>{this.props.kanjiChars}</p>
      </div>
    );

  },


  showTableWithAllSelected: function () {
    this.props.showTableWithAllSelected();
  }


});

module.exports = KanjiDisplay;
