import React from 'react';
import * as S from "./ExploreMenu.styles";

function ExploreMenu () {
  return (
    <S.ExplorerMenuContainer>
      <S.ExplorerMenuItem>
        <p>Recently played</p>
      </S.ExplorerMenuItem>
      <S.ExplorerMenuItem active>
        <p>Top podcasts</p>
      </S.ExplorerMenuItem>
      <S.ExplorerMenuItem>
        <p>New podcasts</p>
      </S.ExplorerMenuItem>
      <S.ExplorerMenuItem>
        <p>Best sellers</p>
      </S.ExplorerMenuItem>
    </S.ExplorerMenuContainer>
  );
}

export default ExploreMenu;

