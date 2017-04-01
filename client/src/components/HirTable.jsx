const React = require('react');
const TableCell = require('./TableCell.jsx');
const TableTab = require('./TableTab.jsx');


const HirTable = React.createClass({

  render: function () {
    let tabs = this.getTabs();
    let gojuonArray = this.props.tableArrays[0];
    let dakutenArray = this.props.tableArrays[1];
    let yoonArray = this.props.tableArrays[2];
    let gojuonTable = this.getTable(gojuonArray, ['', 'a', 'i', 'u', 'e', 'o'], ['', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', '']);
    let dakutenTable = this.getTable(dakutenArray, ['', 'a', 'i', 'u', 'e', 'o'], ['g', 'z', 'd', 'b', 'p']);
    let yoonTable = this.getTable(yoonArray, ['', 'a', 'u', 'o'], ['ky', 'sh', 'ch', 'ny', 'hy', 'my', 'ry', 'gy', 'j', 'j', 'by', 'py']);

    if (this.props.tableType == 'dakuten') {
      return <div>{tabs}{dakutenTable}</div>;
    } else if (this.props.tableType == 'yōon') {
      return <div>{tabs}{yoonTable}</div>;
    } else {
      return <div>{tabs}{gojuonTable}</div>;
    }
  },


  getTabs: function () {
    return (
      <div className={'tabs'}>
        <TableTab tabName={'X'} setTableType={this.props.setTableType} tableType={this.props.tableType} hideTable={this.props.hideTable} charTypes={this.props.charTypes}/>
        <TableTab tabName={'gojūon'} setTableType={this.props.setTableType} tableType={this.props.tableType} card={this.props.card} charTypes={this.props.charTypes}/>
        <TableTab tabName={'dakuten'} setTableType={this.props.setTableType} tableType={this.props.tableType} card={this.props.card} charTypes={this.props.charTypes}/>
        <TableTab tabName={'yōon'} setTableType={this.props.setTableType} tableType={this.props.tableType} card={this.props.card} charTypes={this.props.charTypes}/>
      </div>
    );
  },


  getTable: function (tableDataArr, columnHeadingsArr, rowHeadingsArr) {
    let columnHeadings = this.getColumnHeadings(columnHeadingsArr);
    let rowsAndRowHeadings = this.getTableRows(tableDataArr, rowHeadingsArr);
    return (
      <table>
        <tbody>
          <tr>
            {columnHeadings}
          </tr>
            {rowsAndRowHeadings}
        </tbody>
      </table>
    );
  },


  getColumnHeadings: function (columnHeadingsArr) {
    let columnHeadings = [];
    for (let i = 0; i < columnHeadingsArr.length; i++) {
      columnHeadings.push(this.getColHeading(columnHeadingsArr[i]));
    }
    return columnHeadings;
  },


  getColHeading: function (heading) {
    return <th><i>{heading}</i></th>;
  },


  getTableRows: function (tableDataArr, rowHeadingsArr) {
    let rowArraysArr = this.getRowArrays(tableDataArr);
    let rows = [];
    for (let i = 0; i < rowArraysArr.length; i++) {
      rows.push(this.getRow(rowArraysArr[i], rowHeadingsArr[i]));
    }
    return rows;
  },


  getRow: function (rowArray, rowHeading) {
    let rowCells = [];
    for (let i = 0; i < rowArray.length; i++) {
      let cell = this.getCell(rowArray[i]);
      rowCells.push(cell);
    }
    return (
      <tr align="center">
        <th><i>{rowHeading}</i></th>
        {rowCells}
      </tr>
    );
  },


  getCell: function (hiragana) {
    return <TableCell
      tableSelected={this.props.tableSelected}
      char={hiragana['char']}/>;
  },


  getRowArrays: function (tableDataArr) {
    let rowArraysArr = [];
    tableDataArr.sort(function (a, b) {
      return a['table'][1] - b['table'][1];
    });
    let lastRowIndex = tableDataArr[tableDataArr.length - 1]['table'][1];
    for (let i = 0; i <= lastRowIndex; i++) {
      rowArraysArr.push([]);
    }
    for (let j = 0; j <= lastRowIndex; j++) {
      for (let i = 0; i < tableDataArr.length; i++) {
        if (tableDataArr[i]['table'][1] === j) {
          rowArraysArr[j].push(tableDataArr[i]);
        }
      }
    }
    for (let i = 0; i <= lastRowIndex; i++) {
      rowArraysArr[i].sort(function (a, b) {
        return a['table'][2] - b['table'][2];
      });
    }
    if (tableDataArr[0]['table'][0] === 'gojūon') {
      rowArraysArr = this.addGojuonTableBlanks(rowArraysArr);
    }
    return rowArraysArr;
  },


  addGojuonTableBlanks: function (rowArraysArr) {
    let newRow7 = [];
    let newRow10 = [];
    let newRow9 = [];
    newRow7[0] = rowArraysArr[7][0];
    newRow7[1] = this.props.hiragana[' '];
    newRow7[2] = rowArraysArr[7][1];
    newRow7[3] = this.props.hiragana[' '];
    newRow7[4] = rowArraysArr[7][2];
    newRow9[0] = rowArraysArr[9][0];
    newRow9[1] = this.props.hiragana[' '];
    newRow9[2] = this.props.hiragana[' '];
    newRow9[3] = this.props.hiragana[' '];
    newRow9[4] = rowArraysArr[9][1];
    newRow10[0] = this.props.hiragana['empty_string'];
    newRow10[1] = rowArraysArr[10][0];
    newRow10[2] = this.props.hiragana['empty_string'];
    newRow10[3] = rowArraysArr[10][1];
    newRow10[4] = this.props.hiragana['empty_string'];
    rowArraysArr[7] = newRow7;
    rowArraysArr[9] = newRow9;
    rowArraysArr[10] = newRow10;
    return rowArraysArr;
  }

});

module.exports = HirTable;
