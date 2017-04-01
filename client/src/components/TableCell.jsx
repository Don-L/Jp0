const React = require('react');


const TableCell = React.createClass({

  render: function () {

    let cssClass = null;
    if (this.props.char === '') {
      cssClass = 'blank-cell';
    } else if (this.props.tableSelected.indexOf(this.props.char) > -1) {
      cssClass = 'selected-cell';
    }

    if (this.props.char != 'ん' && this.props.char != 'っ') {
      return <td className={cssClass}>{this.props.char}</td>;
    } else if (this.props.char === 'ん') {
      return <td className={cssClass}>{this.props.char} (<strong>n</strong>)</td>;
    } else {
      return <td className={cssClass}>{this.props.char} (<strong>-</strong>)</td>;
    }

  }


});

module.exports = TableCell;
