import React, { useState } from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import { Button } from "react-bootstrap";
import LanguageBar from "./LanguageBar";
import copy from "copy-to-clipboard";
import "../css/App.css";

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
  min-height: 300px;
  position: relative;
  width: 50%;
  background-color: #f5f5f5;
  border-radius: 0 0 8px 0;
`;

const ResultFooter = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  bottom: 8px;
  padding-top: 8px;
`;

const Content = () => {
  const [resultText, setResultText] = useState("");

  const onInputSource = e => {
    const input = e.target.value;
    setResultText(input.replace(/(\n|\r\n)/g, " "));
  };

  const onClickCopy = e => {
    copy(resultText);
  };

  return (
    <Container>
      <LanguageBar />
      <TextContent>
        <SourceContainer>
          <TextareaAutosize className="input-textarea" onInput={onInputSource} />
        </SourceContainer>
        <ResultContainer>
          <TextareaAutosize className="result-textarea" value={resultText} />
          <ResultFooter>
            <Button className="copy-button" onClick={onClickCopy}>
              Copy
            </Button>
          </ResultFooter>
        </ResultContainer>
      </TextContent>
    </Container>
  );
};

export default Content;
