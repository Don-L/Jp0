const React = require('react');


  const Controller = React.createClass({

    render: function () {

      if (this.props.hintsNo === this.props.revealed.length) {
        return (
          <div>
            <button onClick={this.props.showNextHintOrNewCard} className='MagicButton next-hint big'>NEXT</button>
            <button className='MagicButton exit big'>EXIT</button>
          </div>
        )
      } else {
        return (
          <div>
            <button
              className='MagicButton next-hint'
              onClick={this.props.showNextHintOrNewCard}
              onMouseOver={this.mouseOverHintButton}
              onMouseLeave={this.mouseLeaveHintButton}
              >HINT
            </button>
            <button
              onClick={this.props.nextCardButtonClicked}
              className='MagicButton next-card'
              >NEXT CARD
            </button>
            <button
              onClick={this.props.revealAll}
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


    // mouseOverHintButton: function () {
    //   this.props.mouseOverHintButton('next', 'on');
    // },

    mouseOverHintButton: function () {
      console.log('yo');
    },


    mouseLeaveHintButton: function () {
      this.props.mouseOverHintButton('next', 'off');
    }
    //
    // revealButtonClicked: function () {
    //   console.log('click!');
    //   this.props.revealAll();
    // }

  });

  module.exports = Controller;
