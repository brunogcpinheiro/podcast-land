import React from "react";
import * as S from "./Header.styles";

function Header ({title}) {
  return (
    <S.HeaderContainer>
      <h2>{title}</h2>
    </S.HeaderContainer>
  );
}

export default Header;