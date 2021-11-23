import React from 'react';
import styled from 'styled-components/native';
import {Container} from '../GlobalStyled/Style';

function Home() {
  return (
    <Container>
      <HomeText>Hello!</HomeText>
      <ImageContainer
        source={require('../assets/img/freePicAnimal.jpg')}
        resizeMode="stretch"
      />
      {/* <Pointer>串接的API </Pointer> */}
    </Container>
  );
}

const HomeText = styled.Text`
  font-size: 40px;
  margin-bottom: 20px;
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 50%;
`;

export default Home;
