import React from "react";
import {Guesses} from './Guesses';
import {Wins} from './Wins';
import {Losses} from './Losses';
import "./Navbar.css";

const styles = {
    brand: {
        color: "#feda6a"
    },
    navBar: {
        height: 100,
        marginBottom: "2%"
    },
    scores: {
        color: "#feda6a",
        marginRight: 100
    }
}

const Navbar = (props) => (
    <nav className="navbar" style={styles.navBar}>
        <h1 style={styles.brand}>Clicky Game</h1>
        <Guesses 
        style={styles.scores}
        value = {props.guesses}
        >
        </Guesses>
        <Wins 
        style={styles.scores}
        value = {props.wins}
        >
        </Wins>
        <Losses 
        style={styles.scores}
        value = {props.losses}
        >
        </Losses>
    </nav>
)

export default Navbar;