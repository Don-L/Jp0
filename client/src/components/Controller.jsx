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
              onClick={this.clickOnHintButton}
              onMouseOver={this.mouseOverHintButton}
              onMouseLeave={this.mouseLeaveHintButton}
              >HINT
            </button>
            <button
              onClick={this.nextCardButtonClicked}
              className='MagicButton next-card'
              >NEXT CARD
            </button>
            <button
              onClick={this.clickOnRevealAllButton}
              onMouseOver={this.mouseOverRevealAllButton}
              onMouseLeave={this.mouseLeaveRevealAllButton}
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

    clickOnHintButton: function () {
      this.props.showNextHintOrNewCard();
      let hidden = this.props.hidden;
      if (hidden.length === 0) {
        this.props.setHighlightGroup(null, 'off');
      } else {
        this.mouseOverHintButton();
      }
    },

    mouseOverHintButton: function () {
      let hidden = this.props.hidden;
      if (hidden.length > 0) {
        this.props.setHighlightGroup(hidden[0], 'on');
      }
    },

    mouseLeaveHintButton: function () {
      this.props.setHighlightGroup(null, 'off');
    },

    nextCardButtonClicked: function () {
      this.props.getNextCard('next card button clicked');
    },

    mouseOverRevealAllButton: function () {
      this.props.setHighlightGroup('all', 'on');
    },

    mouseLeaveRevealAllButton: function () {
      this.props.setHighlightGroup('all', 'off');
    },

    clickOnRevealAllButton: function () {
      this.props.revealAll();
      this.props.setHighlightGroup('all', 'off');
    }


  });

  module.exports = Controller;
