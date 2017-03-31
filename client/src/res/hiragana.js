module.exports = {

  'empty_string': {
    'char': ''
  },

  ' ': {
    'char': ' '
  },

  'yōon': {
    'char': 'yōon'
  },

  '\u3099': {
    'char': '゛'
  },

  '\u309A': {
    'char': '゜'
  },

  '\u3041': {
    'name': 'hiragana letter small a',
    'char': 'ぁ',
    'unicode': '\u3041',
    'transliteration': 'a',
    'yōon_parent': '\u3042',
    'hiragana_type': 'small gojūon'
  },

  '\u3042': {
    'name': 'hiragana letter a',
    'char': 'あ',
    'unicode': '\u3042',
    'transliteration': 'a',
    'yōon_child': '\u3041',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 0, 0]
  },

  '\u3043': {
    'name': 'hiragana letter small i',
    'char': 'ぃ',
    'unicode': '\u3043',
    'transliteration': 'i',
    'yōon_parent': '\u3044',
    'hiragana_type': 'small gojūon'
  },

  '\u3044': {
    'name': 'hiragana letter i',
    'char': 'い',
    'unicode': '\u3044',
    'transliteration': 'i',
    'yōon_child': '\u3043',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 0, 1]
  },

  '\u3045': {
    'name': 'hiragana letter small u',
    'char': 'ぅ',
    'unicode': '\u3045',
    'transliteration': 'u',
    'yōon_parent': '\u3046',
    'hiragana_type': 'small gojūon'
  },

  '\u3046': {
    'name': 'hiragana letter u',
    'char': 'う',
    'unicode': '\u3046',
    'transliteration': 'u',
    'sound': 'res/snd/3046.ogg',
    'yōon_child': '\u3045',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 0, 2]
  },

  '\u3047': {
    'name': 'hiragana letter small e',
    'char': 'ぇ',
    'unicode': '\u3047',
    'transliteration': 'e',
    'yōon_parent': '\u3048',
    'hiragana_type': 'small gojūon'
  },

  '\u3048': {
    'name': 'hiragana letter e',
    'char': 'え',
    'unicode': '\u3048',
    'transliteration': 'e',
    'yōon_child': '\u3047',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 0, 3]
  },

  '\u3049': {
    'name': 'hiragana letter small o',
    'char': 'ぉ',
    'unicode': '\u3049',
    'transliteration': 'o',
    'yōon_parent': '\u304A',
    'hiragana_type': 'small gojūon'
  },

  '\u304A': {
    'name': 'hiragana letter o',
    'char': 'お',
    'unicode': '\u304A',
    'transliteration': 'o',
    'sound': 'res/snd/304A.ogg',
    'yōon_child': '\u3049',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 0, 4]
  },

  '\u304B': {
    'name': 'hiragana letter ka',
    'char': 'か',
    'unicode': '\u304B',
    'transliteration': 'ka',
    'sound': 'res/snd/304B.ogg',
    'dakuten_child': '\u304C',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 1, 0]
  },

  '\u304C': {
    'name': 'hiragana letter ga',
    'char': 'が',
    'unicode': '\u304C',
    'transliteration': 'ga',
    'dakuten_parent': '\u304B',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 0, 0]
  },

  '\u304D': {
    'name': 'hiragana letter ki',
    'char': 'き',
    'unicode': '\u304D',
    'transliteration': 'ki',
    'dakuten_child': '\u304E',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 1, 1]
  },

  '\u304E': {
    'name': 'hiragana letter gi',
    'char': 'ぎ',
    'unicode': '\u304E',
    'transliteration': 'gi',
    'dakuten_parent': '\u304D',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 0, 1]
  },

  '\u304F': {
    'name': 'hiragana letter ku',
    'char': 'く',
    'unicode': '\u304F',
    'transliteration': 'ku',
    'dakuten_child': '\u3050',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 1, 2]
  },

  '\u3050': {
    'name': 'hiragana letter gu',
    'char': 'ぐ',
    'unicode': '\u3050',
    'transliteration': 'gu',
    'dakuten_parent': '\u304F',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 0, 2]
  },

  '\u3051': {
    'name': 'hiragana letter ke',
    'char': 'け',
    'unicode': '\u3051',
    'transliteration': 'ke',
    'dakuten_child': '\u3052',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 1, 3]
  },

  '\u3052': {
    'name': 'hiragana letter ge',
    'char': 'げ',
    'unicode': '\u3052',
    'transliteration': 'ge',
    'dakuten_parent': '\u3051',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 0, 3]
  },

  '\u3053': {
    'name': 'hiragana letter ko',
    'char': 'こ',
    'unicode': '\u3053',
    'transliteration': 'ko',
    'dakuten_child': '\u3054',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 1, 4]
  },

  '\u3054': {
    'name': 'hiragana letter go',
    'char': 'ご',
    'unicode': '\u3054',
    'transliteration': 'go',
    'dakuten_parent': '\u3053',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 0, 4]
  },

  '\u3055': {
    'name': 'hiragana letter sa',
    'char': 'さ',
    'unicode': '\u3055',
    'transliteration': 'sa',
    'dakuten_child': '\u3056',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 2, 0]
  },

  '\u3056': {
    'name': 'hiragana letter za',
    'char': 'ざ',
    'unicode': '\u3056',
    'transliteration': 'za',
    'dakuten_parent': '\u3055',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 1, 0]
  },

  '\u3057': {
    'name': 'hiragana letter si',
    'char': 'し',
    'unicode': '\u3057',
    'transliteration': 'shi',
    'dakuten_child': '\u3058',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 2, 1]
  },

  '\u3058': {
    'name': 'hiragana letter zi',
    'char': 'じ',
    'unicode': '\u3058',
    'transliteration': 'zi',
    'dakuten_parent': '\u3057',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 1, 1]
  },

  '\u3059': {
    'name': 'hiragana letter su',
    'char': 'す',
    'unicode': '\u3059',
    'transliteration': 'su',
    'dakuten_child': '\u305A',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 2, 2]
  },

  '\u305A': {
    'name': 'hiragana letter zu',
    'char': 'ず',
    'unicode': '\u305A',
    'transliteration': 'zu',
    'dakuten_parent': '\u3059',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 1, 2]
  },

  '\u305B': {
    'name': 'hiragana letter se',
    'char': 'せ',
    'unicode': '\u305B',
    'transliteration': 'se',
    'dakuten_child': '\u305C',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 2, 3]
  },

  '\u305C': {
    'name': 'hiragana letter ze',
    'char': 'ぜ',
    'unicode': '\u305C',
    'transliteration': 'ze',
    'dakuten_parent': '\u305B',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 1, 3]
  },

  '\u305D': {
    'name': 'hiragana letter so',
    'char': 'そ',
    'unicode': '\u305D',
    'transliteration': 'so',
    'dakuten_child': '\u305E',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 2, 4]
  },

  '\u305E': {
    'name': 'hiragana letter zo',
    'char': 'ぞ',
    'unicode': '\u305E',
    'transliteration': 'zo',
    'dakuten_parent': '\u305D',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 1, 4]
  },

  '\u305F': {
    'name': 'hiragana letter ta',
    'char': 'た',
    'unicode': '\u305F',
    'transliteration': 'ta',
    'dakuten_child': '\u3060',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 3, 0]
  },

  '\u3060': {
    'name': 'hiragana letter da',
    'char': 'だ',
    'unicode': '\u3060',
    'transliteration': 'da',
    'dakuten_parent': '\u305F',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 2, 0]
  },

// or chi? - check transliteration
  '\u3061': {
    'name': 'hiragana letter ti',
    'char': 'ち',
    'unicode': '\u3061',
    'transliteration': 'ti',
    'sound': 'res/snd/3061.ogg',
    'dakuten_child': '\u3062',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 3, 1]
  },

// di or ji?
  '\u3062': {
    'name': 'hiragana letter di',
    'char': 'ぢ',
    'unicode': '\u3062',
    'transliteration': 'di',
    'dakuten_parent': '\u3061',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 2, 1]
  },

  '\u3063': {
    'name': 'hiragana letter small tu',
    'char': 'っ',
    'unicode': '\u3063',
    'transliteration': '!',
    'yōon_parent': '\u3064',
    'hiragana_type': 'small gojūon'
  },

//tu or tsu?
  '\u3064': {
    'name': 'hiragana letter tu',
    'char': 'つ',
    'unicode': '\u3064',
    'transliteration': 'tsu',
    'yōon_child': '\u3063',
    'dakuten_child': '\u3065',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 3, 2]
  },

//need this? - uncommon
  '\u3065': {
    'name': 'hiragana letter du',
    'char': 'づ',
    'unicode': '\u3065',
    'transliteration': 'du',
    'dakuten_parent': '\u3064',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 2, 2]
  },

  '\u3066': {
    'name': 'hiragana letter te',
    'char': 'て',
    'unicode': '\u3066',
    'transliteration': 'te',
    'dakuten_child': '\u3067',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 3, 3]
  },

  '\u3067': {
    'name': 'hiragana letter de',
    'char': 'で',
    'unicode': '\u3067',
    'transliteration': 'de',
    'dakuten_parent': '\u3066',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 2, 3]
  },

  '\u3068': {
    'name': 'hiragana letter to',
    'char': 'と',
    'unicode': '\u3068',
    'transliteration': 'to',
    'dakuten_child': '\u3069',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 3, 4]
  },

  '\u3069': {
    'name': 'hiragana letter do',
    'char': 'ど',
    'unicode': '\u3069',
    'transliteration': 'do',
    'dakuten_parent': '\u3068',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 2, 4]
  },

  '\u306A': {
    'name': 'hiragana letter na',
    'char': 'な',
    'unicode': '\u306A',
    'transliteration': 'na',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 4, 0]
  },

  '\u306B': {
    'name': 'hiragana letter ni',
    'char': 'に',
    'unicode': '\u306B',
    'transliteration': 'ni',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 4, 1]
  },

  '\u306C': {
    'name': 'hiragana letter nu',
    'char': 'ぬ',
    'unicode': '\u306C',
    'transliteration': 'nu',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 4, 2]
  },

  '\u306D': {
    'name': 'hiragana letter ne',
    'char': 'ね',
    'unicode': '\u306D',
    'transliteration': 'ne',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 4, 3]
  },

  '\u306E': {
    'name': 'hiragana letter no',
    'char': 'の',
    'unicode': '\u306E',
    'transliteration': 'no',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 4, 4]
  },

  '\u306F': {
    'name': 'hiragana letter ha',
    'char': 'は',
    'unicode': '\u306F',
    'transliteration': 'ha',
    'dakuten_child': '\u3070',
    'handakuten_child': '\u3071',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 5, 0]
  },

  '\u3070': {
    'name': 'hiragana letter ba',
    'char': 'ば',
    'unicode': '\u3070',
    'transliteration': 'ba',
    'dakuten_parent': '\u306F',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 3, 0]
  },

  '\u3071': {
    'name': 'hiragana letter pa',
    'char': 'ぱ',
    'unicode': '\u3071',
    'transliteration': 'pa',
    'handakuten_parent': '\u306F',
    'hiragana_type': 'handakuten',
    'chart': ['dakuten', 4, 0]
  },

//lots of additional forms for hi
  '\u3072': {
    'name': 'hiragana letter hi',
    'char': 'ひ',
    'unicode': '\u3072',
    'transliteration': 'hyi',
    'dakuten_child': '\u3073',
    'handakuten_child': '\u3074',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 5, 1]
  },

//check transliteration - bi or byi best?
  '\u3073': {
    'name': 'hiragana letter bi',
    'char': 'び',
    'unicode': '\u3073',
    'transliteration': 'byi',
    'dakuten_parent': '\u3072',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 3, 1]
  },
//check transliteration
  '\u3074': {
    'name': 'hiragana letter pi',
    'char': 'ぴ',
    'unicode': '\u3074',
    'transliteration': 'pyi',
    'handakuten_parent': '\u3072',
    'hiragana_type': 'handakuten',
    'chart': ['dakuten', 4, 1]
  },

  '\u3075': {
    'name': 'hiragana letter fu',
    'char': 'ふ',
    'unicode': '\u3075',
    'transliteration': 'fu',
    'dakuten_child': '\u3076',
    'handakuten_child': '\u3077',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 5, 2]
  },

  '\u3076': {
    'name': 'hiragana letter bu',
    'char': 'ぶ',
    'unicode': '\u3076',
    'transliteration': 'bu',
    'dakuten_parent': '\u3075',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 3, 2]
  },

  '\u3077': {
    'name': 'hiragana letter pu',
    'char': 'ぷ',
    'unicode': '\u3077',
    'transliteration': 'pu',
    'handakuten_parent': '\u3075',
    'hiragana_type': 'handakuten',
    'chart': ['dakuten', 4, 2]
  },

  '\u3078': {
    'name': 'hiragana letter he',
    'char': 'へ',
    'unicode': '\u3078',
    'transliteration': 'he',
    'dakuten_child': '\u3079',
    'handakuten_child': '\u307A',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 5, 3]
  },

  '\u3079': {
    'name': 'hiragana letter be',
    'char': 'べ',
    'unicode': '\u3079',
    'transliteration': 'be',
    'dakuten_parent': '\u3078',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 3, 3]
  },

  '\u307A': {
    'name': 'hiragana letter pe',
    'char': 'ぺ',
    'unicode': '\u307A',
    'transliteration': 'pe',
    'handakuten_parent': '\u3078',
    'hiragana_type': 'handakuten',
    'chart': ['dakuten', 4, 3]
  },

  '\u307B': {
    'name': 'hiragana letter ho',
    'char': 'ほ',
    'unicode': '\u307B',
    'transliteration': 'ho',
    'dakuten_child': '\u307C',
    'handakuten_child': '\u307D',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 5, 4]
  },

  '\u307C': {
    'name': 'hiragana letter bo',
    'char': 'ぼ',
    'unicode': '\u307C',
    'transliteration': 'bo',
    'dakuten_parent': '\u307B',
    'hiragana_type': 'dakuten',
    'chart': ['dakuten', 3, 4]
  },

  '\u307D': {
    'name': 'hiragana letter po',
    'char': 'ぽ',
    'unicode': '\u307D',
    'transliteration': 'po',
    'handakuten_parent': '\u307B',
    'hiragana_type': 'handakuten',
    'chart': ['dakuten', 4, 4]
  },

  '\u307E': {
    'name': 'hiragana letter ma',
    'char': 'ま',
    'unicode': '\u307E',
    'transliteration': 'ma',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 6, 0]
  },

  '\u307F': {
    'name': 'hiragana letter mi',
    'char': 'み',
    'unicode': '\u307F',
    'transliteration': 'mi',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 6, 1]
  },

  '\u3080': {
    'name': 'hiragana letter mu',
    'char': 'む',
    'unicode': '\u3080',
    'transliteration': 'mu',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 6, 2]
  },

  '\u3081': {
    'name': 'hiragana letter me',
    'char': 'め',
    'unicode': '\u3081',
    'transliteration': 'me',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 6, 3]
  },

  '\u3082': {
    'name': 'hiragana letter mo',
    'char': 'も',
    'unicode': '\u3082',
    'transliteration': 'mo',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 6, 4]
  },

  '\u3083': {
    'name': 'hiragana letter small ya',
    'char': 'ゃ',
    'unicode': '\u3083',
    'transliteration': 'ya',
    'yōon_parent': '\u3084',
    'hiragana_type': 'small gojūon'
  },

  '\u3084': {
    'name': 'hiragana letter ya',
    'char': 'や',
    'unicode': '\u3084',
    'transliteration': 'ya',
    'yōon_child': '\u3083',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 7, 0]
  },

  '\u3085': {
    'name': 'hiragana letter small yu',
    'char': 'ゅ',
    'unicode': '\u3085',
    'transliteration': 'yu',
    'yōon_parent': '\u3086',
    'hiragana_type': 'small gojūon'
  },

  '\u3086': {
    'name': 'hiragana letter yu',
    'char': 'ゆ',
    'unicode': '\u3086',
    'transliteration': 'yu',
    'yōon_child': '\u3085',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 7, 2]
  },

  '\u3087': {
    'name': 'hiragana letter small yo',
    'char': 'ょ',
    'unicode': '\u3087',
    'transliteration': 'yo',
    'yōon_parent': '\u3088',
    'hiragana_type': 'small gojūon'
  },

  '\u3088': {
    'name': 'hiragana letter yo',
    'char': 'よ',
    'unicode': '\u3088',
    'transliteration': 'yo',
    'yōon_child': '\u3087',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 7, 4]
  },

//ra or la?
  '\u3089': {
    'name': 'hiragana letter ra',
    'char': 'ら',
    'unicode': '\u3089',
    'transliteration': 'ra',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 8, 0]
  },

  '\u308A': {
    'name': 'hiragana letter ri',
    'char': 'り',
    'unicode': '\u308A',
    'transliteration': 'ri',
    'sound': 'res/snd/308A.ogg',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 8, 1]
  },

  '\u308B': {
    'name': 'hiragana letter ru',
    'char': 'る',
    'unicode': '\u308B',
    'transliteration': 'ru',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 8, 2]
  },

  '\u308C': {
    'name': 'hiragana letter re',
    'char': 'れ',
    'unicode': '\u308C',
    'transliteration': 're',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 8, 3]
  },

  '\u308D': {
    'name': 'hiragana letter ro',
    'char': 'ろ',
    'unicode': '\u308D',
    'transliteration': 'ro',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 8, 4]
  },

  '\u308F': {
    'name': 'hiragana letter wa',
    'char': 'わ',
    'unicode': '\u308F',
    'transliteration': 'wa',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 9, 0]
  },

//check transliteration - o or wo best?
  '\u3092': {
    'name': 'hiragana letter wo',
    'char': 'を',
    'unicode': '\u3092',
    'transliteration': 'o',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 9, 4]
  },

//changes sound depending on surrounding mora
  '\u3093': {
    'name': 'hiragana letter n',
    'char': 'ん',
    'unicode': '\u3093',
    'transliteration': 'n',
    'hiragana_type': 'gojūon',
    'chart': ['gojūon', 10, 0]
  },

  //yōon

  '\u304D\u3083': {
    'name': 'yōon with hiragana letter ki and hiragana letter small ya',
    'char': 'きゃ',
    'unicode': '\u304d\u3083',
    'transliteration': 'kya',
    'hiragana_type': 'yōon_with_gojūon',
    'chart': ['yōon', 0, 0]
  },

  '\u304D\u3085': {
    'name': 'yōon with hiragana letter ki and hiragana letter small yu',
    'char': 'きゅ',
    'unicode': '\u304D\u3085',
    'transliteration': 'kyu',
    'hiragana_type': 'yōon_with_gojūon',
    'chart': ['yōon', 0, 1]
  },

  '\u304D\u3087': {
    'name': 'yōon with hiragana letter ki and hiragana letter small yo',
    'char': 'きょ',
    'unicode': '\u304D\u3087',
    'transliteration': 'kyo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 0, 2]
  },

  '\u3057\u3083': {
    'name': 'yōon with hiragana letter si and hiragana letter small ya',
    'char': 'しゃ',
    'unicode': '\u3057\u3083',
    'transliteration': 'sha',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 1, 0]
  },

  '\u3057\u3085': {
    'name': 'yōon with hiragana letter si and hiragana letter small yu',
    'char': 'しゅ',
    'unicode': '\u3057\u3085',
    'transliteration': 'shu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 1, 1]
  },

  '\u3057\u3087': {
    'name': 'yōon with hiragana letter si and hiragana letter small yo',
    'char': 'しょ',
    'unicode': '\u3057\u3087',
    'transliteration': 'sho',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 1, 2]
  },

  '\u3061\u3083': {
    'name': 'yōon with hiragana letter ti and hiragana letter small ya',
    'char': 'ちゃ',
    'unicode': '\u3061\u3083',
    'transliteration': 'cha',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 2, 0]
  },

  '\u3061\u3085': {
    'name': 'yōon with hiragana letter ti and hiragana letter small yu',
    'char': 'ちゅ',
    'unicode': '\u3061\u3085',
    'transliteration': 'chu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 2, 1]
  },

  '\u3061\u3087': {
    'name': 'yōon with hiragana letter ti and hiragana letter small yo',
    'char': 'ちょ',
    'unicode': '\u3061\u3087',
    'transliteration': 'cho',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 2, 2]
  },

  '\u306B\u3083': {
    'name': 'yōon with hiragana letter ni and hiragana letter small ya',
    'char': 'にゃ',
    'unicode': '\u306B\u3083',
    'transliteration': 'nya',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 3, 0]
  },

  '\u306B\u3085': {
    'name': 'yōon with hiragana letter ni and hiragana letter small yu',
    'char': 'にゅ',
    'unicode': '\u3061\u3085',
    'transliteration': 'nyu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 3, 1]
  },

  '\u306B\u3087': {
    'name': 'yōon with hiragana letter ni and hiragana letter small yo',
    'char': 'にょ',
    'unicode': '\u306B\u3087',
    'transliteration': 'nyo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 3, 2]
  },

  '\u3072\u3083': {
    'name': 'yōon with hiragana letter hi and hiragana letter small ya',
    'char': 'ひゃ',
    'unicode': '\u3072\u3083',
    'transliteration': 'hya',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 4, 0]
  },

  '\u3072\u3085': {
    'name': 'yōon with hiragana letter hi and hiragana letter small yu',
    'char': 'ひゅ',
    'unicode': '\u3072\u3085',
    'transliteration': 'hyu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 4, 1]
  },

  '\u3072\u3087': {
    'name': 'yōon with hiragana letter hi and hiragana letter small yo',
    'char': 'ひょ',
    'unicode': '\u3072\u3087',
    'transliteration': 'hyo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 4, 2]
  },

  '\u307F\u3083': {
    'name': 'yōon with hiragana letter mi and hiragana letter small ya',
    'char': 'みゃ',
    'unicode': '\u307F\u3083',
    'transliteration': 'mya',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 5, 0]
  },

  '\u307F\u3085': {
    'name': 'yōon with hiragana letter mi and hiragana letter small yu',
    'char': 'みゅ',
    'unicode': '\u307F\u3085',
    'transliteration': 'myu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 5, 1]
  },

  '\u307F\u3087': {
    'name': 'yōon with hiragana letter mi and hiragana letter small yo',
    'char': 'みょ',
    'unicode': '\u307F\u3087',
    'transliteration': 'myo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 5, 2]
  },

  '\u308A\u3083': {
    'name': 'yōon with hiragana letter ri and hiragana letter small ya',
    'char': 'りゃ',
    'unicode': '\u308A\u3083',
    'transliteration': 'rya',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 6, 0]
  },

  '\u308A\u3085': {
    'name': 'yōon with hiragana letter ri and hiragana letter small yu',
    'char': 'りゅ',
    'unicode': '\u308A\u3085',
    'transliteration': 'ryu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 6, 1]
  },

  '\u308A\u3087': {
    'name': 'yōon with hiragana letter ri and hiragana letter small yo',
    'char': 'りょ',
    'unicode': '\u308A\u3087',
    'transliteration': 'ryo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 6, 2]
  },

  '\u304E\u3083': {
    'name': 'yōon with hiragana letter gi and hiragana letter small ya',
    'char': 'ぎゃ',
    'unicode': '\u304E\u3083',
    'transliteration': 'gya',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 7, 0]
  },

  '\u304E\u3085': {
    'name': 'yōon with hiragana letter gi and hiragana letter small yu',
    'char': 'ぎゅ',
    'unicode': '\u304E\u3085',
    'transliteration': 'gyu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 7, 1]
  },

  '\u304E\u3087': {
    'name': 'yōon with hiragana letter gi and hiragana letter small yo',
    'char': 'ぎょ',
    'unicode': '\u304E\u3087',
    'transliteration': 'gyo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 7, 2]
  },

//check transliterations for next 3
  '\u3058\u3083': {
    'name': 'yōon with hiragana letter zi and hiragana letter small ya',
    'char': 'じゃ',
    'unicode': '\u3058\u3083',
    'transliteration': 'ja',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 8, 0]
  },

  '\u3058\u3085': {
    'name': 'yōon with hiragana letter zi and hiragana letter small yu',
    'char': 'じゅ',
    'unicode': '\u3058\u3085',
    'transliteration': 'ju',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 8, 1]
  },

  '\u3058\u3087': {
    'name': 'yōon with hiragana letter zi and hiragana letter small yo',
    'char': 'じょ',
    'unicode': '\u3058\u3087',
    'transliteration': 'jo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 8, 2]
  },

  '\u3062\u3083': {
    'name': 'yōon with hiragana letter di and hiragana letter small ya',
    'char': 'ぢゃ',
    'unicode': '\u3062\u3083',
    'transliteration': 'ja',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 9, 0]
  },

  '\u3062\u3085': {
    'name': 'yōon with hiragana letter di and hiragana letter small yu',
    'char': 'ぢゅ',
    'unicode': '\u3062\u3085',
    'transliteration': 'ju',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 9, 1]
  },

  '\u3062\u3087': {
    'name': 'yōon with hiragana letter di and hiragana letter small yo',
    'char': 'ぢょ',
    'unicode': '\u3062\u3087',
    'transliteration': 'jo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 9, 2]
  },

  '\u3073\u3083': {
    'name': 'yōon with hiragana letter bi and hiragana letter small ya',
    'char': 'びゃ',
    'unicode': '\u3073\u3083',
    'transliteration': 'bya',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 10, 0]
  },

  '\u3073\u3085': {
    'name': 'yōon with hiragana letter bi and hiragana letter small yu',
    'char': 'びゅ',
    'unicode': '\u3073\u3085',
    'transliteration': 'byu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 10, 1]
  },

  '\u3073\u3087': {
    'name': 'yōon with hiragana letter bi and hiragana letter small yo',
    'char': 'びょ',
    'unicode': '\u3073\u3087',
    'transliteration': 'byo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 10, 2]
  },

  '\u3074\u3083': {
    'name': 'yōon with hiragana letter pi and hiragana letter small ya',
    'char': 'ぴゃ',
    'unicode': '\u3074\u3083',
    'transliteration': 'pya',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 11, 0]
  },

  '\u3074\u3085': {
    'name': 'yōon with hiragana letter pi and hiragana letter small yu',
    'char': 'ぴゅ',
    'unicode': '\u3074\u3085',
    'transliteration': 'pyu',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 11, 1]
  },

  '\u3074\u3087': {
    'name': 'yōon with hiragana letter pi and hiragana letter small yo',
    'char': 'ぴょ',
    'unicode': '\u3074\u3087',
    'transliteration': 'pyo',
    'hiragana_type': 'yōon',
    'chart': ['yōon', 11, 0]
  }

}
