import React from 'react';
import styled from 'styled-components';

import media from '../utils/media';
import { black, white2, white } from '../utils/colors';

import peopet from '../images/peopet.png';

const Wrapper = styled.div`
  color: ${black};
  margin: 0 auto;
  background: ${p => p.background};
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const TitleWrapper = styled.div``;

const Title = styled.p`
  font-size: ${p => `${p.size}px`};
`;

const Content = styled.div`
  margin: 0 auto;
  margin-top: 5%;
  height: 50vh;
  display: flex;
  justify-content: space-around;
  border: 2px solid #333333;
  border-radius: 20px;
  padding: 5%;
`;

const ImgWrapper = styled.div``;

const Link = styled.a`
  :hover {
    opacity: 0.5;
  }
`;

const Img = styled.img`
  width: 400px;
`;

export default class Project extends React.Component {
  render() {
    return (
      <Wrapper background={white}>
        <TitleWrapper>
          <Title size={50}>
            <b>PROJECT LIST</b>
          </Title>
        </TitleWrapper>
        <Content>
          <ImgWrapper>
            <Link href="https://www.peopet.co.kr" target="blank">
              <Img src={peopet} alt="peopet" />
            </Link>
          </ImgWrapper>
          <Title size={40}>페오펫 홈페이지 개발</Title>
        </Content>
      </Wrapper>
    );
  }
}
