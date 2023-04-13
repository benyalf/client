import React, { useState } from 'react'
import { toast, ToastContainer} from 'react-toastify'
import '../../Styles/Subscribe.css'
import "react-toastify/dist/ReactToastify.css";
import Logo from '../NFuctionals/Logo'

import CrashAlert from '../../Img/giphy-crash.gif'
import AlertImg from '../../Img/giphy-alert.gif'
import GreatImg from '../../Img/giphy-great.gif'


const Subscribe = ({placeholder,buttonText}) => {
  const [state, setState] = useState({email:'', estado:false})
  const [imagenApi, setImagenApi] = useState(null);
    const handleChange = e => {
        setState({email:e.target.value.trim()})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (state.email) {
          fetch(`/api/memberAdd?email=${state.email}`)
          .then(res => res.json())
          .then(json => {
            if (json.status === "subscribed") {
              setImagenApi(GreatImg);
              toast.success('¡Bienvenido/a a la lista de contactos de OneSoftNow! Estamos emocionados de tenerte en nuestra comunidad de tecnología y esperamos proporcionarte información útil y actualizaciones sobre nuestros servicios de desarrollo de software.')
              
            } else if (json.title === "Member Exists") {
              setImagenApi(AlertImg)
              toast.warn("Ups! Parece que ya estás en nuestra lista de contactos de OneSoftNow. No te preocupes, seguiremos manteniéndote informado/a sobre nuestras últimas noticias y servicios de desarrollo de software.")
            } else {
              setImagenApi(CrashAlert)
              toast.error("Lo sentimos, parece que ya tenemos registrado tu correo en nuestra lista de contactos de OneSoftNow. Si crees que esto es un error, por favor contáctanos para que podamos solucionarlo.")
            }
          })
          .catch(err => {
            console.log("error", err)
          })
          setState({email:""})
          
        }
      }
    return ( 
<>
<ToastContainer
        position="top-right"
        autoClose={9000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    <Logo imagen={imagenApi}/>
        <form className="subscribe" onSubmit={handleSubmit}>
      <input
        className="subscribe-email"
        name="email"
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.email}
        aria-label="Email Address"
        />
      <button className="subscribe-button" type="submit">
        {buttonText}
      </button>
    </form>
        </>
     );
}
 
export default Subscribe;