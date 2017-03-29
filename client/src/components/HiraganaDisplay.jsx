const React = require('react');
const HirChar = require('./HirChar.jsx');


const HiraganaDisplay = React.createClass({

  render: function () {

    let nodes = [];

    for (let i = 0; i < this.props.hirChars.length; i++) {
      nodes.push(<HirChar key={i}
                          hirIndex={i}
                          id={'HirCharId' + i}
                          nextUp={this.props.nextUp}
                          highlightingHir={this.props.highlightingHir}
                          showTableWithSelected={this.props.showTableWithSelected} char={this.props.hirChars[i]} />);
    };

    var flattened = this.props.hirChars.reduce(function(a, b) {
      return a + b;
    }, []);

    let clss = 'HiraganaDisplay' + ' hrg' + flattened.length;

    return (
      <div className={clss}>
        {nodes}
      </div>
    );

  }


});

module.exports = HiraganaDisplay;
