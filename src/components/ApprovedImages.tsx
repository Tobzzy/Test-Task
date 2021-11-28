import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import ImageState from "../state/ImageState";

export const ApprovedImages = () => {
  const { approvedImageUrls } = ImageState.useContainer();
  return (
    <Wrapper>
      <Text>{`APPROVED IMAGES (${approvedImageUrls.length})`}</Text>
      <ImagesWrapper>
        {approvedImageUrls.map((image, i) => (
          <ImageWrapper key={i}>
            <Image width={100} height={60} src={image} />
            <CheckOutlined />
          </ImageWrapper>
        ))}
      </ImagesWrapper>
    </Wrapper>
  );
};

const Text = styled.div`
  font-weight: 700;
  color: var(--main-color);
  height: 32px;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 460px;
  padding: 12px;
  border-bottom: 2px solid var(--divider-color);
`;

const ImagesWrapper = styled.div`
  display: flex;
  overflow: scroll;
`;

const ImageWrapper = styled.div`
  padding: 8px;
  position: relative;
  svg {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
    font-weight: 24px;
  }
`;
