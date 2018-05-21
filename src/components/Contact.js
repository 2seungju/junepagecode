import React from 'react';
import styled from 'styled-components';

import media from '../utils/media';

const Wrapper = styled.div`
  height: 800px;
`;

const Name = styled.input``;

const Email = styled.input``;

export default class Contact extends React.Component {
  state = {
    input: '',
    name: '',
    email: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { handleChange } = this;
    return (
      <Wrapper>
        <Name name="name" onChange={handleChange} />
        <Email name="email" onChange={handleChange} />
      </Wrapper>
    );
  }
}
