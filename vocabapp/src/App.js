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
    {English: [
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
    {Spanish: [
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
    {French: [
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
    {German: [
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
  //get what language the user wants to see
  handleLanguageShown = (e) => {
    this.setState({
      languageShown: e.target.value
    });
  }
  //get language user will translate to
  handleLanguageTranslate = (e) => {
    this.setState({
      languageTranslate: e.target.value
    });
  }
  //when start clicked word in specified language should be displayed
  handleStartClick = (i) => {
    let wordsArray = this.state.showWords.slice();
    let stateCopy = Object.assign({}, this.state.board);
    // let english = wordsArray.English;
    // let spanish = wordsArray.spanish;
    // let french = wordsArray.french;
    // let german = wordsArray.german;



    if(stateCopy.languageShown === "English" || stateCopy.languageShown === "Spanish" || stateCopy.languageShown === "French" || stateCopy.languageShown === "German") {
      //this was where i got stuck.
      console.log(wordsArray);
    }
    this.setState({
      showWords: wordsArray
    });
  }

  //get user's answer
  handleUserAnswer = (e) => {
    this.setState({
      userAnswer: e.target.value
    })
  }
  //clicked when user wants to check there answer
  handleTranslation = () => {

    let userInput = this.state.userAnswer;
    //checking to see if text click is valid
    if (userInput === "" || userInput === " ") {
      return;
    }
   }
   handleReset = () => {
     this.setState({
       languageShown: "",
       languageTranslate: "",
       userAnswer: ""
     })
   }
  render() {
    let word = this.state.words.map((language, i) => {
      return (
        <div id="words" key={i}>
          <p>{language.en}</p>
        </div>
      )
    })
    return (
      <div className="container">
        <div id="header">
          <h1>Vocabulary Study App</h1>
          <h2>Select your languages</h2>
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
          <button id="reset" onClick={() => this.handleReset()}>Reset</button>
        </section>
        <section id="flashcards">
          <div id="flashcard">
            {word}
            <label>What is the translation? </label>
            <input type="text" onChange={this.handleUserAnswer} value={this.state.userAnswer}/>
            <button onClick={this.handleTranslation}>Translate</button>
          </div>
          <div id="answer">
            <p>This will be the answer</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
