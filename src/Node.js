import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Node extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.item.type === 'root'){
            return (
                <div>
                <h1>Filter Name</h1>
                    <form class="form node root" action="/action_page.php">
                        <div class="form-group">
                            <label for="email">Custom Property</label>
                            <input type="email" class="form-control" id="email"/>
                        </div>
                        <div class="form-group">
                            <label for="pwd">Other Property</label>
                            <input type="password" class="form-control" id="pwd"/>
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                </div>
            );
        }else if(this.props.item.type === 'clause'){
            return (
                <form class="form node clause" action="/action_page.php">
                    <div class="form-group">
                        <label for="email">Custom Property</label>
                        <input type="email" class="form-control" id="email"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Other Property</label>
                        <input type="password" class="form-control" id="pwd"/>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            );
        }else{
        return (
            <form class="form node" action="/action_page.php">
                <div class="form-group">
                    <label for="email">Custom Property</label>
                    <input type="email" class="form-control" id="email"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Other Property</label>
                    <input type="password" class="form-control" id="pwd"/>
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
            </form>
        );
    }
    }
}

