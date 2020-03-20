import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

const Container = styled.header`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  height: 60px;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
  white-space: nowrap;
  color: #5f6368;
  font-size: 22px;
  line-height: 24px;
  padding: 0 20px;
`;

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Title>Paper Translation</Title>
      <Button variant="secondary" size="sm" onClick={() => setShow(true)}>
        <FontAwesome name="info" />
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            <strong>영어 논문 번역 편리성을 위한 페이지</strong>
          </h6>
          <div>
            영어 논문을 번역하기 위해 구글과 네이버 파파고 번역을 사용한다. 그런데 논문의 pdf 파일을
            복사하여 번역을 하면 대부분이 엔터나 개행 글자가 포함되어 있어 잘 되지 않을 경우가 많다.
            <br />
            그래서 영어 논문 번역의 편리성을 위해 불필요한 글자를 제거하는 기능을 구현했다.
          </div>
          <br />
          <div>
            <strong>글자 제거 목록</strong>
          </div>
          <div>
            &nbsp;&nbsp;
            <FontAwesome name="caret-right" /> 엔터(\r)
          </div>
          <div>
            &nbsp;&nbsp;
            <FontAwesome name="caret-right" /> 개행(\n)
          </div>
          <div>
            &nbsp;&nbsp;
            <FontAwesome name="caret-right" /> 주석(//)
          </div>
          <div>
            &nbsp;&nbsp;
            <FontAwesome name="caret-right" /> 여러 개의 공백
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Header;
