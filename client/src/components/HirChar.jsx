const React = require('react');


const HirChar = React.createClass({

  render: function () {
    let classNo = this.props.char.length;
    let highlightClass = '';

    if (this.props.highlightStatus) {
      highlightClass = ' highlight';
    }

    return (
      <div
        className={'HirChar' + classNo}
        id={this.props.id}
        onClick={this.showTableWithSelected}
        onMouseOver={this.mouseOverChar}
        onMouseLeave={this.mouseLeaveChar}>
        <p className={'Char' + highlightClass}>{this.props.char}</p>
      </div>
    );
  },

  showTableWithSelected: function () {
    this.props.showTableWithSelected(this.props.char);
  },

  mouseOverChar: function () {
    this.props.setHighlightGroup(this.props.hirIndex, 'on');
  },

  mouseLeaveChar: function () {
    this.props.setHighlightGroup(this.props.hirIndex, 'off');
  }

});

module.exports = HirChar;
