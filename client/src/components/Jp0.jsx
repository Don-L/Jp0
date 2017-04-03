const React = require('react');
const Cards = require('../res/cards.js');
const Hiragana = require('../res/hiragana.js');
const KanjiDisplay = require('./KanjiDisplay.jsx');
const HiraganaDisplay = require('./HiraganaDisplay.jsx');
const HintDisplay = require('./HintDisplay.jsx');
const ImageDisplay = require('./ImageDisplay.jsx');
const Controller = require('./Controller.jsx');



const Jp0 = React.createClass({

  // _isMounted: false,

  render: function () {

    let currentCard = this.state.cards[this.state.currentIndex];
    let hints = [];
    for (let hira of currentCard['hiragana']) {
      hints.push(this.state.hiragana[hira]['transliteration']);
    }


    return (
      <div className='Jp0'>
        <div className='top'>
          <ImageDisplay
            imgsrc={this.state.cards[this.state.currentIndex]['imgsrc']}
            name={this.state.cards[this.state.currentIndex]['name']}
            romaji={this.state.cards[this.state.currentIndex]['romaji']}
            charTypes={this.getCharTypes()}
            tableArrays={this.getTableArrays()}
            revealed={this.state.revealed.length}
            hintsNo={this.state.hintsNo}
            tableDisplayed={this.state.tableDisplayed}
            tableSelected={this.state.tableSelected}
            hideTable={this.hideTable}
            tableType={this.state.tableType}
            setTableType={this.setTableType}
            hiragana={this.state.hiragana}/>
          <HintDisplay

            hintClicked={this.revealHint}
            hintsList={hints}
            revealed={this.state.revealed}
            tableDisplayed={this.state.tableDisplayed}/>
        </div>
        <HiraganaDisplay
          hirChars={this.state.cards[this.state.currentIndex]['hiragana']} showTableWithSelected={this.showTableWithSelected}
          nextUp={this.findFirstHidden()}
          highlightingHir={this.state.highlightingHir} />
        <KanjiDisplay
          kanjiChars={this.state.cards[this.state.currentIndex]['kanji']}
          showTableWithAllSelected={this.showTableWithAllSelected} />
        <Controller
          nextCardButtonClicked={this.getNextCard}
          nextHintButtonClicked={this.nextHintButtonClicked}
          mouseOverHintButton={this.toggleHighlightingHir}
          revealButtonClicked={this.revealAll}
          hintsNo={this.state.hintsNo}
          revealed={this.state.revealed}/>

      </div>
    );

  },


  getInitialState: function () {
    return {
      cards: [{
        'name': 'init',
        'hiragana': ['I', 'N', 'I', 'T'],
        'kanji': 'KANJI',
        'imgsrc': 'res/Nightingale.JPG'
      }],
      hiragana: {'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init', 'type': 'init'},
                 'N':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init', 'type': 'init'},
                 'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init', 'type': 'init'},
                 'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init', 'type': 'init'},
                 'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init', 'type': 'init'},
                 'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init', 'type': 'init'},
                 'T':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init', 'type': 'init', 'chart': ['gojūon', 0, 0]}},
      currentIndex: 0,
      hintsNo: 4,
      hidden: [],
      revealed: [],
      highlightingHir: false,
      tableDisplayed: false,
      tableType: 'gojūon',
      tableSelected: []
    };
  },


  componentDidMount: function () {
    this.setState({cards: Cards,
                   hiragana: Hiragana,
                   currentIndex: 0,
                   hidden: this.initialiseHiddenState(Cards[0]['hiragana'].length),
                   revealed: [],
                   hintsNo: Cards[0]['hiragana'].length});
  },

  initialiseHiddenState: function (wordLength) {
    let hidden = [];
    let i = 0;
    while (i < wordLength) {
      hidden.push(i);
      i++;
    }
    return hidden;
  },


  getCharTypes: function () {
    let cardHiragana = this.state.cards[this.state.currentIndex].hiragana;
    let types = [];
    for (let i = 0; i < cardHiragana.length; i++) {
      types.push(this.state.hiragana[cardHiragana[i]].hiragana_type);
    }
    return types;
  },

  getTableArrays: function () {
    let arr = [];
    for (const key of Object.keys(this.state.hiragana)) {
      arr.push(this.state.hiragana[key]);
    }
    let goujArr = [];
    let dakArr = [];
    let yoonArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]['table'] != null) {
        if (arr[i]['table'][0] === 'gojūon') {
          goujArr.push(arr[i]);
        }
        if (arr[i]['table'][0] === 'dakuten') {
          dakArr.push(arr[i]);
        }
        if (arr[i]['table'][0] === 'yōon') {
          yoonArr.push(arr[i]);
        }
      }
    }
  return [goujArr, dakArr, yoonArr];
  },


//moves app to next card if all hints revealed or reveals first hidden hint.
  nextHintButtonClicked: function () {
    let firstHidden = this.findFirstHidden();
    let hintsNo = this.state.hintsNo;
    let revealed = this.state.revealed;
    if (!firstHidden) {
      this.getNextCard();
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
    // let revealed = this.state.revealed;
    // let hintsNo = this.state.hintsNo;
    // if (hintsNo === revealed.length) {
    //   return -1;
    // } else if (revealed.indexOf(0) === -1) {
    //   return 0;
    // } else {
    //   for (let i=0; i<revealed.length; i++) {
    //     if (revealed[i + 1] - revealed[i] >= 2 || revealed.indexOf(i + 1) === -1) {
    //       return(i + 1);
    //     }
    //   }
    // }
    return this.state.hidden[0];
  },


  getNextCard: function () {

    let newCurrent = this.state.currentIndex + 1;
    let hintsNo = Cards[newCurrent]['hiragana'].length;
    let hidden = this.initialiseHiddenState(hintsNo);

    this.setState({cards: Cards,
                   hiragana: Hiragana,
                   currentIndex: newCurrent,
                   hidden: hidden,
                   revealed: [],
                   hintsNo: hintsNo,
                   tableDisplayed: false,
                   tableType: 'gojūon',
                   tableSelected: []});
  },


  revealAll: function () {
    let rev = [];
    for (var i = 0; i < this.state.cards[this.state.currentIndex]['hiragana'].length; i++) {
      rev.push(i);
    }
    this.setState(
      {revealed: rev,
       tableDisplayed: false}
    )
  },


  toggleHighlightingHir: function () {
    if (this.state.highlightingHir === false) {
      this.setState({highlightingHir: true});
    } else {
      this.setState({highlightingHir: false});
    }
  },


  // revealHint: function (index) {
  //   let revealed = this.state.revealed;
  //   revealed.push(index);
  //   if (revealed.length === this.state.hintsNo) {
  //     this.setState(
  //       {revealed: revealed,
  //        tableDisplayed: false}
  //     );
  //   } else {
  //     this.setState(
  //       {revealed: revealed}
  //     );
  //   }
  // },

  revealHint: function (hintIndex) {
    console.log('reveling!');
    let revealed = this.state.revealed;
    this.removeFromHiddenState(hintIndex);
    revealed.push(hintIndex);
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

  removeFromHiddenState: function (hintIndex) {
    let hidden = this.state.hidden;
    let i = hidden.indexOf(hintIndex);
    hidden = hidden.splice(i, 1);
    this.setState({hidden: hidden});
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
    if (this.state.tableDisplayed == true) {
      this.hideTable();
    } else {
      let hirChars=this.state.cards[this.state.currentIndex]['hiragana'];
      for (let hira of hirChars) {
        this.showTableWithSelected(hira, 'all');
      }
    }
  },

  //showTableWithAllSelected: function () {
  //   if (this.state.tableDisplayed == true) {
  //     this.hideTable();
  //   } else {
  //
  //   }
  // },

  hideTable: function () {
    this.setState({tableDisplayed: false});
  },


  setTableType: function (type) {
    this.setState({tableType: type});
  }















});

module.exports = Jp0;
