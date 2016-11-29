const React = require('react');
const Words = require('../res/words.js');
const Hiragana = require('../res/hiragana.js');
const KanjiDisplay = require('./KanjiDisplay.jsx');
const HiraganaDisplay = require('./HiraganaDisplay.jsx');
const HintDisplay = require('./HintDisplay.jsx');
const ImageDisplay = require('./ImageDisplay.jsx');
const MagicButton = require('./MagicButton.jsx');



const Jp0 = React.createClass({


  render: function () {

    let currentWord = this.state.words[this.state.currentIndex];
    let hints = [];
    for (let hira of currentWord['hiragana']) {
      hints.push(this.state.hiragana[hira]['transliteration']);
    }


    return (
      <div className='Jp0'>
        <HintDisplay hintsList={hints} revealed={this.state.revealed}/>
        <HiraganaDisplay hiraganaChars={this.state.words[this.state.currentIndex]['hiragana']} />
        <KanjiDisplay kanjiChars={this.state.words[this.state.currentIndex]['kanji']} />
        <ImageDisplay imgsrc={this.state.words[this.state.currentIndex]['imgsrc']}
                      name={this.state.words[this.state.currentIndex]['name']}
                      romaji={this.state.words[this.state.currentIndex]['romaji']}
                      revealed={this.state.revealed.length}
                      hintsNo={this.state.hintsNo} />
        <MagicButton buttonMessage={this.state.buttonMessage} magicButtonClicked={this.magicButtonClicked}/>
      </div>
    );

  },


  getInitialState: function () {
    return {
      words: [{
        'name': 'init',
        'hiragana': ['I', 'N', 'I', 'T'],
        'kana': 'KANA',
        'imgsrc': 'res/Nightingale.JPG'
      }],
      hiragana: {'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},
                 'N':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},
                 'I':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},
                 'T':{'name': 'init', 'char': 'init', 'transliteration': 'init', 'sound': 'init'},},
      currentIndex: 0,
      buttonMessage: 'Hint',
      hintsNo: 4,
      revealed: []
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


  magicButtonClicked: function () {

    let hintsNo = this.state.hintsNo;
    let revealed = this.state.revealed;

    if (hintsNo === revealed.length) {
      this.getNextWord();
    } else if (revealed.length === 0) {
      let sound = new Audio(this.state.hiragana[this.state.words[this.state.currentIndex]['hiragana'][0]]['sound']);
      sound.play();
      this.setState({revealed: [0]});
    } else if (revealed.length === hintsNo - 1) {
      let sound = new Audio(this.state.hiragana[this.state.words[this.state.currentIndex]['hiragana'][this.state.hintsNo - 1]]['sound']);
      sound.play();
      let lastRevealed = revealed[revealed.length - 1];
      let newRevealed = lastRevealed + 1;
      revealed.push(newRevealed);
      this.setState({revealed: revealed,
                     buttonMessage: 'Next Word'});
    } else {
      let lastRevealed = revealed[revealed.length - 1];
      let newRevealed = lastRevealed + 1;
      revealed.push(newRevealed);
      let sound = new Audio(this.state.hiragana[this.state.words[this.state.currentIndex]['hiragana'][revealed.length - 1]]['sound']);
      sound.play();
      this.setState({revealed: revealed});
    }
  },


  getNextWord: function() {

    let hintsNo = Words[1]['hiragana'].length;

    this.setState({words: Words,
                   hiragana: Hiragana,
                   currentIndex: 1,
                   revealed: [],
                   hintsNo: hintsNo,
                   buttonMessage: 'Hint'});
  }













});

module.exports = Jp0;
