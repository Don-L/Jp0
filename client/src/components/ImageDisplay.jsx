const React = require('react');
const HirTable = require('./HirTable.jsx');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const ImageDisplay = React.createClass({

  render: function () {

    if (this.props.revealed === this.props.hintsNo) {
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
          <HirTable />
        </div>
      );
    }
  }


});

module.exports = ImageDisplay;
