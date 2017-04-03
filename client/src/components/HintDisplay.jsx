const React = require('react');
const Hint = require('./Hint.jsx');


const HintDisplay = React.createClass({

  render: function () {

    let revealed = this.props.revealed;
    let hintsList = this.props.hintsList;

    let nodes = [];

    for (var i = 0; i < hintsList.length; i++) {
      let highlightStatus = this.getHighlightStatus(i);
      nodes.push(
        <Hint
          key={i}
          hint={hintsList[i]}
          changeHirCharColour={this.props.changeHirCharColour}
          hintClicked={this.props.hintClicked}
          revealed={revealed}
          hintIndex={i}
          highlightStatus={highlightStatus}
          setHighlightGroup={this.props.setHighlightGroup}/>
      );
    }

    if (this.props.tableDisplayed == false) {
      return (
        <div className='HintDisplay'>
          {nodes}
        </div>
      );
    } else {
      return <div className='HintDisplay'/>
    }

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

module.exports = HintDisplay;
