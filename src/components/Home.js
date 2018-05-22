import React, { Component } from 'react';
import styled from 'styled-components';

// import homeImage from '../utils/image/background-img.jpg';
import media from '../utils/media';
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
`;

const Text = styled.p`
  font-size: 100px;
  :hover {
    cursor: default;
  }
  ${media.mobile`
    font-size: 50px;
  `};
`;

const ImgWrapper = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 3.1%;
  animation: beat 1s infinite;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 0.6s infinite alternate;
  @-webkit-keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
  }
  @keyframes mover {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-30px);
    }
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
