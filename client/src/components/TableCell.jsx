const React = require('react');


const TableCell = React.createClass({

  render: function () {

    if (this.props.char === 'ん') {
      if (this.props.tableSelected.indexOf(this.props.char) > -1) {
        return <td className='selected-cell'>{this.props.char} (<strong>n</strong>)</td>
      } else {
        return <td>{this.props.char} (<strong>n</strong>)</td>
      }
    } else if (this.props.char === '') {
      return <td className='blank-cell'></td>
    } else {
      if (this.props.tableSelected.indexOf(this.props.char) > -1) {
        return <td className='selected-cell'>{this.props.char}</td>
      } else {
        return <td>{this.props.char}</td>
      }
    }

  }


});

module.exports = TableCell;
