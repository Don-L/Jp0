const React = require('react');


const MagicButton = React.createClass({

  render: function () {

    return (
      <button className='MagicButton' onClick={this.props.magicButtonClicked}>{this.props.buttonMessage}</button>
    );

  }


});

module.exports = MagicButton;
