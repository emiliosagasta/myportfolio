/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function generator() {
  var options = (arguments.length) ? arguments[0] : {}
    , count = options.count || 1
    , units = options.units || 'sentences'
    , sentenceLowerBound = options.sentenceLowerBound || 5
    , sentenceUpperBound = options.sentenceUpperBound || 15
    , paragraphLowerBound = options.paragraphLowerBound || 3
    , paragraphUpperBound = options.paragraphUpperBound || 7
    , format = options.format || 'plain'
    , words = options.words || (__webpack_require__(3).words)
    , random = options.random || Math.random
    , suffix = options.suffix;

  if (!suffix) {
    var isNode =  true && module.exports;
    var isReactNative = typeof product !== 'undefined' && product.navigator === 'ReactNative';
    var isWindows = typeof process !== 'undefined' && 'win32' === process.platform;

    if (!isReactNative && isNode && isWindows) {
      suffix = '\r\n';
    } else {
      suffix = '\n';
    }
  }

  units = simplePluralize(units.toLowerCase());

  function randomInteger(min, max) {
    return Math.floor(random() * (max - min + 1) + min);
  };

  function randomWord(words) {
    return words[randomInteger(0, words.length - 1)];
  };

  function randomSentence(words, lowerBound, upperBound) {
    var sentence = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};

    while (bounds.min < bounds.max) {
      sentence += ' ' + randomWord(words);
      bounds.min++;
    }

    if (sentence.length) {
      sentence = sentence.slice(1);
      sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    }

    return sentence;
  };

  function randomParagraph(words, lowerBound, upperBound, sentenceLowerBound, sentenceUpperBound) {
    var paragraph = ''
      , bounds = {min: 0, max: randomInteger(lowerBound, upperBound)};

    while (bounds.min < bounds.max) {
      paragraph += '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
      bounds.min++;
    }

    if (paragraph.length) {
      paragraph = paragraph.slice(2);
      paragraph += '.';
    }

    return paragraph;
  }

  var iter = 0
    , bounds = {min: 0, max: count}
    , string = ''
    , prefix = ''
    , openingTag
    , closingTag;

  if (format === 'html') {
    openingTag = '<p>';
    closingTag = '</p>';
  }

  while (bounds.min < bounds.max) {
    switch (units.toLowerCase()) {
      case 'words':
        string += ' ' + randomWord(words);
        break;
      case 'sentences':
        string += '. ' + randomSentence(words, sentenceLowerBound, sentenceUpperBound);
        break;
      case 'paragraphs':
        var nextString = randomParagraph(words, paragraphLowerBound, paragraphUpperBound, sentenceLowerBound, sentenceUpperBound);

        if (format === 'html') {
          nextString = openingTag + nextString + closingTag;
          if (bounds.min < bounds.max - 1) {
            nextString += suffix; // Each paragraph on a new line
          }
        } else if (bounds.min < bounds.max - 1) {
          nextString += suffix + suffix; // Double-up the EOL character to make distinct paragraphs, like carriage return
        }

        string += nextString;

        break;
    }

    bounds.min++;
  }

  if (string.length) {
    var pos = 0;

    if (string.indexOf('. ') === 0) {
      pos = 2;
    } else if (string.indexOf('.') === 0 || string.indexOf(' ') === 0) {
      pos = 1;
    }

    string = string.slice(pos);

    if (units === 'sentences') {
      string += '.';
    }
  }

  return string;
};

function simplePluralize(string) {
  if (string.indexOf('s', string.length - 1) === -1) {
    return string + 's';
  }
  return string;
}

module.exports = generator;


/***/ }),
/* 3 */
/***/ ((module) => {

var dictionary = {
  words: [
    'ad',
    'adipisicing',
    'aliqua',
    'aliquip',
    'amet',
    'anim',
    'aute',
    'cillum',
    'commodo',
    'consectetur',
    'consequat',
    'culpa',
    'cupidatat',
    'deserunt',
    'do',
    'dolor',
    'dolore',
    'duis',
    'ea',
    'eiusmod',
    'elit',
    'enim',
    'esse',
    'est',
    'et',
    'eu',
    'ex',
    'excepteur',
    'exercitation',
    'fugiat',
    'id',
    'in',
    'incididunt',
    'ipsum',
    'irure',
    'labore',
    'laboris',
    'laborum',
    'Lorem',
    'magna',
    'minim',
    'mollit',
    'nisi',
    'non',
    'nostrud',
    'nulla',
    'occaecat',
    'officia',
    'pariatur',
    'proident',
    'qui',
    'quis',
    'reprehenderit',
    'sint',
    'sit',
    'sunt',
    'tempor',
    'ullamco',
    'ut',
    'velit',
    'veniam',
    'voluptate'
  ]
};

module.exports = dictionary;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var vscode = __webpack_require__(1);
var loremIpsum = __webpack_require__(2);

function activate(context) {
  var commands = [
    vscode.commands.registerCommand('lorem-ipsum.line', generateLine),
    vscode.commands.registerCommand('lorem-ipsum.paragraph', generateParagraph),
    vscode.commands.registerCommand('lorem-ipsum.multipleParagraphs', generateMultipleParagraphs)
  ];

  commands.forEach(function (command) {
    context.subscriptions.push(command);
  });
}

function insertText(lorem) {
  var editor = vscode.window.activeTextEditor;
  editor.edit(
    edit => editor.selections.forEach(
      selection => {
        edit.delete(selection);
        edit.insert(selection.start, loremIpsum(lorem));
      }
    )
  );
}

function generateLine() {
  insertText({
    count: 1,
    units: 'sentences'
  });
}

function generateParagraph() {
  insertText({
    count: 1,
    units: 'paragraphs'
  });
}

async function generateMultipleParagraphs() {
  const items = [];
  for (let i = 2; i <= 10; i++) {
    items.push(i.toString());
  }

  const count = await vscode.window.showQuickPick(items, { placeHolder: 'How many paragraphs?' });
  if (!count) {
    return;
  }

  insertText({
    count: Number.parseInt(count),
    units: 'paragraphs'
  });
}

exports.activate = activate;

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=extension.js.map