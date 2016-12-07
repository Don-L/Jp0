const React = require('react');


const TableCell = React.createClass({

  render: function () {

    if (this.props.tableChar === 'ん') {
      if (this.props.tableSelected.indexOf(this.props.tableChar) > -1) {
        return <td className='selected-cell'>{this.props.tableChar} (<strong>n</strong>)</td>
      } else {
        return <td>{this.props.tableChar} (<strong>n</strong>)</td>
      }
    } else if (this.props.tableChar === '') {
      return <td className='blank-cell'></td>
    } else {
      if (this.props.tableSelected.indexOf(this.props.tableChar) > -1) {
        return <td className='selected-cell'>{this.props.tableChar}</td>
      } else {
        return <td>{this.props.tableChar}</td>
      }
    }
  }


});

module.exports = TableCell;
