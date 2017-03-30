const React = require('react');

const TableTab = React.createClass({

  render: function () {
    let className = this.getClassName();
    let onClick = this.getClick();
    return <span className={className} onClick={onClick}>{this.props.tabName}</span>;
  },

  getClassName: function () {
    let className = '';
    let tabName = this.props.tabName;
    if (tabName == 'X') {
      return className = 'close';
    }
    let tableType = this.props.tableType;
    if (tabName == tableType) {
      className += ' selectedTab ';
    }
    let charTypes = this.props.charTypes;
    if ((tabName == '゛、゜') && (charTypes.indexOf('dakuten') > -1 || charTypes.indexOf('handakuten') > -1)) {
      className += ' contains_char ';
    }
    if (charTypes.indexOf(tabName) > -1) {
      className += 'contains_char';
    }
    return className;
  },

  getClick: function () {
    let onClick = null;
    if (this.props.tabName == 'X') {
      return onClick = this.hideTable;
    } else {
      return onClick = this.setTableType;
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
