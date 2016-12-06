const React = require('react');


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
              <td>あ</td>
              <td>い</td>
              <td>う</td>
              <td>え</td>
              <td>お</td>
            </tr>
            <tr align="center">
              <th><i>k</i></th>
              <td>か</td>
              <td>き</td>
              <td>く</td>
              <td>け</td>
              <td>こ</td>
            </tr>
            <tr align="center">
              <th><i>s</i></th>
              <td>さ</td>
              <td>し</td>
              <td>す</td>
              <td>せ</td>
              <td>そ</td>
            </tr>
            <tr align="center">
              <th><i>t</i></th>
              <td>た</td>
              <td>ち</td>
              <td>つ</td>
              <td>て</td>
              <td>と</td>
            </tr>
            <tr align="center">
              <th><i>n</i></th>
              <td>な</td>
              <td>に</td>
              <td>ぬ</td>
              <td>ね</td>
              <td>の</td>
            </tr>
            <tr align="center">
              <th><i>h</i></th>
              <td>は</td>
              <td>ひ</td>
              <td>ふ</td>
              <td>へ</td>
              <td>ほ</td>
            </tr>
            <tr align="center">
              <th><i>m</i></th>
              <td>ま</td>
              <td>み</td>
              <td>む</td>
              <td>め</td>
              <td>も</td>
            </tr>
            <tr align="center">
              <th><i>y</i></th>
              <td>や</td>
              <td></td>
              <td>ゆ</td>
              <td></td>
              <td>よ</td>
            </tr>
            <tr align="center">
              <th><i>r</i></th>
              <td>ら</td>
              <td>り</td>
              <td>る</td>
              <td>れ</td>
              <td>ろ</td>
            </tr>
            <tr align="center">
              <th><i>w</i></th>
              <td>わ</td>
              <td></td>
              <td></td>
              <td></td>
              <td>を</td>
            </tr>

            <tr align="center">

              <th></th>
              <td className='blank-cell'></td>
              <td>ん <strong>(n)</strong></td>
              <td className='blank-cell'></td>
              <td>っ</td>
              <td className='blank-cell'></td>
            </tr>

          </tbody>
        </table>
      )

    }


  });

  module.exports = HirTable;
