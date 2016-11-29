const React = require('react');


const Hint = React.createClass({

  render: function () {

    let revealed = this.props.revealed;
    let hintIndex = this.props.hintIndex;

    if (revealed.indexOf(hintIndex) > -1) {
      return (
        <div className='Hint'>
          <p className='revealed-hint'>{this.props.hint}</p>
        </div>
      );
    } else {
      return (
        <div className='Hint'>
          <p className='hidden-hint'> *??* </p>
        </div>
      );
    }



  }


});

module.exports = Hint;
