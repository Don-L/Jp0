const React = require('react');
const HirChar = require('./HirChar.jsx');


const HiraganaDisplay = React.createClass({

  render: function () {

    let nodes = [];

    for (let i = 0; i < this.props.hirChars.length; i++) {
      let highlightStatus = this.getHighlightStatus(i);
      nodes.push(
        <HirChar
          key={i}
          hirIndex={i}
          id={'HirCharId' + i}
          nextUp={this.props.nextUp}
          showTableWithSelected={this.props.showTableWithSelected}
          char={this.props.hirChars[i]}
          highlightStatus={highlightStatus}
          setHighlightGroup={this.props.setHighlightGroup}/>
      );
    };

    var flattened = this.props.hirChars.reduce(function(a, b) {
      return a + b;
    }, []);

    let clss = 'HiraganaDisplay' + ' hrg' + flattened.length;

    return (
      <div className={clss}>
        {nodes}
      </div>
    );

  },

  getHighlightStatus: function (i) {
    let highlightStatus;
    if (this.props.highlightGroup != i && this.props.highlightGroup != 'all') {
      highlightStatus = false;
    } else {
      highlightStatus = true;
    }
    return highlightStatus;
  }


});

module.exports = HiraganaDisplay;
