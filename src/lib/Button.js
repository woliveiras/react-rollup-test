import React from 'react';
import styled from 'styled-components'

export default function Button({ message }) {
  return (
    <Wrapper>
      <button>{ message }</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: papayawhip;
  padding: 4em;
`;