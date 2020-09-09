import React from 'react';
import './App.css';
import Timer from './Timer.js'
import ToDoList from './ToDoList.js'

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
      <h1> Timely, a timer ting with tings to do as well </h1>
      <Timer />
      <ToDoList />
      </div>
    );
  }
}