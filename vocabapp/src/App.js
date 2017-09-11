import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
  words: [
    { "en": "cat", "de": "Katz", "fr": "chat", "sp": "gato" },
    { "en": "dog", "de": "Hund", "fr": "chien", "sp": "perro" },
    { "en": "man", "de": "Mann", "fr": "homme", "sp": "hombre" },
    { "en": "woman", "de": "Frau", "fr": "femme", "sp": "mujer" },
    { "en": "boy", "de": "Junge", "fr": "garcon", "sp": "chico" },
    { "en": "girl", "de": "Madchen", "fr": "fille", "sp": "niña" },
    { "en": "house", "de": "Haus", "fr": "maison", "sp": "casa" },
    { "en": "car", "de": "Auto", "fr": "voiture", "sp": "coche" },
    { "en": "plane", "de": "Fleugzug", "fr": "avion", "sp": "avión" },
    { "en": "butterfly", "de": "Schmetterling", "fr": "papillon", "sp": "mariposa" },
  ],
  languageShown: "",
  languageTranslate: "",
  userAnswer: "",
  showWords: [
    {english: [
      "cat ",
      "dog ",
      "man ",
      "woman ",
      "boy ",
      "girl ",
      "house ",
      "car ",
      "plane ",
      "butterfly "
    ]},
    {spanish: [
      "gato ",
      "perro ",
      "hombe ",
      "mujer ",
      "chico ",
      "niña ",
      "casa ",
      "coche ",
      "avión ",
      "mariposa "
    ]},
    {french: [
      "chat ",
      "chien ",
      "homme ",
      "femme ",
      "garcon ",
      "fille ",
      "maison ",
      "voiture ",
      "avion ",
      "papillon "
    ]},
    {german: [
      "Katz ",
      "Hund ",
      "Mann ",
      "Frau ",
      "Junge ",
      "Madchen ",
      "Haus ",
      "Auto ",
      "Fleugzug ",
      "Schmetterling "
    ]},

  ]
}
  }
  handleLanguageShown = (e) => {
    this.setState({
      languageShown: e.target.value
    });
  }

  handleLanguageTranslate = (e) => {
    this.setState({
      languageTranslate: e.target.value
    });
  }

  handleStartClick = (language, i) => {
    let wordsArray = this.state.showWords.slice();
    let stateCopy = Object.assign({}, this.state.board);
    let english = wordsArray.english;
    let spanish = wordsArray.spanish;
    let french = wordsArray.french;
    let german = wordsArray.german;

    // let languageArray = this.state.showWords.slice();
    if(stateCopy.languageShown === english || stateCopy.languageShown === spanish || stateCopy.languageShown === french || stateCopy.languageShown === german) {
      //this was where i got stuck.
      return;
    }
    if(stateCopy.languageTranslate === english || stateCopy.languageTranslate === spanish || stateCopy.languageTranslate === french || stateCopy.languageTranslate === german) {
      return;
    }
    this.setState({
      showWords: wordsArray
    });
  }

  handleUserAnswer = (e) => {
    this.setState({
      userAnswer: e.target.value
    })
  }

  handleTranslation = () => {

    let answer = this.state.userAnswer;
    // let language = this.state.languageTranslate;

    if (answer === "") {
      return true;
    }
   }
  render() {
    let word = this.state.showWords.map((language, i) => {
      return (
        <div id="words" key={i}>
          <p>{language.english}</p>
        </div>
      )
    })
    let answer = this.state.showWords.map((language, i) => {
      return (
        <div>
          {language.spanish}
        </div>
      )
    })
    return (
      <div className="container">
        <div id="header">
          <h1>Vocabulary Study App</h1>
        </div>
        <section className="questions">
          <div className="begin firstQuestion">
            <label>Which language would you like to show on the cards?</label>
            <select id="languageShown" onChange={this.handleLanguageShown} value={this.state.languageShown}>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <div className="begin secondQuestion">
            <label>What language will you be translating to?</label>
            <select id="languageTranslate" onChange={this.handleLanguageTranslate} value={this.state.languageTranslate}>
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
          <button id="start" onClick={() => this.handleStartClick()}>Start</button>
        </section>
        <section id="flashcards">
          <div id="flashcard">
            {word}
            <label>What is the translation? </label>
            <input type="text" onChange={this.handleUserAnswer}/>
            <button onClick={this.handleTranslation}>Translate</button>
          </div>
          <div id="answer">
          {answer}
            <p>This will be the answer</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
