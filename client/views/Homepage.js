import React from 'react';
import styled from 'styled-components';

// STYLED-COMPONENTS
const Fuji = styled.img`
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
  margin: 1px;
  padding-top: 10px;
  color: rgba(79, 142, 172, 0.904);
`;

// COMPONENT
function Homepage() {
  return (
    <div id="homepage">
      <Wrapper>
        <Fuji src="assets/fuji.jpg" alt="highest-point-on-mount-fuji" />
        <p>
          At 9pm, we started our hike towards the summit...
        </p>
        <p>...reaching the top at 6am, we make it just in time to catch the sunrise.</p>
        <p>
          "If you never climb Mt. Fuji, you're a fool, and if you climb it more than once,
          you're a crazy fool."

        </p>
      </Wrapper>
    </div>
  );
}

export default Homepage;
