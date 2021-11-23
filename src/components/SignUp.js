import React from 'react';
import styled from 'styled-components/native';

function SignUp() {
  return (
    <Container>
      <Title>註冊</Title>
      <Input placeholder="請輸入電子郵件" keyboardType="email-address" />
      <Input placeholder="請輸入手機號碼" keyboardType="decimal-pad" />
      <Input placeholder="請輸入密碼" />
      <Input placeholder="請重新輸入密碼" />
      <Button>
        <ButtonText>送出</ButtonText>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

const Title = styled.Text`
  font-size: 40px;
  color: #1dd1a1;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  border: 1px solid #444;
  border-radius: 5px;
  width: 50%;
  font-size: 20px;
  color: #444;
  margin-top: 10px;
  text-align: center;
`;

const Button = styled.TouchableOpacity`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 60px;
  border: 1px solid #444;
  background-color: #1dd1a1;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export default SignUp;
