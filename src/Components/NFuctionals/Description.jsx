import React from 'react';

import '../../Styles/Description.css';

const Description = ({ text }) => {
  return (
    <div className="description">
      <p className="description-text ">{text}</p>
    </div>
  );
};

export default Description;