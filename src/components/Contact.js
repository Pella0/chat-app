import React from 'react';
import './chat-app.css';

const name = 'Jean Hawkins';
const Online = true;
const statusOnline = (
  <span class='status-online'>&nbsp;&nbsp;&nbsp;Online</span>
);
const statusOffline = (
  <span class='status-offline'>&nbsp;&nbsp;&nbsp;Offline</span>
);
const avatar = 'https://randomuser.me/api/portraits/women/48.jpg';
function Contact() {
  return (
    <div className='Contact'>
      <img src={avatar} className='avatar' alt='femme asiatique'></img>
      <div>
        <h4 class='name'>{name}</h4>
        <span class='status'>
          <div class='status-text'>{Online ? statusOnline : statusOffline}</div>
        </span>
      </div>
    </div>
  );
}

export default Contact;
