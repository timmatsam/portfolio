import React from 'react';
import styled from 'styled-components';

// STYLED-COMPONENTS
const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  background-color: rgb(54, 94, 139);
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 20px;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin-top: -20px;
  clear: both;
`;
function Footer() {
  return (
    <StyledFooter>
      <p>timmatsam@gmail.com</p>
      <a href="https://www.linkedin.com/in/tim-samuel-40204b120/">
        <img className="logo" src="assets/linkedin.png" alt="linkedin-logo" />
      </a>
      <a href="https://github.com/timmatsam">
        <img className="logo" src="assets/github.png" alt="github-logo" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
