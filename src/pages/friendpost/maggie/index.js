import React, { Component } from 'react';

import './style.css';
import Maggie from '../../../img/woman3.jpg';
import { FaEllipsisH } from 'react-icons/fa';

import { FaThumbsUp } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';


export default class MaggiePost extends Component {
  render() {
    const { hername } = this.props;

    return (
      <div className="maggie-post">
        <div className="img-name">
          <img src={Maggie} alt="maggie" />
          <div className="who-about">
            <div className="name-icon">
              <h5>{hername.names.name5} </h5>
              <FaEllipsisH />
            </div>
            <span>
              <p>2 hrs</p>
            </span>
          </div>
        </div>

        <div className="text-area">
          <p>I'm trying be a Tumblr. Lol </p>
        </div>

        <div className="maggie-image">
          <img src={Maggie} alt="maggie image" />
          <div className="reactions">
            <div>
              <FaThumbsUp />
              <p> Like  </p>
            </div>
            <div>
              <FaComment />
              <p> Comment </p>
            </div>
            <div>
              <FaShare />
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 