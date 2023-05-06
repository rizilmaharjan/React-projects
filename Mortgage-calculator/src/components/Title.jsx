import React from 'react';
import styled from 'styled-components';

const Title = ({text}) => {
  return (
    <>
        <Wrapper>{text}</Wrapper>

    </>
  )
}

const Wrapper = styled.h1`

  text-align:center;
  font-size: 1.8rem;
`;

export default Title
