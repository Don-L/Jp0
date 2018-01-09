const React = require('react');
const ReactCSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

const Hint = React.createClass({

  render: function () {

    let revealed = this.props.revealed;
    let hintIndex = this.props.hintIndex;

    let highlightClass = '';

    if (this.props.highlightStatus) {
      highlightClass = ' highlight';
    }



    if (revealed.indexOf(hintIndex) > -1) {
      return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={200}
          transitionEnter={false}
          transitionLeave={false}>
          <div className='Hint'>
            <p
              className={'Revealed-Hint' + highlightClass}
              onMouseOver={this.mouseOverHint}
              onMouseLeave={this.mouseLeaveHint}>
              {this.props.hint}
            </p>
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      let blanks = [];
      for (let i = 0; i < this.props.hint.length; i++) {
        blanks.push('\u2022');
      }
      return (
        <div className='Hint'>
          <p
            onMouseOver={this.mouseOverHint}
            onMouseLeave={this.mouseLeaveHint}
            onClick={this.hintClicked}
            className={'Hidden-Hint' + highlightClass}>
            {blanks}
          </p>
        </div>
      );
    }

  },


  hintClicked: function () {
    this.props.hintClicked(this.props.hintIndex);
  },


  mouseOverHint: function () {
    this.props.setHighlightGroup(this.props.hintIndex, 'on');
  },


  mouseLeaveHint: function () {
    this.props.setHighlightGroup(this.props.hintIndex, 'off');
  }


});

module.exports = Hint;
