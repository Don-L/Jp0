const React = require('react');

const Char = React.createClass({

  render: function () {

    return <div className='char'><p className='char'>{this.props.char}</p></div>;

  }



});

module.exports = Char;
