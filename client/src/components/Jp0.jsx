const React = require('react');
const Words = require('../res/words.js');
const Hiragana = require('../res/hiragana.js');
const KanjiDisplay = require('./KanjiDisplay.jsx');
const HiraganaDisplay = require('./HiraganaDisplay.jsx');
const HintDisplay = require('./HintDisplay.jsx');
const ImageDisplay = require('./ImageDisplay.jsx');
const Controller = require('./Controller.jsx');



const Jp0 = React.createClass({


  render: function () {

    let currentWord = this.state.words[this.state.currentIndex];
    let hints = [];
    for (let hira of currentWord['hiragana']) {
      hints.push(this.state.hiragana[hira]['transliteration']);
    }


    return (
      <div className='Jp0'>
        <div className='top'>
          <ImageDisplay
            imgsrc={this.state.words[this.state.currentIndex]['imgsrc']}
            name={this.state.words[this.state.currentIndex]['name']}
            romaji={this.state.words[this.state.currentIndex]['romaji']}
            revealed={this.state.revealed.length}
            hintsNo={this.state.hintsNo}
            tableDisplayed={this.state.tableDisplayed}
            tableSelected={this.state.tableSelected}
            tableClicked={this.hideTable}
            hiragana={this.state.hiragana}/>
          <HintDisplay
            hintClicked={this.revealHint}
            hintsList={hints}
            revealed={this.state.revealed}/>
        </div>
        <HiraganaDisplay
          hirChars={this.state.words[this.state.currentIndex]['hiragana']} showTableWithSelected={this.showTableWithSelected} />
        <KanjiDisplay
          kanjiChars={this.state.words[this.state.currentIndex]['kanji']}
          showTableWithAllSelected={this.showTableWithAllSelected} />
        <Controller
          nextWordButtonClicked={this.getNextWord}
          nextHintButtonClicked={this.nextHintButtonClicked}
          revealButtonClicked={this.revealAll}
          hintsNo={this.state.hintsNo}
          revealed={this.state.revealed}/>

      </div>
    );

  },


  getInitialState: function () {
    return {
      words: [{
        'name': 'init',
        'hiragana': ['I', 'N', 'I', 'T'],
        'kanji': 'KANJI',
        'imgsrc': 'res/Nightingale.JPG'
      }],
      hiragana: {'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},
                 'N':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},
                 'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},
                 'T':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},},
      currentIndex: 0,
      hintsNo: 4,
      revealed: [],
      tableDisplayed: false,
      tableSelected: []
    };
  },


  componentDidMount: function () {

    let hintsNo = Words[0]['hiragana'].length;

    this.setState({words: Words,
                   hiragana: Hiragana,
                   currentIndex: 0,
                   revealed: [],
                   hintsNo: hintsNo});
  },

//moves app to next word if all hints revealed or reveals first hidden hint
  nextHintButtonClicked: function () {
    let firstHidden = this.findFirstHidden();
    let hintsNo = this.state.hintsNo;
    let revealed = this.state.revealed;
    if (firstHidden === -1) {
      this.getNextWord();
    } else {
      let newRevealed = this.state.revealed;
      newRevealed.push(firstHidden);
      newRevealed = newRevealed.sort(function(a, b){return a-b});
      this.setState({revealed: newRevealed});
      if (newRevealed.length === hintsNo) {
        this.setState({tableDisplayed: false});
      }
    }
  },


  findFirstHidden: function () {
    let revealed = this.state.revealed;
    let hintsNo = this.state.hintsNo;
    if (hintsNo === revealed.length) {
      return -1;
    } else if (revealed.indexOf(0) === -1) {
      return 0;
    } else {
      for (let i=0; i<revealed.length; i++) {
        if (revealed[i + 1] - revealed[i] >= 2 || revealed.indexOf(i + 1) === -1) {
          return(i + 1);
        }
      }
    }
  },


  getNextWord: function () {

    let newCurrent = this.state.currentIndex + 1;
    let hintsNo = Words[newCurrent]['hiragana'].length;

    this.setState({words: Words,
                   hiragana: Hiragana,
                   currentIndex: newCurrent,
                   revealed: [],
                   hintsNo: hintsNo,
                   tableDisplayed: false,
                   tableSelected: []});
  },


  revealAll: function () {
    let rev = [];
    for (var i = 0; i < this.state.words[this.state.currentIndex]['hiragana'].length; i++) {
      rev.push(i);
    }
    this.setState(
      {revealed: rev,
       tableDisplayed: false}
    )
  },


  revealHint: function (index) {
    let revealed = this.state.revealed;
    revealed.push(index);
    if (revealed.length === this.state.hintsNo) {
      this.setState(
        {revealed: revealed,
         tableDisplayed: false}
      );
    } else {
      this.setState(
        {revealed: revealed}
      );
    }
  },


  showTableWithSelected: function (char, all) {
    let tableSelected = [];
    if (all) {
      tableSelected = this.state.tableSelected;
    }
    if (this.state.hiragana[char].yoon_parent) {
      let ch = this.state.hiragana[char].yoon_parent;
      tableSelected.push(ch);
      tableSelected.push('yōon')
    } else {
      tableSelected.push(char);
    }
    this.setState(
      {tableDisplayed: true,
       tableSelected: tableSelected}
    );
  },


  showTableWithAllSelected: function () {
    let hirChars=this.state.words[this.state.currentIndex]['hiragana'];
    for (let hira of hirChars) {
      this.showTableWithSelected(hira, 'all');
    }
  },


  hideTable: function () {
    this.setState({tableDisplayed: false});
  }















});

module.exports = Jp0;

// nextHintButtonClicked: function () {
//   console.log('click!!');
//
//   let firstHidden = this.findFirstHidden();
//
//   let hintsNo = this.state.hintsNo;
//   let revealed = this.state.revealed;
//
//   if (hintsNo === revealed.length) {
//     this.getNextWord();
//   } else if (revealed.length === 0) {
//     // let sound = new Audio(this.state.hiragana[this.state.words[this.state.currentIndex]['hiragana'][0]]['sound']);
//     // sound.play();
//     this.setState({revealed: [0]});
//   } else if (revealed.length === hintsNo - 1) {
//     // let sound = new Audio(this.state.hiragana[this.state.words[this.state.currentIndex]['hiragana'][this.state.hintsNo - 1]]['sound']);
//     // sound.play();
//     let lastRevealed = revealed[revealed.length - 1];
//     let newRevealed = lastRevealed + 1;
//     revealed.push(newRevealed);
//     this.setState({revealed: revealed});
//   } else {
//     let lastRevealed = revealed[revealed.length - 1];
//     let newRevealed = lastRevealed + 1;
//     revealed.push(newRevealed);
//     // let sound = new Audio(this.state.hiragana[this.state.words[this.state.currentIndex]['hiragana'][revealed.length - 1]]['sound']);
//     // sound.play();
//     this.setState({revealed: revealed});
//   }
// },
