const React = require('react');
const Hint = require('./Hint.jsx');


const HintDisplay = React.createClass({

  render: function () {

    let revealed = this.props.revealed;
    let hintsList = this.props.hintsList;

    let nodes = [];

    for (var i = 0; i < hintsList.length; i++) {
      nodes.push(<Hint key={i} hint={hintsList[i]} changeHirCharColour={this.props.changeHirCharColour} hintClicked={this.props.hintClicked} revealed={revealed} hintIndex={i} highlightSet={this.props.highlightSet}/>)
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

  }


});

module.exports = HintDisplay;
