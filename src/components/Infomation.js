import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {Container} from '../GlobalStyled/Style';
import {ReactContext} from '../App';
import {FlatList} from 'react-native-gesture-handler';
function Info() {
  const data = useContext(ReactContext);
  return (
    <Container>
      <FlatList
        keyExtractor={(item, i) => i.toString()}
        data={data}
        renderItem={({item}) => (
          <InfoText>
            {item.name} | {item.city}
          </InfoText>
        )}
      />
      <InfoText>{JSON.stringify(data)}</InfoText>
    </Container>
  );
}

const InfoText = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default Info;
