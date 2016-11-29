const React = require('react');


const HiraganaDisplay = React.createClass({

  render: function () {

    return (
      <div className='HiraganaDisplay'>
        <h2 className='HiraganaDisplay'>{this.props.hiraganaChars}</h2>
      </div>
    );

  }


});

module.exports = HiraganaDisplay;
