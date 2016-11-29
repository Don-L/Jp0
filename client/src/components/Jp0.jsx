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
        <HintDisplay hintsList={hints}/>
        <HiraganaDisplay hiraganaChars={this.state.words[this.state.currentIndex]['hiragana']} />
        <KanjiDisplay kanjiChars={this.state.words[this.state.currentIndex]['kanji']} />
        <ImageDisplay imgsrc={this.state.words[this.state.currentIndex]['imgsrc']}
                      name={this.state.words[this.state.currentIndex]['name']}
                      romaji={this.state.words[this.state.currentIndex]['romaji']} />
        <MagicButton buttonMessage={this.state.buttonMessage} />
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
      buttonMessage: 'Reveal Next'
    };
  },


  componentDidMount: function () {
    this.setState({words: Words,
                   hiragana: Hiragana});
  }










});

module.exports = Jp0;
