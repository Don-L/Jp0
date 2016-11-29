const React = require('react');
const Hint = require('./Hint.jsx');


const HintDisplay = React.createClass({

  render: function () {

    let revealed = this.props.revealed;
    let hintsList = this.props.hintsList;


    let nodes = [];

    for (var i = 0; i < hintsList.length; i++) {
      nodes.push(<Hint hint={hintsList[i]} revealed={revealed} hintIndex={i}/>)
    }

    return (
      <div className='HintDisplay'>
        {nodes}
      </div>
    );

  }


});

module.exports = HintDisplay;
