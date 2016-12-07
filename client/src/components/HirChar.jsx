const React = require('react');


const HirChar = React.createClass({

  render: function () {

    return (
      <div className='HirChar' onClick={this.showTableWithSelected}>
        <p className='Char'>{this.props.char}</p>
      </div>
    );

  },

  showTableWithSelected: function () {
    this.props.showTableWithSelected(this.props.char);
  }


});

module.exports = HirChar;
