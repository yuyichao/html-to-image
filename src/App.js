import React, { Component } from 'react';
import logo from './logo.svg';
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";
import './App.css';

export default class App extends Component {

  componentDidMount() {
    htmlToImage.toPng(this.container)
      .then(function (dataUrl) {
        download(dataUrl, 'my-node.png');
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }

  render() {
    return (
      <div className="App" ref={(container) => { this.container = container }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
