import React from 'react';

import '../../Styles/Title.css'
const Title = ({text}) => {
  return ( 
  <>
  <div className="brand">OneSoftNow</div>
  <h1 className="title"> {text}</h1>  
  </>
  );
}
 
export default Title;


