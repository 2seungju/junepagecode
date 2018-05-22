import React from 'react';
import styled from 'styled-components';

import media from '../utils/media';

import peopet from '../images/peopet.png';

const Wrapper = styled.div`
  color: #333333;
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
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

const Title = styled.p``;

export default class Project extends React.Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <ImgWrapper>
            <Link href="https://www.peopet.co.kr" target="blank">
              <Img src={peopet} alt="peopet" />
            </Link>
          </ImgWrapper>
          <Title>페오펫 홈페이지 개발</Title>
        </Content>
      </Wrapper>
    );
  }
}
