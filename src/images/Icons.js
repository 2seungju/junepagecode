import React from 'react';
import styled from 'styled-components';

import JavaImgUrl from './java.png';
import ExpressImgUrl from './express.png';
import MongoDBImgUrl from './mongodb.png';
import NodeJSImgUrl from './nodejs.png';
import OracleDBImgUrl from './oracledb.png';
import ReactImgUrl from './react.png';

// png는 import로 svg는 const?

const Img = styled.img`
  width: 10%;
`;

export const JavaImg = () => <Img content="java" src={JavaImgUrl} alt="java" />;

export const ExpressImg = () => <Img content="express" src={ExpressImgUrl} alt="express" />;

export const MongoDBImg = () => <Img content="mongo" src={MongoDBImgUrl} alt="mongodb" />;

export const NodeJSImg = () => <Img content="nodjs" src={NodeJSImgUrl} alt="nodejs" />;

export const OracleDBImg = () => <Img content="oracledb" src={OracleDBImgUrl} alt="oracledb" />;

export const ReactImg = () => <Img content="react" src={ReactImgUrl} alt="react" />;
