import React from 'react';
import styled from 'styled-components';
import About from '../components/aboutme/About';

// STYLED-COMPONENTS
const Headshot = styled.img`
    width: 20%;
    height: fit-content;
    margin-left: 80px;
    margin-right: 80px;
`;
const StyledAbout = styled(About)`
    width: 60%;
    color: black;
`;
const Wrapper = styled.div`
    display: flex;
`;

// COMPONENT
function AboutMe() {
  return (
    <Wrapper>
      <Headshot src="assets/headshot.png" alt="profile" />
      <StyledAbout />
    </Wrapper>
  );
}

export default AboutMe;
