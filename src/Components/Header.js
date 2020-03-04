import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 8px;
`;

const Title = styled.div`
  display: flex;
  height: 48px;
  vertical-align: middle;
  align-items: center;
  white-space: nowrap;
  color: #5f6368;
  font-size: 22px;
  line-height: 24px;
  padding: 0 20px;
`;

const Header = () => {
  return (
    <Container>
      <Title>Paper Translation</Title>
    </Container>
  );
};

export default Header;
