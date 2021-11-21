import React, { useState } from "react";
import { Card } from "antd";
import styled from "styled-components";

export const ImageCard = () => {
  const [image, setImage] = useState(
    "https://storage.needpix.com/rsynced_images/instagram-3814061_1280.png"
  );

  const getImage = () => {
    setImage("https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png");
  };

  return (
    <StyledCard
      hoverable
      cover={<img alt="example" src={image} onClick={() => getImage()} />}
      onClick={() => getImage()}
    ></StyledCard>
  );
};

const StyledCard = styled(Card)`
  .ant-card-cover {
    width: 380px;
  }
`;
