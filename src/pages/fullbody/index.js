import React, { Component } from 'react';

import Left from '../body/left';
import Right from '../body/right';
import Middle from '../body/middle';

import './style.css';

export default class Body extends Component {
  render() {
    return (
      <>
        <div className="body-container">
          <Left about={this.props.about} />
          <Middle contacts={this.props.about} />
          <Right contacts={this.props.about} />
        </div>
      </>
    );
  }
}