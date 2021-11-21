import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { ImageCard } from "./components/ImageCard";
import { ApprovedImages } from "./components/ApprovedImages";

export const App = () => (
  <Wrapper>
    <Text>IMAGE APPROVAL APPLICATION</Text>
    <ApprovedImages />
    <ImageCard />
    <ButtonWrapper>
      <Button
        type="primary"
        shape="round"
        icon={<CloseOutlined />}
        size="large"
      />
      <Button
        type="primary"
        shape="round"
        icon={<CheckOutlined />}
        size="large"
      />
    </ButtonWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 60px solid var(--main-color);
  border-radius: 12px;
  margin: var(--margin-xl) auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  .ant-btn {
    margin: var(--margin-l);
    background-color: var(--main-color);
  }
  .ant-btn-round.ant-btn-icon-only {
    width: 160px;
  }
`;

const Text = styled.div`
  font-weight: 700;
  color: var(--main-color);
  width: 100%;
  border-bottom: 2px solid var(--divider-color);
  padding: 12px;
`;
