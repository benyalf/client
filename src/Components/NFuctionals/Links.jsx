import React from 'react';
import '../../Styles/Links.css';

const Links = ({ links }) => (
  <div className="social-links">
    {links.map((link, i) => {
      return (
        <a
          className="social-link"
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          href={link.url}
        >
          <img className="social-logo" alt='logo' type="image/svg+xml" src={link.logo} />
            
          <span className="social-text">{link.text}</span>
        </a>
      );
    })}
  </div>
);

export default Links;
