import React from "react";
import * as S from "./App.styles";
import Menu from "../Menu";
import Main from "../Main";
import Sidebar from "../Sidebar";

function App () {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Menu>
          <Menu />
        </S.Menu>
        <S.Main>
          <Main />
        </S.Main>
        <S.Sidebar>
          <Sidebar />
        </S.Sidebar>
      </S.Container>
    </S.Wrapper>
  )
}

export default App;
