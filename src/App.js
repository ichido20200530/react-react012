import React, { Component, createContext } from 'react';
import './App.css';

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px",
  },
  dark:{
    backgroundColor: "#006",
    color: "#eef",
    padding: "10px",
  }
};

const ThemeContext = createContext( theme.dark );  //★

export default class App extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <div style={this.context}>
        <Title value="Content page" />
        <Message value="This is a Content sample." />
        <Message value="※これはテーマのサンプルです。" />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return (
      <p style={this.context}>{this.props.value}</p>
    );
  }
}
