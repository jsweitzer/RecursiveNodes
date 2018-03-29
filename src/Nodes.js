import React, { Component } from 'react';
import {Node} from './Node';

export class Nodes extends Component {
    constructor(props){
        super(props);
    }
    buildNodes = (item) => {
        console.log(item);
        if(item.collection) {
          return( <div className="row nodes"><Nodes key={Date.now.toString()} collection={item.collection} /></div>);
        } else {
            return (<div><Node key={Date.now.toString()} item={item} customProperty={'oh so custom'} /></div>);
        }
      }
    render() {
        const nodes  = this.props.collection;
        if(nodes != null){
            return (
                <div className="col col-lg-12"> {nodes.map(node => this.buildNodes(node))} </div>
            );
        }else{
            return(<div>Root</div>);
        }

    }
}
