const React = require('react');


const HirChar = React.createClass({

  render: function () {

    return (
      <div className = 'HirChar'>
        <p className='Char'>{this.props.char}</p>
      </div>
    );

  }


});

module.exports = HirChar;
