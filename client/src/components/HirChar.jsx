const React = require('react');


const HirChar = React.createClass({

  render: function () {

    let classNo = this.props.char.length;

    return (
      <div className={'HirChar' + classNo} id={this.props.id} onClick={this.showTableWithSelected}>
        <p className='Char'>{this.props.char}</p>
      </div>
    );

  },

  showTableWithSelected: function () {
    this.props.showTableWithSelected(this.props.char);
  }


});

module.exports = HirChar;
