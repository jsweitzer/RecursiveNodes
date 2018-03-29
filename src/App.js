import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Nodes} from './Nodes';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row"><Nodes collection={[{type:'root'}, {collection: [{type:'clause'},{type:'clause'}, {collection: [{type:'conditions'},{type:'conditions'},{type:'conditions'}]}]}]}/></div>
      </div>
    );
  }
}

export default App;
