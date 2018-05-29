import React from 'react';
import styled from 'styled-components';

import media from '../utils/media';
import { black, white2, white } from '../utils/colors';

import peopet from '../images/peopet.png';

const Wrapper = styled.div`
  color: ${black};
  background: ${p => p.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: auto;
  padding: 0 20px;
`;

const ListWrapper = styled.div`
  margin: auto;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const Title = styled.p`
  font-size: ${p => `${p.size}px`};
`;

const ContentWrapper = styled.div`
  display: flex;
`;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const ImgWrapper = styled.div`
  width: 30%;
`;

const Link = styled.a`
  :hover {
    opacity: 0.5;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const TextWrapper = styled.div`
  margin: auto 10%;
`;

const Text = styled.p``;

export default class Project extends React.Component {
  render() {
    return (
      <Wrapper background={white}>
        <TitleWrapper>
          <Title size={50}>
            <b>PROJECT LIST</b>
          </Title>
        </TitleWrapper>
        <ListWrapper>
          <ContentWrapper>
            <ImgWrapper>
              <Link href="https://www.peopet.co.kr" target="blank">
                <Img src={peopet} alt="peopet" />
              </Link>
            </ImgWrapper>
            <TextWrapper>
              <Title size={40}>페오펫 홈페이지 개발</Title>
              <Text> 사이트 구성: React, Next, Express, MongoDB</Text>
              <Text> 직무: Front-End 개발</Text>
              <Text> 수행 업무: 반응형 웹 개발, 홈페이지 유지 보수, MongoDB & aws 관리</Text>
            </TextWrapper>
          </ContentWrapper>
        </ListWrapper>
      </Wrapper>
    );
  }
}
