import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "react-bootstrap";
import LanguageBar from "./LanguageBar";
import "../Styled/App.css";

const Container = styled.div`
  width: 100%;
  min-height: auto;
  margin-top: 30px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.37);
`;

const TextContent = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const SourceContainer = styled.div`
  display: block;
  position: relative;
  width: 50%;
  min-height: 300px;
  border-radius: 0 0 0 8px;
  background-color: #fff;
  flex-grow: 1;
  z-index: 1;
`;

const ResultContainer = styled.div`
  box-shadow: none;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  position: relative;
  width: 50%;
  background-color: #f5f5f5;
  border-radius: 0 0 8px 0;
  padding: 20px;
`;

const ResultText = styled.span`
  font-size: 18px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.87);
  white-space: pre-wrap;
  min-height: 20px;
`;

const ResultFooter = styled.div`
  position: absolute;
  width: calc(100% - 22px);
  height: 44px;
  left: 14px;
  bottom: 8px;
  padding-top: 8px;
`;

const CopyButton = styled.button`
  display: block;
  float: right;
  box-sizing: border-box;
  height: 36px;
  width: 36px;
  background-image: -webkit-image-set(
    url("https://ssl.gstatic.com/images/icons/material/system_gm/1x/content_copy_black_24dp.png") 1x,
    url("https://ssl.gstatic.com/images/icons/material/system_gm/2x/content_copy_black_24dp.png") 2x
  );
  background-repeat: no-repeat;
  opacity: 0.55;
  :hover {
    color: black;
    cursor: pointer;
  }
`;

const Content = () => {
  const [resultText, setResultText] = useState("");

  const onInputSource = e => {
    setResultText(e.target.value);
  };

  return (
    <Container>
      <LanguageBar />
      <TextContent>
        <SourceContainer>
          <TextareaAutosize className="textarea" onInput={onInputSource} />
        </SourceContainer>
        <ResultContainer>
          <ResultText>{resultText}</ResultText>
          <ResultFooter>
            <Button className="copy-button">Copy</Button>
            <CopyButton role="button" aria-label="변역 복사" data-tooltip="번역 복사" />
          </ResultFooter>
        </ResultContainer>
      </TextContent>
    </Container>
  );
};

export default Content;
