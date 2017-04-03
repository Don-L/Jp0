const React = require('react');
const Cards = require('../res/cards.js');
const Hiragana = require('../res/hiragana.js');
const KanjiDisplay = require('./KanjiDisplay.jsx');
const HiraganaDisplay = require('./HiraganaDisplay.jsx');
const HintDisplay = require('./HintDisplay.jsx');
const ImageDisplay = require('./ImageDisplay.jsx');
const Controller = require('./Controller.jsx');


const Jp0 = React.createClass({

  render: function () {
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
            hintsNo={this.state.cards[this.state.currentIndex]['hiragana'].length}
            tableDisplayed={this.state.tableDisplayed}
            tableSelected={this.state.tableSelected}
            hideTable={this.hideTable}
            tableType={this.state.tableType}
            setTableType={this.setTableType}
            hiragana={this.state.hiragana}/>
          <HintDisplay
            hintClicked={this.revealHint}
            hintsList={this.getHints(this.state.cards[this.state.currentIndex])}
            revealed={this.state.revealed}
            tableDisplayed={this.state.tableDisplayed}
            highlightGroup={this.state.highlightGroup}
            setHighlightGroup={this.setHighlightGroup}/>
        </div>
        <HiraganaDisplay
          hirChars={this.state.cards[this.state.currentIndex]['hiragana']}
          showTableWithSelected={this.showTableWithSelected}
          highlightGroup={this.state.highlightGroup}
          setHighlightGroup={this.setHighlightGroup}/>
        <KanjiDisplay
          kanjiChars={this.state.cards[this.state.currentIndex]['kanji']}
          showTableWithAllSelected={this.showTableWithAllSelected} />
        <Controller
          getNextCard={this.getNextCard}
          showNextHintOrNewCard={this.showNextHintOrNewCard}
          revealAll={this.revealAll}
          hintsNo={this.state.cards[this.state.currentIndex]['hiragana'].length}
          revealed={this.state.revealed}
          hidden={this.state.hidden}
          setHighlightGroup={this.setHighlightGroup}/>
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
      hidden: [],
      revealed: [],
      highlightGroup: null,
      tableDisplayed: false,
      tableType: 'gojūon',
      tableSelected: []
    };
  },

  componentDidMount: function () {
    let currentIndex = 0;
    this.setState({cards: Cards,
                   hiragana: Hiragana,
                   currentIndex: currentIndex,
                   hidden: this.initialiseHiddenState(Cards[currentIndex]['hiragana'].length),
                   revealed: []});
  },

  setHighlightGroup: function (hintOrHirIndex, onOrOff) {
    if (onOrOff === 'on') {
      this.setState({highlightGroup: hintOrHirIndex});
    } else {
      this.setState({highlightGroup: null});
    }
  },

  getHints: function (card) {
    let hints = [];
    for (let hira of card['hiragana']) {
      hints.push(this.state.hiragana[hira]['transliteration']);
    }
    return hints;
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

  showNextHintOrNewCard: function () {
    if (this.state.hidden.length === 0) {
      this.getNextCard();
    } else {
      this.revealHint(this.state.hidden[0]);
    }
  },

  getNextCard: function (nextCardButtonClicked) {
    let newCurrent = this.state.currentIndex + 1;
    let hintsNo = Cards[newCurrent]['hiragana'].length;
    let hidden = this.initialiseHiddenState(hintsNo);
    let highlightGroup = null;

    if (!nextCardButtonClicked) {
      highlightGroup = 0;
    }

    this.setState({cards: Cards,
                   hiragana: Hiragana,
                   currentIndex: newCurrent,
                   hidden: hidden,
                   revealed: [],
                   highlightGroup: highlightGroup,
                   tableDisplayed: false,
                   tableType: 'gojūon',
                   tableSelected: []});
  },

  revealAll: function () {
    for (let i = 0; i < this.state.hidden.length; i++) {
      this.addToRevealedState(this.state.hidden[i]);
    };
    this.hideTable();
    this.setState({hidden: []});
  },

  // toggleHighlightingHir: function () {
  //   if (this.state.highlightingHir === false) {
  //     this.setState({highlightingHir: true});
  //   } else {
  //     this.setState({highlightingHir: false});
  //   }
  // },

  revealHint: function (hintIndex) {
    this.addToRevealedState(hintIndex);
    this.removeFromHiddenState(hintIndex);
    if (this.state.hidden.length === 0) {
      this.hideTable();
    }
  },

  addToRevealedState: function (hintIndex) {
    let revealed = this.state.revealed;
    revealed.push(hintIndex);
    this.setState({revealed: revealed});
  },

  removeFromHiddenState: function (hintIndex) {
    let hidden = this.state.hidden;
    let i = hidden.indexOf(hintIndex);
    hidden.splice(i, 1);
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

  hideTable: function () {
    this.setState({tableDisplayed: false});
  },

  setTableType: function (type) {
    this.setState({tableType: type});
  }

});

module.exports = Jp0;
