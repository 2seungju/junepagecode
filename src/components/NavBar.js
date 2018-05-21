import React from 'react';
import styled from 'styled-components';

import media from '../utils/media';

import MyLogo from '../images/MyPage_Icon_Owol.png';
// import { Gothic } from '../utils/Font';

const Wrapper = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  position: absolute;
  background-color: white;
  z-index: 9999;
`;

const MayWrapper = styled.div`
  width: 120px;
  margin: auto;
  position: absolute;

  ${media.mobile`
    width: 80px;
  `};
`;

const WithMay = styled.img`
  width: 100%;
  margin-left: 5vh;

  ${media.mobile`
  margin-left: 2vh;
`};
`;

// const LinkWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   text-align: right;
//   margin-right: 20vh;
//   margin-top: 1.5%;
// `;

// const Link = styled.a`
//   color: #333333;
//   margin-right: ${p => p.right};
//   cursor: pointer;
//   font-weight: bold;
//   font-size: 20px;
//   :hover {
//     opacity: 0.5;
//   }
// `;

const NavBar = () => (
  <Wrapper>
    <MayWrapper>
      <WithMay src={MyLogo} alt="Logo" />
    </MayWrapper>
    {/* <LinkWrapper>
      <Link right="5%"> Home </Link>
      <Link right="5%"> About </Link>
      <Link> Contact </Link>
    </LinkWrapper> */}
  </Wrapper>
);

export default NavBar;
