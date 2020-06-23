import React from 'react';
import ReactDOM from 'react-dom';
import { Entry, generateEntry } from "./components/Entry";
import Title from "./components/Title";
import entries from "./models/emojis";

ReactDOM.render(
  <div className="container">
    <Title pageTitle="Emojipedia"/>
    <div className="content">
      {entries.map(generateEntry)}
    </div>
  </div>,
  document.querySelector("#root")
);

