const React = require('react');
const HirTable = require('./HirTable.jsx');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const ImageDisplay = React.createClass({

  render: function () {

    if (this.props.tableDisplayed === true) {
      return (
        <div className='ImageDisplay'>
          <HirTable
            tableSelected={this.props.tableSelected}
            hideTable={this.props.hideTable}
            hiragana={this.props.hiragana}
            setTableType={this.props.setTableType}
            tableType={this.props.tableType}/>
        </div>
      );
    } else if (this.props.revealed === this.props.hintsNo) {
      return (
        <div className='ImageDisplay'>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={200}
            transitionEnter={false}
            transitionLeave={false}>
            <img className='ImageDisplay' src={this.props.imgsrc} />
              <div className='ImageText'>
                <p className='romaji'>{this.props.romaji}</p>
                <p className='name'>{this.props.name}</p>
              </div>
          </ReactCSSTransitionGroup>
        </div>
      );
    } else {
      return (
        <div className='ImageDisplay'>
        </div>
      );
    }

    //  else {
    //   if (this.props.tableDisplayed === false) {
    //
    //   } else {
    //     return (
    //       <div className='ImageDisplay'>
    //         <HirTable tableSelected={this.props.tableSelected}/>
    //       </div>
    //     );
    //   }
    // }
  }


});

module.exports = ImageDisplay;
