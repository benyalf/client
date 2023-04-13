import React, { Component } from 'react'


import Countdown from './Components/Fuctionals/CountDown';
import Logo from './Components/NFuctionals/Logo'
import Title from './Components/NFuctionals/Title'
import Description from './Components/NFuctionals/Description'
import Subscribe from './Components/Fuctionals/Subscribe';
import Links from './Components/NFuctionals/Links'


import Img from './Img/giphy.gif'
import facebook from './Img/signo-de-facebook.png'
import twitter from './Img/signo-de-twitter.png'
import instagram from './Img/signo-de-instagram.png'

import './Styles/index.css';


class ComingSoon extends Component {

  state = {
    countdown: {
      futureDate: '2023-06-03 00:00:00',
    },
    logo: {
      alt: 'Gif developer',
      src: Img,
    },
    title: {
      text: '¡Muy pronto!'
    },
    description: {
      text: 'Estamos trabajando día a día para que muy pronto OneSoftNow este este disponible y con toda la dispocision de entregar el mejor servicio desarrollando ideas desde nuestras computadoras </🧑🏼‍💻🧠>',
      subtext: "Si deseas sumarte a nuestra lista de contactos"

    },
    subscribe: {
      placeholder: 'Ingresa tu correo',
      buttonText: 'Enviar'
    },

    links: [
      {
        url: "www.facebook.com",
        logo: facebook,
        text: "Siguenos ",
      },
      {
        url: "https://www.instagram.com/",
        logo: instagram,
        text: "En nuestras",

      },
      {
        url: "https://twitter.com/",
        logo: twitter,
        text: "Redes Sociales",
      },
    ]
  };

  render() {

    const {
      countdown,
      logo,
      title,
      description,
      links,
      subscribe,
    } = this.state
    return (


      <div className="background">
        <Countdown futureDate={countdown.futureDate} />

        <Logo alt={logo.alt} src={Img} />

        <Title text={title.text} />

        <Description
          text={description.text}
        // src={notification.src}
        // alt={notification.alt}
        // message={notification.message}
        // visible={notification.visible}
        // level={notification.level}
        />
        <Subscribe
          placeholder={subscribe.placeholder}
          buttonText={subscribe.buttonText}
          showNotification={this.showNotification}
        />
        <Links links={links} />

      </div>
    );
  }
}

export default ComingSoon;