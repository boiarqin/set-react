import React, { Component } from 'react';
import * as R from 'ramda';
import './App.css';

import Card from './card';
import { allSetCards, shuffleArray, isSet } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: shuffleArray(allSetCards),
      displayedCards: [],
      selectedCards: [],
      setsFound: 0
    };
    this.state.displayedCards = R.slice(0, 12, this.state.allCards);
    this.state.allCards = R.slice(12, this.state.allCards.length, this.state.allCards);
    
    this.clickCard = this.clickCard.bind(this);
    this.shuffleDisplayedCards = this.shuffleDisplayedCards.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  clickCard(selectedCard) {
    const selectedIdx = this.state.selectedCards.indexOf(selectedCard);
    let updatedAllCards = this.state.allCards;
    let updatedSelectedCards = [];
    let updatedDisplayedCards = this.state.displayedCards;
    let updatedSetsFound = this.state.setsFound;
    
    if (selectedIdx > -1) {
      // if this card is already selected, remove it
      updatedSelectedCards = [...this.state.selectedCards];
      updatedSelectedCards.splice(selectedIdx, 1);
    } else if (this.state.selectedCards.length === 3){
      // if too many cards are already selected, clear them out
      updatedSelectedCards = [selectedCard];
    } else {
      // else just add this card to list
      updatedSelectedCards = [...this.state.selectedCards, selectedCard];

      // check if this is a set
      if (updatedSelectedCards.length === 3){
        const cardObjs = R.map(idx => this.state.displayedCards[idx], updatedSelectedCards);
        if (isSet(cardObjs)) {          
          updatedDisplayedCards = R.addIndex(R.filter)(
            (val, ind) => !R.contains(ind, updatedSelectedCards),
            updatedDisplayedCards
          );

          updatedDisplayedCards = updatedDisplayedCards.concat(R.slice(0, 3, updatedAllCards));
          updatedAllCards = R.slice(3, updatedAllCards.length, updatedAllCards);
          
          updatedSelectedCards = [];
          updatedSetsFound++;
        }
      }
    }
    
    this.setState({
      allCards: updatedAllCards,
      selectedCards: updatedSelectedCards,
      displayedCards: updatedDisplayedCards,
      setsFound: updatedSetsFound
    });
  }

  shuffleDisplayedCards(e) {
    this.setState({
      selectedCards: [],
      displayedCards: shuffleArray(this.state.displayedCards)
    });
  }

  restartGame(e) {
    const newAllCards = shuffleArray(allSetCards);
    this.setState({
      allCards: R.slice(12, newAllCards.length, newAllCards),
      displayedCards: R.slice(0, 12, newAllCards),
      selectedCards: [],
      setsFound: 0
    });
  }

  render() {
    const cardComponents = (card, idx) => {
      return <Card
        key={card.number+'-'+card.shape+'-'+card.color+'-'+card.fill}
        index={idx}
        number={card.number}
        shape={card.shape}
        color={card.color}
        fill={card.fill}
        clickCard={this.clickCard}
        isSelected={this.state.selectedCards.indexOf(idx) > -1}
      />
    };
    const cardsToDisplay = R.addIndex(R.map)(cardComponents, this.state.displayedCards);
    
    return (
      <div className="App">
        <h1 className="App-title">SET</h1>
        <div className="cards-grid">
          {cardsToDisplay}
        </div>
        <button onClick={this.shuffleDisplayedCards}>Shuffle Cards</button>
        <button onClick={this.restartGame}>Restart Game</button>
        <div className="score">
          <strong>Sets found:</strong> {this.state.setsFound}
        </div>
      </div>
    );
  }
}

export default App;
