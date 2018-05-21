import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../utils/media';
import SMS from '../images/speech-bubble.png';
import Gmail from '../images/gmail-logo.png';
import Git from '../images/github-logo.png';
import Blog from '../images/blogger-logotype.png';

const Wrapper = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;

  ${media.mobile`
  font-size: 15px;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  justify-content: space-around;
`};
`;

const ContactWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  ${media.mobile`
    margin: 0;
    margin-left: 5%;
    justify-content: space-around;
  `};
`;

const Contact = styled.a`
  display: flex;
  margin-bottom: 10%;
  color: #333333;
  text-decoration: none;

  :hover {
    opacity: 0.7;
    cursor: default;
  }
  ${media.mobile`
  margin-bottom: ${p => (p.bottom ? '10%' : 0)};
`};
`;

const ImgWrapper = styled.div`
  margin-right: 8px;
  height: 100%;
`;

const Img = styled.img``;

const Title = styled.p``;

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <ContactWrapper>
          <Contact bottom>
            <ImgWrapper>
              <Img src={SMS} alt=".." />
            </ImgWrapper>
            <Title>
              <b>010 - 6525 - 3918</b>
            </Title>
          </Contact>
          <Contact bottom href="mailto:a01065253918@gmail.com">
            <ImgWrapper>
              <Img src={Gmail} alt=".." />
            </ImgWrapper>
            <Title>
              <b>a01065253918@gmail.com</b>
            </Title>
          </Contact>
        </ContactWrapper>
        <ContactWrapper>
          <Contact bottom href="https://github.com/SeungJoe/" target="blank">
            <ImgWrapper>
              <Img src={Git} alt=".." />
            </ImgWrapper>
            <Title>
              <b>Github</b>
            </Title>
          </Contact>
          <Contact href="https://blog.naver.com/tnvjthslr" target="blank">
            <ImgWrapper>
              <Img src={Blog} alt=".." />
            </ImgWrapper>
            <Title>
              <b>Blog</b>
            </Title>
          </Contact>
        </ContactWrapper>
      </Wrapper>
    );
  }
}
