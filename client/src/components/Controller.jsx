const React = require('react');


  const Controller = React.createClass({

    render: function () {

      if (this.props.hintsNo === this.props.revealed.length) {
        return (
          <div>
            <button onClick={this.props.nextHintButtonClicked} className='MagicButton next-hint big'>NEXT</button>
            <button className='MagicButton exit big'>EXIT</button>
          </div>
        )
      } else {
        return (
          <div>
            <button
              className='MagicButton next-hint'
              onClick={this.props.nextHintButtonClicked}
              onMouseOver={this.mouseOverHintButton}
              onMouseLeave={this.mouseLeaveHintButton}
              >HINT
            </button>
            <button
              onClick={this.props.nextWordButtonClicked}
              className='MagicButton next-word'
              >NEXT WORD
            </button>
            <button
              onClick={this.props.revealButtonClicked}
              className='MagicButton reveal-all'
              >REVEAL ALL
            </button>
            <button
              className='MagicButton exit'
              >EXIT
            </button>
          </div>
        );
      }

    },


    mouseOverHintButton: function () {
      this.props.mouseOverHintButton('next', 'on');
    },


    mouseLeaveHintButton: function () {
      this.props.mouseOverHintButton('next', 'off');
    }

  });

  module.exports = Controller;
