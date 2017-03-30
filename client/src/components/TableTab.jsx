const React = require('react');

const TableTab = React.createClass({

  render: function () {
    if (this.props.tabName == 'X') {
      return <span className={'close'} onClick={this.hideTable}>{this.props.tabName}</span>;
    } else {
      if (this.props.tableType == this.props.tabName) {
        return <span className={'selectedTab'} onClick={this.setTableType}>{this.props.tabName}</span>;
      } else {
        return <span onClick={this.setTableType}>{this.props.tabName}</span>;
      }
    }
  },

  setTableType: function () {
    this.props.setTableType(this.props.tabName);
  },

  hideTable: function () {
    this.props.hideTable();
  }


});

module.exports = TableTab;
