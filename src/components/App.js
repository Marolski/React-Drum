import React, { Component } from 'react';
import {letterReader} from './letters.js';
import {sound} from './createSrc.js';
import {playSound} from './playSound.js';
import {removeInput} from './removeInput';
import './App.css';

class App extends Component {
   

//evvents plays sound and hiding input
  componentDidMount() {
    document.addEventListener('keydown', playSound);
    document.addEventListener('keydown',removeInput);
  }

  render() {
    //array of loaded chars in letters.js
    let letters = letterReader();
    //creating divs for all letters
        const dataKey = letters.map(letter => {
            return(
              <div className="key" data-key={letter.toUpperCase().charCodeAt()}>
                <kbd data-key={letter.toUpperCase().charCodeAt()} onDoubleClick={removeInput.bind(this)}>{letter}
                    <audio data-key={letter.toUpperCase().charCodeAt()}></audio>
                    <input data-key={letter.toUpperCase().charCodeAt()} onClick={sound.bind(this)} type="file" accept="audio/*" id="recorder" className="upload"></input>
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
