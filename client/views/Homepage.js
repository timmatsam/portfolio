import React from 'react';
import styled from 'styled-components';

// STYLED-COMPONENTS
const Fuji = styled.img`
  width: 100%;
  height: 85vh;
`;
const Caption = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-even;
  align-items: center;
  font-style: italic;
  margin: 1px;
  padding-top: 10px;
  color: rgba(79, 142, 172, 0.904);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: -40px;
  margin-bottom: 20px;
`;
const Greeting = styled.h1`
  color: #55141f;
  font-style: italic;
  position: absolute;
  margin: 0 0 5rem 5rem;
  font-size: 4vw;
`;

// COMPONENT
function Homepage() {
  return (
    <Wrapper>
      <Fuji src="assets/fuji.jpg" alt="highest-point-on-mount-fuji" />
      <Greeting>...Hello</Greeting>
      <Caption>
        <p>
          A quote someone quoted to me after I trekked Mt. Fuji...
        </p>
        <p>
          "If you never climb Mt. Fuji, you're a fool, and if you climb it more than once,
          you're a crazy fool."

        </p>
        <p>Of course, I stopped after one.</p>
      </Caption>
    </Wrapper>
  );
}

export default Homepage;
