import React, { Component } from "react";
import styled from "styled-components";
import Content from "./Content";
import "../css/App.css";

import BottomAdSense from '../AdSense/BottomAdSense';

const Container = styled.div`
  height: calc(100vh - 65px);
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  :before {
    background: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    content: "";
    display: block;
    height: 162px;
    overflow: hidden;
    width: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Page = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  width: 100%;
`;

class Frame extends Component {
  render() {
    return (
      <Container>
        <Page>
          <Content />

          <div className="bottom-google-ad">
            <BottomAdSense/>
          </div>
        </Page>
      </Container>
    );
  }
}

export default Frame;
