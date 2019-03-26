import React, { Component } from 'react';
import {letterReader} from './letters.js';
import {sound} from './createSrc.js';
import {playSound} from './playSound.js';
import {removeInput} from './removeInput';
import './App.css';

class App extends Component {
  render() {
    let letters = letterReader();
        const dataKey = letters.map(letter => {
            return(
              <div className="key" data-key={letter.charCodeAt()} onKeyDown={playSound.bind(this)}>
                <kbd data-key={letter.charCodeAt()} onDoubleClick={removeInput.bind(this)}>{letter}
                    <audio data-key={letter.charCodeAt()}></audio>
                    <input data-key={letter.charCodeAt()} onClick={sound.bind(this)} type="file" accept="audio/*" id="recorder" className="upload"></input>
                </kbd>
              </div>
            );
        })
    return (
      <div className="keys">{dataKey}</div>
    );
  }
}

export default App;
