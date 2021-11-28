import React, { Dispatch, SetStateAction } from "react";
import { Card } from "antd";
import styled from "styled-components";

interface Props {
  image: { url: string; refetch: boolean };
  setImage: Dispatch<SetStateAction<{ url: string; refetch: boolean }>>;
}

export const ImageCard = ({ image, setImage }: Props) => (
  <StyledCard
    hoverable
    cover={<img alt="...loading" src={image.url} />}
    onClick={() => {
      setImage((prev) => ({ ...prev, refetch: true }));
    }}
  ></StyledCard>
);

const StyledCard = styled(Card)`
  margin-top: var(--margin-s);
  .ant-card-cover {
    width: 380px;
  }
`;
