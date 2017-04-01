const React = require('react');
const TableCell = require('./TableCell.jsx');
const TableTab = require('./TableTab.jsx');


const HirTable = React.createClass({

  render: function () {
    let tabs = this.getTabs();
    let table;
    if (this.props.tableType == 'dakuten') {
      table = this.getTable(this.props.tableArrays[1], ['', 'a', 'i', 'u', 'e', 'o'], ['g', 'z', 'd', 'b', 'p']);
    } else if (this.props.tableType == 'yōon') {
      table = this.getTable(this.props.tableArrays[2], ['', 'a', 'u', 'o'], ['ky', 'sh', 'ch', 'ny', 'hy', 'my', 'ry', 'gy', 'j', 'j', 'by', 'py']);
    } else {
      table = this.getTable(this.props.tableArrays[0], ['', 'a', 'i', 'u', 'e', 'o'], ['', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', '']);
    }
    return <div>{tabs}{table}</div>;
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
      columnHeadings.push(this.getColHeading(columnHeadingsArr[i], i));
    }
    return columnHeadings;
  },

  getColHeading: function (heading, keyIndex) {
    return <th key={'colHeading ' + heading + keyIndex}><i>{heading}</i></th>;
  },

  getTableRows: function (tableDataArr, rowHeadingsArr) {
    let rowArraysArr = this.getRowArrays(tableDataArr);
    let rows = [];
    for (let i = 0; i < rowArraysArr.length; i++) {
      rows.push(this.getRow(rowArraysArr[i], rowHeadingsArr[i], i));
    }
    return rows;
  },

  getRow: function (rowArray, rowHeading, keyIndex) {
    let rowCells = [];
    for (let i = 0; i < rowArray.length; i++) {
      let cell = this.getCell(rowArray[i], i);
      rowCells.push(cell);
    }
    return (
      <tr align="center" key={'rowHeading ' + rowHeading + keyIndex}>
        <th><i>{rowHeading}</i></th>
        {rowCells}
      </tr>
    );
  },

  getCell: function (hiragana, keyIndex) {
    return <TableCell
      key={'TableCell ' + hiragana['char'] + keyIndex}
      tableSelected={this.props.tableSelected}
      char={hiragana['char']}/>;
  },

  getRowArrays: function (tableDataArr) {
    let tableDataSortedByRow = this.sortDataByRow(tableDataArr);
    let lastRowIndex = tableDataSortedByRow[tableDataArr.length - 1]['table'][1];
    let rowArraysArr = this.initialiseRowArraysArr(tableDataSortedByRow, lastRowIndex);

    rowArraysArr = this.populateRowArraysArr(rowArraysArr, tableDataSortedByRow, lastRowIndex);
    rowArraysArr = this.sortRowArraysByColumn(rowArraysArr, lastRowIndex);
    if (tableDataArr[0]['table'][0] === 'gojūon') {
      rowArraysArr = this.addGojuonTableBlanks(rowArraysArr);
    }
    return rowArraysArr;
  },

  sortDataByRow: function (tableDataArr) {
    tableDataArr.sort(function (a, b) {
      return a['table'][1] - b['table'][1];
    });
    return tableDataArr;
  },

  initialiseRowArraysArr: function (tableDataSortedByRow, lastRowIndex) {
    let rowArraysArr = [];
    for (let i = 0; i <= lastRowIndex; i++) {
      rowArraysArr.push([]);
    }
    return rowArraysArr;
  },

  populateRowArraysArr: function (rowArraysArr, tableDataSortedByRow, lastRowIndex) {
    for (let j = 0; j <= lastRowIndex; j++) {
      for (let i = 0; i < tableDataSortedByRow.length; i++) {
        if (tableDataSortedByRow[i]['table'][1] === j) {
          rowArraysArr[j].push(tableDataSortedByRow[i]);
        }
      }
    }
    return rowArraysArr;
  },

  sortRowArraysByColumn: function (rowArraysArr, lastRowIndex) {
    for (let i = 0; i <= lastRowIndex; i++) {
      rowArraysArr[i].sort(function (a, b) {
        return a['table'][2] - b['table'][2];
      });
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
