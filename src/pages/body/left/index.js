import React, { Component } from 'react';

import './style.css'
import Perfil from '../../../img/perfil.jpg';

//icons
import Bacteria from '../../../icon/bacteria.svg';
import Market from '../../../icon/shopping.svg';
import Live from '../../../icon/live.svg';
import Messenger from '../../../icon/msg.svg';
import Videos from '../../../icon/video.svg';
import Flag from '../../../icon/flag.svg';
import Event from '../../../icon/event.svg';
import Group from '../../../icon/group.svg';


export default class Body extends Component {
  render() {
    const { about } = this.props;

    return (
      <>
        <div className="useful">
          <div className="name item">
            <img src={Perfil} alt="perfil" className="PerfilIcons" />
            <h4> {about.useful.full} </h4>
          </div>
          <div className="covid item">
            <img src={Bacteria} alt="bacteria" className="VecIcons" />
            <h4> {about.useful.bacteria} </h4>
          </div>
          <div className="messenger item">
            <img src={Messenger} alt="msg" className="VecIcons" />
            <h4> {about.useful.msg} </h4>
          </div>
          <div className="live item">
            <img src={Live} alt="live" className="VecIcons" />
            <h4> {about.useful.live} </h4>
          </div>
          <div className="market item">
            <img src={Market} alt="market" className="VecIcons" />
            <h4> {about.useful.market} </h4>
          </div>
          <div className="videos item">
            <img src={Videos} alt="video" className="VecIcons" />
            <h4> {about.useful.video} </h4>
          </div>
          <div className="pages item">
            <img src={Flag} alt="flag" className="VecIcons" />
            <h4> {about.useful.page} </h4>
          </div>
          <div className="events item">
            <img src={Event} alt="event" className="VecIcons" />
            <h4> {about.useful.event} </h4>
          </div>
          <div className="groups item">
            <img src={Group} alt="groups" className="VecIcons" />
            <h4> {about.useful.group} </h4>
          </div>
        </div>
      </>
    );
  }
}