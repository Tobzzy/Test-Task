import React from "react";
import styled from "styled-components";
import { Image } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const mockImages = [
  "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
];

export const ApprovedImages = () => (
  <Wrapper>
    <Text>APPROVED IMAGES (0)</Text>
    <ImagesWrapper>
      {mockImages.map((image, i) => (
        <ImageWrapper key={i}>
          <Image width={70} src={image} />
          <CheckOutlined />
        </ImageWrapper>
      ))}
    </ImagesWrapper>
  </Wrapper>
);

const Text = styled.div`
  font-weight: 700;
  color: var(--main-color);
  height: 32px;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 12px;
`;

const ImagesWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid var(--divider-color);
  padding: 16px 0;
`;

const ImageWrapper = styled.div`
  padding: 8px;
  position: relative;
  svg {
    position: absolute;
    top: 0;
  }
`;
