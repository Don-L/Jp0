const React = require('react');


const ImageDisplay = React.createClass({

  render: function () {

    return (
      <div className='ImageDisplay'>
        <img className='ImageDisplay' src={this.props.imgsrc} />
          <p className='name'>{this.props.name}</p>
          <p className='romaji'>{this.props.romaji}</p>
      </div>
    );

  }


});

module.exports = ImageDisplay;
