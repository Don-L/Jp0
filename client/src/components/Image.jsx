const React = require('react');

const Image = React.createClass({

  render: function () {

    console.log(this.props.word);
    return (
      <div>
        <img className='image' src={this.props.imgsrc} />
      </div>
    );

  }










});

module.exports = Image;
