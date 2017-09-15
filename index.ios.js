import React, { Component } from 'react';
import  Navbar  from './components/Navbar';
import { AppRegistry } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Navbar />
    );
  }
}

AppRegistry.registerComponent('grocery', () => App);
