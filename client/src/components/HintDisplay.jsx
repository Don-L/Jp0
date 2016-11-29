const React = require('react');


const HintDisplay = React.createClass({

  render: function () {

    return (
      <div className='HintDisplay'>
        <p className='HintDisplay'>{this.props.hintsList}</p>
      </div>
    );

  }


});

module.exports = HintDisplay;
