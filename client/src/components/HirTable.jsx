const React = require('react');
const TableCell = require('./TableCell.jsx');


  const HirTable = React.createClass({

    render: function () {

      return (
        <table onClick={this.props.tableClicked}>
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
                tableChar={this.props.hiragana['empty_string']}/>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana['\u3093']}/>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana['empty_string']}/>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana['empty_string']}/>
            </tr>
            <tr align="center">
              <th></th>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana['yōon']}/>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana[' ']}/>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana['\u3063']}/>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana['\u3099']}/>
              <TableCell
                tableSelected={this.props.tableSelected}
                tableChar={this.props.hiragana['\u309A']}/>
            </tr>
          </tbody>
        </table>
      )

    }


  });

  module.exports = HirTable;
