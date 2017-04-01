const React = require('react');


const TableCell = React.createClass({

  render: function () {

    // if (this.props.tableChar.char === 'ん') {
    //   if (this.props.tableSelected.indexOf(this.props.tableChar.char) > -1) {
    //     return <td className='selected-cell'>{this.props.tableChar.char} (<strong>n</strong>)</td>
    //   } else {
    //     return <td>{this.props.tableChar.char} (<strong>n</strong>)</td>
    //   }
    // } else if (this.props.tableChar.char === '') {
    //   return <td className='blank-cell'></td>
    // } else {
    //   if (this.props.tableSelected.indexOf(this.props.tableChar.char) > -1) {
    //     return <td className='selected-cell'>{this.props.tableChar.char}</td>
    //   } else {
    //     return <td>{this.props.tableChar.char}</td>
    //   }
    // }

    // if (this.props.char === 'ん') {
    //   if (this.props.tableSelected.indexOf(this.props.char) > -1) {
    //     return <td className='selected-cell'>{this.props.char} (<strong>n</strong>)</td>
    //   } else {
    //     return <td>{this.props.char} (<strong>n</strong>)</td>
    //   }
    // } else if (this.props.char === '') {
    //   return <td className='blank-cell'></td>
    // } else {
    //   if (this.props.tableSelected.indexOf(this.props.char) > -1) {
    //     return <td className='selected-cell'>{this.props.char}</td>
    //   } else {
    //     return <td>{this.props.char}</td>
    //   }
    // }

    return <td>{this.props.char}</td>

  },

  setTableType: function () {
    this.props.setTableType(this.props.tableChar.char);
  }


});

module.exports = TableCell;
