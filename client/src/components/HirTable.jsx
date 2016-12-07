const React = require('react');
const TableCell = require('./TableCell.jsx');


  const HirTable = React.createClass({

    render: function () {

      return (
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
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3042'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3044'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3046'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3048'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u304A'}/>
            </tr>
            <tr align="center">
              <th><i>k</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u304B'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u304D'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u304F'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3051'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3053'}/>
            </tr>
            <tr align="center">
              <th><i>s</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3055'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3057'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3059'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u305B'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u305D'}/>
            </tr>
            <tr align="center">
              <th><i>t</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u305F'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3061'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3063'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3066'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3068'}/>
            </tr>
            <tr align="center">
              <th><i>n</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u306A'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u306B'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u306C'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u306D'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u306E'}/>
            </tr>
            <tr align="center">
              <th><i>h</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u306F'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3072'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3075'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3078'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u307B'}/>
            </tr>
            <tr align="center">
              <th><i>m</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u307E'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u307F'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3080'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3081'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3082'}/>
            </tr>
            <tr align="center">
              <th><i>y</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3084'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=' '/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3086'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={' '}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3088'}/>
            </tr>
            <tr align="center">
              <th><i>r</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3089'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u308A'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u308B'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u308C'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u308D'}/>
            </tr>
            <tr align="center">
              <th><i>w</i></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u308F'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=' '/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=' '/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=' '/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3092'}/>
            </tr>
            <tr align="center">
              <th></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar=''/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=''/>
              <TableCell tableSelected={this.props.tableSelected} tableChar={'\u3093'}/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=''/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=''/>
            </tr>
            <tr align="center">
              <th></th>
              <TableCell tableSelected={this.props.tableSelected} tableChar='yōon'/>
              <TableCell tableSelected={this.props.tableSelected} tableChar=' '/>
              <TableCell tableSelected={this.props.tableSelected} tableChar='っ'/>
              <TableCell tableSelected={this.props.tableSelected} tableChar='゛'/>
              <TableCell tableSelected={this.props.tableSelected} tableChar='゜'/>
            </tr>
          </tbody>
        </table>
      )

    }


  });

  module.exports = HirTable;
