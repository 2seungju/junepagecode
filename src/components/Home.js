import React, { Component } from 'react';
import styled from 'styled-components';

// import homeImage from '../utils/image/background-img.jpg';
import { Pen } from '../utils/Font';
import Beat from '../images/Arrow.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  font-family: ${Pen};
`;

// const Blur = styled.div`

// `;

const TextBox = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 20%;
`;

const ImgWrapper = styled.div`
  position: relative;
  animation-duration: 1s;
  animation-name: beat;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes beat {
    from {
      bottom: 3%;
    }
    to {
      bottom: 2%;
    }
  }
`;

const Img = styled.img`
  width: 40px;
`;

const Text = styled.p`
  font-size: 100px;
  :hover {
    cursor: default;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <Wrapper>
        <TextBox>
          <Text>
            Hello<br /> June's World
          </Text>
        </TextBox>
        <ImgWrapper>
          <Img src={Beat} alt=".." />
        </ImgWrapper>
      </Wrapper>
    );
  }
}
