import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { ImageCard } from "./components/ImageCard";
import { ApprovedImages } from "./components/ApprovedImages";
import ImageState from "./state/ImageState";

export const App = () => {
  const {
    approvedImageUrls,
    setApprovedImageUrls,
    setRejectedImageUrls,
    rejectedImageUrls,
  } = ImageState.useContainer();

  const defaultImageUrl =
    "https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png";
  const [image, setImage] = useState<{ url: string; refetch: boolean }>({
    url: defaultImageUrl,
    refetch: false,
  });

  useEffect(() => {
    fetch("https://source.unsplash.com/user/erondu/300x300").then(
      (response) => {
        if (image.refetch) {
          if (
            response.ok &&
            rejectedImageUrls.filter((urls) => !urls.includes(response.url))
          ) {
            setImage((prev) => ({
              ...prev,
              url: response.url,
            }));
          }
        }
        setImage((prev) => ({ ...prev, refetch: false }));
      }
    );
  }, [image.refetch, rejectedImageUrls, setImage]);

  return (
    <Wrapper>
      <Text>IMAGE APPROVAL APPLICATION</Text>
      <ApprovedImages />
      <ImageCard image={image} setImage={setImage} />
      {defaultImageUrl === image.url ? (
        <HelpText>
          Click on the <PlusOutlined /> in order to get images recommendation
        </HelpText>
      ) : (
        <ButtonWrapper>
          <Button
            danger
            type="primary"
            shape="round"
            icon={<CloseOutlined />}
            size="large"
            onClick={() => {
              setRejectedImageUrls([...rejectedImageUrls, image.url]);
              setImage((prev) => ({ ...prev, refetch: true }));
            }}
          />
          <Button
            type="primary"
            shape="round"
            icon={<CheckOutlined />}
            size="large"
            onClick={() => {
              setApprovedImageUrls([...approvedImageUrls, image.url]);
              setImage((prev) => ({ ...prev, refetch: true }));
            }}
          />
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 580px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 60px solid var(--main-color);
  border-radius: 12px;
  margin: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  .ant-btn {
    margin: var(--margin-l);
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

const HelpText = styled.div`
  padding: 48px;
  font-weight: 500;
  color: gray;
`;
