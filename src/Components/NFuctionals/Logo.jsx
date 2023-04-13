import React from 'react';
// import PropTypes from 'propTypes';
import DefaultImg from "../../Img/giphy.gif"
import '../../Styles/Logo.css';

const logo = (props) => {
  const imagen = props.imagen|| DefaultImg
  return (
    
    <div className="logo-container">
      <img className="logo" width="480" alt="Gift Animado" src={imagen} />
    </div>
  );
};

// logo.propTypes = {
//   src: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };

export default logo;
