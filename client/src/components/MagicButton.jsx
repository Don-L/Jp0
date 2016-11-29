const React = require('react');


const MagicButton = React.createClass({

  render: function () {

    return (
      <button className='MagicButton'>{this.props.buttonMessage}</button>
    );

  }


});

module.exports = MagicButton;
