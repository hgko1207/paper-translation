import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px 8px 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #fff;
  box-sizing: border-box;
  height: 48px;
`;

const Content = styled.div`
  display: inline-block;
  height: 48px;
  margin: 0;
  width: 50%;
  vertical-align: top;
`;

const Text = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
`;

const Swap = styled.div`
  background-color: #fff;
  display: inline-block;
  margin: 0 -10px;
  padding-top: 12px;
  font-size: 18px;
  font-weight: 600;
`;

const LanguageBar = () => {
  return (
    <Container>
      <Content>
        <Text>수정 전</Text>
      </Content>
      <Swap>-></Swap>
      <Content>
        <Text>수정 후</Text>
      </Content>
    </Container>
  );
};

export default LanguageBar;
