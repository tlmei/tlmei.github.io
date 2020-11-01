import React from 'react';
import './App.css'
import { Grid } from '@material-ui/core';

import Header from './components/header';
import Content from './components/content';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
