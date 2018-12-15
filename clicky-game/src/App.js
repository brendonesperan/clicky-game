import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Variables from "./components/Variables";

import React, { Component } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Container, Col, Row } from './components/Grid';
import './App.css';
import { Objects } from './components/Objects';
import Images from './components/Objects';



class App extends Component {

  state = {
    array: Objects,
    guesses: 0,
    wins: 0,
    losses: 0
  }

      // Fisher–Yates Shuffle (Knuth variant)
    // To shuffle an array a of n elements (indices 0..n-1):
    //   for i from n - 1 downto 1 do
    //        j <- random integer with 0 <= j <= i
    //        exchange a[j] and a[i]

    // jQuery specific:
    // 1) remove elements from DOM and convert them into a native JavaScript array
    // 2) apply algorithm
    // 3) inject the array back to DOM
    shuffle(array) {
      var x = array.length, z, i;
    
      // While there remain elements to shuffle…
      while (x) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * x--);
    
        // And swap it with the current element.
        z = array[x];
        array[x] = array[i];
        array[i] = z;
      }
    
      return array;
    }

    incrementWins() {
      const wins = this.state.wins +1;
      this.setState({ wins: wins });
    };
  
    incrementLosses() {
      const losses = this.state.losses + 1;
      this.setState({ losses: losses })
    };
  
    incrementGuesses() {
      const guesses = this.state.guesses +1;
      this.setState({ guesses: guesses })
    };
  
    resetGuesses() {
      this.setState({ guesses: 0 })
    };
  
    resetClicked() {
      const reset = this.state.array;
      reset.forEach(element => {
        element.clicked = 'false'
      })
    }

    handleClickEvent(character) {
      if (character.clicked === 'true') {
        console.log("Already true");
        this.resetGuesses();
        this.incrementLosses();
        this.resetClicked();
        this.shuffle(Objects);
      }
      else if (this.state.guesses === 11) {
        this.incrementWins();
        this.resetGuesses();
        this.resetClicked();
      }
      else {
        character.clicked = 'true';
        this.incrementGuesses();
        const spread = this.state.array;
        spread.splice(this.state.array.indexOf(character), 1, character)    
        this.setState({ array: spread });
        this.shuffle(Objects);  
      }
    }
  
  
  
  render() {
    return (
      <div>
        <Nav 
          guesses={this.state.guesses}
          wins={this.state.wins}
          losses={this.state.losses}
        />
        <Container>
          <Row>
            <Col size="md-12">
                {Objects.map(character => {
                  return(
                    <Images
                    key={character.name}
                    src={"images/" + character.image}
                    className="Objects" 
                    onClick={() => this.handleClickEvent(character)}
                    clicked={character.clicked}
                    alt = {character.name}
                    >
                    </Images>
                  )
                })}
            </Col>
          </Row>
        </Container>
        <Footer>
        </Footer>
      </div>
    
    );
  }
}

export default App;
