const React = require('react');
const Syllab = require('./Syllab.jsx');

const Hints = React.createClass({

  render: function () {

    let hiragana = this.props.hiragana;
    let nodes = [];

    for (var i = 0; i < hiragana.length; i++) {
      nodes.push(<Syllab key={i} syllab={hiragana[i]} />);
    };

    return (
      <div>
        {nodes}
      </div>
    );

  }






});

module.exports = Hints;
