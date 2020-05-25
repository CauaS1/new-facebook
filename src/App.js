import React, { Component } from 'react';
import './global.css';

//pages
import Header from './pages/header';
import Body from './pages/fullbody';

const info = {
  name: "Cauã",

  useful: {
    full: 'CauaS1',
    bacteria: "COVID-19 Information",
    msg: "Messenger",
    live: 'Live Videos',
    market: 'Marketplace',
    video: 'Videos',
    page: 'Pages',
    event: 'Events',
    group: 'Groups'
  },

  names: {
    name1: 'Omar',
    name2: 'Gina',
    name3: 'Steve',
    name4: 'Diana',
    name5: 'Maggie',
    name6: 'Mark'
  },

  groups: {
    group1: 'CSGO Team',
    group2: 'Friends'
  },

  cities: {
    city1: 'Manhattan, NY',
    city2: 'New York City, NY',
    city3: 'Miami, FL',
    city4: 'Manhattan, NY',
    city5: 'Manhattan, NY',
    city6: 'Vancouver, CA'
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Header name={info.name} />
        <Body about={info} />
      </>
    );
  }
}

export default App;