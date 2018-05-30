import React from 'react';
import styled from 'styled-components';

import media from '../utils/media';
import { black, white2, white } from '../utils/colors';

import peopet from '../images/peopet.png';

const Wrapper = styled.div`
  color: ${black};
  background: ${p => p.background};
  display: flex;
  height: 100%;
  padding: 150px 25px;
  position: relative;
`;

const ListWrapper = styled.div``;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
`;

const Title = styled.p`
  font-size: ${p => `${p.size}px`};
  ${media.wide`
  font-size: ${p => `${p.wide}px`};
  margin: 0;
  `};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  ${media.tablet`
    display: inline-block;
  `};
`;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const ImgWrapper = styled.div`
  width: 30%;
  ${media.wide`
    width: 50%;
  `};
  ${media.tablet`
  width: 100%;
`};
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
  ${media.tablet`
  margin-top: 10%;
`};
`;

const Text = styled.div`
  margin: 6% 0;
`;

const Lighter = styled.p`
  font-weight: lighter;
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
        <ListWrapper>
          <ContentWrapper>
            <ImgWrapper>
              <Link href="https://www.peopet.co.kr" target="blank">
                <Img src={peopet} alt="peopet" />
              </Link>
            </ImgWrapper>
            <TextWrapper>
              <Title size={40} wide={30}>
                페오펫 홈페이지 개발
              </Title>
              <Text first>
                1. 사이트 구성 <br />React, Next, Express, MongoDB
              </Text>
              <Text>
                2. 직무<br />Front-End 개발
              </Text>
              <Text>
                3. 수행 업무<br />반응형 웹 개발, 홈페이지 유지 보수, MongoDB & aws 관리
              </Text>
            </TextWrapper>
          </ContentWrapper>
        </ListWrapper>
      </Wrapper>
    );
  }
}
