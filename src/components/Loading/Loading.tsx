import React from "react";
import {
  LoadingContainer,
  LoadingDiv1,
  LoadingDiv2,
  LoadingDiv3,
  LoadingItems,
} from "./loading.styles";

export const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingItems>
        <LoadingDiv1 />
        <LoadingDiv2 />
        <LoadingDiv3 />
      </LoadingItems>
    </LoadingContainer>
  );
};
