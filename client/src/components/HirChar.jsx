const React = require('react');


const HirChar = React.createClass({

  render: function () {
    let classNo = this.props.char.length;
    // let highlightClass = this.getHighlightClass();
    return (
      <div className={'HirChar' + classNo} id={this.props.id} onClick={this.showTableWithSelected}>
      
        <p className={'Char'}>{this.props.char}</p>
      </div>
    );
  },

  showTableWithSelected: function () {
    this.props.showTableWithSelected(this.props.char);
  }

  // getHighlightClass: function () {
  //   let highlightClass = '';
  //   if (this.props.hirIndex === this.props.nextUp && this.props.highlightingHir === true) {
  //     highlightClass = ' hint-selected';
  //   };
  //   return highlightClass;
  // }

});

module.exports = HirChar;
