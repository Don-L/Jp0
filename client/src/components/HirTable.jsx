const React = require('react');
const TableCell = require('./TableCell.jsx');
const TableTab = require('./TableTab.jsx');


const HirTable = React.createClass({

  render: function () {


    let tabs = this.getTabs();

    let gojuonArray = this.props.tableArrays[0];
    let dakutenArray = this.props.tableArrays[1];
    let yoonArray = this.props.tableArrays[2];

    let gojuonTab = this.getTable(gojuonArray, ['', 'a', 'i', 'u', 'e', 'o'], ['', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', '']);

    // console.log(gojuonTab);

    return <div>{tabs}{gojuonTab}</div>;

    // if (this.props.tableType == 'gojūon') {
    //   return gojuonTable;
    // } else if (this.props.tableType == 'dakuten') {
    //   return dakuonTable;
    // } else if (this.props.tableType == 'yōon') {
    //   return yoonTable;
    // } else {
    //   return gojuonTable;
    // }


    let gojuonTable =
    <div>
      {tabs}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th><i>a</i></th>
            <th><i>i</i></th>
            <th><i>u</i></th>
            <th><i>e</i></th>
            <th><i>o</i></th>
          </tr>
          <tr align="center">
            <th></th>
            <TableCell
              tableSelected={this.props.tableSelected} tableChar={this.props.hiragana['\u3042']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3044']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3046']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3048']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304A']}/>
          </tr>
          <tr align="center">
            <th><i>k</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304B']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304D']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304F']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3051']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3053']}/>
          </tr>
          <tr align="center">
            <th><i>s</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3055']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3057']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3059']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u305B']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u305D']}/>
          </tr>
          <tr align="center">
            <th><i>t</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u305F']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3061']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3064']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3066']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3068']}/>
          </tr>
          <tr align="center">
            <th><i>n</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306A']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306B']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306C']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306D']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306E']}/>
          </tr>
          <tr align="center">
            <th><i>h</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306F']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3072']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3075']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3078']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307B']}/>
          </tr>
          <tr align="center">
            <th><i>m</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307E']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307F']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3080']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3081']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3082']}/>
          </tr>
          <tr align="center">
            <th><i>y</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3084']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana[' ']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3086']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana[' ']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3088']}/>
          </tr>
          <tr align="center">
            <th><i>r</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3089']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308A']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308B']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308C']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308D']}/>
          </tr>
          <tr align="center">
            <th><i>w</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308F']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana[' ']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana[' ']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana[' ']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3092']}/>
          </tr>
          <tr align="center">
            <th></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['empty_string']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3093']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['empty_string']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3063']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['empty_string']}/>
          </tr>
        </tbody>
      </table>
    </div>;








    let dakuonTable =
    <div>
      {tabs}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th><i>a</i></th>
            <th><i>i</i></th>
            <th><i>u</i></th>
            <th><i>e</i></th>
            <th><i>o</i></th>
          </tr>
          <tr align="center">
            <th><i>g</i></th>
            <TableCell
              tableSelected={this.props.tableSelected} tableChar={this.props.hiragana['\u304C']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304E']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3050']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3052']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3054']}/>
          </tr>
          <tr align="center">
            <th><i>z</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3056']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3058']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u305A']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u305C']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u305E']}/>
          </tr>
          <tr align="center">
            <th><i>d</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3060']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3062']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3065']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3067']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3069']}/>
          </tr>
          <tr align="center">
            <th><i>b</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3070']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3073']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3076']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3079']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307C']}/>
          </tr>
          <tr align="center">
            <th><i>p</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3071']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3074']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3077']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307A']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307D']}/>
          </tr>
        </tbody>
      </table>
    </div>;





    let yoonTable =
    <div>
      {tabs}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th><i>a</i></th>
            <th><i>u</i></th>
            <th><i>o</i></th>
          </tr>
          <tr align="center">
            <th><i>ky</i></th>
            <TableCell
              tableSelected={this.props.tableSelected} tableChar={this.props.hiragana['\u304d\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304D\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304D\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>sh</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3057\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3057\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3057\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>ch</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3061\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3061\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3061\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>ny</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306B\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3061\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u306B\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>hy</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3072\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3072\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3072\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>my</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307F\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307F\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u307F\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>ry</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308A\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308A\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u308A\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>gy</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304E\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304E\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u304E\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>j</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3058\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3058\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3058\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>j</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3062\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3062\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3062\u3087']}/>
          </tr>
          <tr align="center">
            <th><i>by</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3073\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3073\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3073\u3085']}/>
          </tr>
          <tr align="center">
            <th><i>py</i></th>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3074\u3083']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3074\u3085']}/>
            <TableCell
              tableSelected={this.props.tableSelected}
              tableChar={this.props.hiragana['\u3074\u3087']}/>
          </tr>
        </tbody>
      </table>
    </div>;

    // if (this.props.tableType == 'gojūon') {
    //   return gojuonTable;
    // } else if (this.props.tableType == 'dakuten') {
    //   return dakuonTable;
    // } else if (this.props.tableType == 'yōon') {
    //   return yoonTable;
    // } else {
    //   return gojuonTable;
    // }


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
    console.log(columnHeadingsArr);
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
    // console.log(rowArraysArr);
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
