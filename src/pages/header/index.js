import React, { Component } from 'react';
import './style.css'

//others
import Logo from '../../img/logo.png';
import Perfil from '../../img/perfil.jpg';
import { FaSearch } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaTv } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';

import { FaCaretDown } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';


export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="left">
            <img src={Logo} alt="facebook"/>
            <button> < FaSearch /> </button>
            <input type="text" className="search" placeholder="Search Facebook" />
          </div>

          <div className="middle">
            <div className="icon home">
              <FaHome />
            </div>
            <div className="icon friend">
              <FaUserFriends />
            </div>
            <div className="icon watch">
              <FaTv />
            </div>
            <div className="icon store">
              <FaStore />
            </div>
            <div className="icon group">
              <FaUsers />
            </div>
          </div>

          <div className="right">
            <div className="photo">
              <img src={Perfil} alt="perfil" width="40px" />
              <h5> {this.props.name} </h5>
            </div>
            <div className="create others">
              <button>+</button>
            </div>
            <div className="messenger others">
              <button> <FaFacebookMessenger /></button>
            </div>
            <div className="notifications others">
              <button> <FaBell /> </button>
            </div>
            <div className="account others">
              <button> <FaCaretDown /> </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}