import React from "react";
import * as S from "./Explore.styles";
import ExploreMenu from "./ExploreMenu";

function Explore () {
  return (
    <S.ExploreContainer>
      <h1>Explore</h1>
      <ExploreMenu />
    </S.ExploreContainer>
  );
}

export default Explore;