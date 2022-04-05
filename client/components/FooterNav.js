import React from 'react';

function FooterNav() {
  return (
    <footer>
      <p>timmatsam@gmail.com</p>
      <a href="https://www.linkedin.com/in/tim-samuel-40204b120/">
        <img className="logo" src="assets/linkedin.png" alt="linkedin-logo" />
        {' '}
      </a>

      <a href="https://github.com/timmatsam">
        <img className="logo" src="assets/github.png" alt="github-logo" />
        {' '}
      </a>
    </footer>
  );
}

export default FooterNav;
