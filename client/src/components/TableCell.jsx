const React = require('react');


const TableCell = React.createClass({

  render: function () {

    let cssClass;
    if (this.props.char != '' && this.props.tableSelected.indexOf(this.props.char) < 0) {
      cssClass = undefined;
    } else if (this.props.char === '') {
      cssClass = 'blank-cell';
    } else {
      cssClass = 'selected-cell';
    }

    let tableCell;
    if (this.props.char != 'ん' && this.props.char != 'っ') {
      tableCell = <td className={cssClass}>{this.props.char}</td>;
    } else if (this.props.char === 'ん') {
      tableCell = <td className={cssClass}>{this.props.char} (<strong>n</strong>)</td>;
    } else {
      tableCell = <td className={cssClass}>{this.props.char} (<strong>-</strong>)</td>;
    }

    return tableCell;
  }

});

module.exports = TableCell;
