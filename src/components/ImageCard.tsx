import React, { useEffect, useState } from "react";
import { Card } from "antd";
import styled from "styled-components";
import ImageState from "../state/ImageState";

export const ImageCard = () => {
  const defaultImage =
    "https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png";
  const [image, setImage] = useState<{ url: string; refetch: boolean }>({
    url: defaultImage,
    refetch: false,
  });
  const { rejectedImageUrls } = ImageState.useContainer();

  const apiUrl = "https://source.unsplash.com/random/300x300";
  useEffect(() => {
    fetch(apiUrl).then((response) => {
      if (
        response.ok &&
        rejectedImageUrls.filter((urls) => !urls.includes(response.url))
      ) {
        setImage((prev) => ({
          ...prev,
          url: response.url,
        }));
      }
      setImage((prev) => ({ ...prev, refetch: true }));
    });
  }, [image.refetch, rejectedImageUrls]);

  return (
    <StyledCard
      hoverable
      cover={
        <img
          alt="...loading"
          src={image.url}
          onClick={() => {
            if (image.url !== defaultImage) {
              setImage((prev) => ({
                ...prev,
                refetch: !image.refetch,
              }));
            }
          }}
        />
      }
      onClick={() =>
        setImage((prev) => ({
          ...prev,
          refetch: !image.refetch,
        }))
      }
    ></StyledCard>
  );
};

const StyledCard = styled(Card)`
  .ant-card-cover {
    width: 380px;
  }
`;
