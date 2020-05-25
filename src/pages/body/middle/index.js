import React, { Component } from 'react';

import './style.css'

import Perfil from '../../../img/perfil.jpg';

import MaggiePost from '../../friendpost/maggie';

import { FaArrowRight } from 'react-icons/fa'
import { FaFileImage } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaLaughWink } from 'react-icons/fa';

export default class Middle extends Component {
  render() {
    return (
      <>
        <div className="main-container">

          <div className="stories-section">
            <div className="five-stories">
              <div className="story">
                <div className="circle"></div>
              </div>
              <div className="story">
                <div className="circle"></div>
              </div>
              <div className="story">
                <div className="circle"></div>
              </div>
              <div className="story">
                <div className="circle"></div>
              </div>
              <div className="story">
                <div className="circle"></div>
              </div>

              <div className="more-story"> <FaArrowRight /> </div>
            </div>
          </div>

          <div className="thinking">
            <div className="upper">
              <img src={Perfil} alt="perfil" />
              <input type="text" placeholder="What's on your mind ?" />
            </div>

            <div className="lower">
              <div className="live all">
                <FaVideo color="#f23e5c" />
                <h3>Live Video</h3>
              </div>
              <div className="image all">
                <FaFileImage color="#58c472" />
                <h3>Photo/Video</h3>
              </div>
              <div className="felling all">
                <FaLaughWink color="#f7bf3e" />
                <h3>Felling/Activity</h3>
              </div>
            </div>
          </div>
        <MaggiePost hername={this.props.contacts} />  
        </div>
      </>
    );
  }
}