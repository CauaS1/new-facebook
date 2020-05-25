import React, { Component } from 'react';

import './style.css';
//imgs
import Man from '../../../img/man.jpg';
import Woman from '../../../img/woman.jpg';
import Couple from '../../../img/couple.jpg';
import Woman2 from '../../../img/woman2.jpg';
import Woman3 from '../../../img/woman3.jpg';
import Teen from '../../../img/teenboy.jpg';
import CSLogo from '../../../img/cslogo.png';
import Friendship from '../../../img/friends.jpg';



import { FaSearch } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaUserCheck } from 'react-icons/fa';


export default class Right extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        <div className="right-contents">
          <div className="friends-section">
            <h2>Contacts</h2>
            <div className="iconsC">
              <FaSearch color="#c2beb5" />
              <FaEllipsisH color="#c2beb5" />
            </div>
          </div>

          <div className="contacts">
            <div className="friend-1 fr" >
              <img src={Man} alt="marc" />
              <h4> {contacts.names.name1} </h4>

              <div className="tooltip">
                <img src={Man} alt="man1" />
                <h1>{contacts.names.name1}</h1>
                <p>Lives in {contacts.cities.city1}</p>
                <div className="buttonTip">
                  <button><FaFacebookMessenger /> Message </button>
                  <button className="smallBtn"><FaUserCheck /></button>
                  <button className="smallBtn"><FaEllipsisH /> </button>
                </div>
              </div>

            </div>
            <div className="friend-2 fr">
              <img src={Woman} alt="woman" />
              <h4>{contacts.names.name2}</h4>

              <div className="tooltip">
              <img src={Woman} alt="man1" />
                <h1>{contacts.names.name2}</h1>
                <p>Lives in {contacts.cities.city2}</p>
                <div className="buttonTip">
                  <button><FaFacebookMessenger /> Message </button>
                  <button className="smallBtn"><FaUserCheck /></button>
                  <button className="smallBtn"><FaEllipsisH /> </button>
                </div>
              </div>

            </div>

            <div className="friend-3 fr">
              <img src={Couple} alt="coup" />
              <h4>{contacts.names.name3}</h4>

              <div className="tooltip">
                <img src={Couple} alt="man1" />
                <h1>{contacts.names.name3}</h1>
                <p>Lives in {contacts.cities.city3}</p>
                <div className="buttonTip">
                  <button><FaFacebookMessenger /> Message </button>
                  <button className="smallBtn"><FaUserCheck /></button>
                  <button className="smallBtn"><FaEllipsisH /> </button>
                </div>
              </div>

            </div>
            <div className="friend-4 fr">
              <img src={Woman2} alt="wo4" />
              <h4>{contacts.names.name4}</h4>

              <div className="tooltip">
                <img src={Woman2} alt="man1" />
                <h1>{contacts.names.name4}</h1>
                <p>Lives in {contacts.cities.city4}</p>
                <div className="buttonTip">
                  <button><FaFacebookMessenger /> Message </button>
                  <button className="smallBtn"><FaUserCheck /></button>
                  <button className="smallBtn"><FaEllipsisH /> </button>
                </div>
              </div>

            </div>
            <div className="friend-5 fr">
              <img src={Woman3} alt="wo3" />
              <h4>{contacts.names.name5}</h4>

              <div className="tooltip">
                <img src={Woman3} alt="man1" />
                <h1>{contacts.names.name5}</h1>
                <p>Lives in {contacts.cities.city5}</p>
                <div className="buttonTip">
                  <button><FaFacebookMessenger /> Message </button>
                  <button className="smallBtn"><FaUserCheck /></button>
                  <button className="smallBtn"><FaEllipsisH /> </button>
                </div>
              </div>

            </div>
            <div className="friend-6 fr">
              <img src={Teen} alt="teen" />
              <h4>{contacts.names.name6}</h4>

              <div className="tooltip">
                <img src={Teen} alt="man1" />
                <h1>{contacts.names.name6}</h1>
                <p>Lives in {contacts.cities.city6}</p>
                <div className="buttonTip">
                  <button><FaFacebookMessenger /> Message </button>
                  <button className="smallBtn"><FaUserCheck /></button>
                  <button className="smallBtn"><FaEllipsisH /> </button>
                </div>
              </div>

            </div>
          </div>

          <div className="group-list">
            <h2>Group Conversation</h2>
          </div>

          <div className="all-groups">
            <div className="group-1 gr">
              <img src={CSLogo} alt="csgo" />
              <h3>{contacts.groups.group1}</h3>
            </div>
            <div className="group-2 gr">
              <img src={Friendship} alt="friends" />
              <h3>{contacts.groups.group2}</h3>
            </div>
          </div>
        </div>
      </>
    );
  }
}