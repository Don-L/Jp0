const React = require('react');
const HirChar = require('./HirChar.jsx');


const HiraganaDisplay = React.createClass({

  render: function () {

    let nodes = [];

    for (let i = 0; i < this.props.hirChars.length; i++) {
      nodes.push(<HirChar key={i} char={this.props.hirChars[i]} />);
    };

    let clss = 'HiraganaDisplay' + ' hrg' + this.props.hirChars.length;

    return (
      <div className={clss}>
        {nodes}
      </div>
    );

  }


});

module.exports = HiraganaDisplay;
