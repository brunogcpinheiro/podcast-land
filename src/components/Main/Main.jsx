import React from "react";
import * as S from "./Main.styles";
import Header from "./Header";
import Banner from "./Banner";

function Main () {
  return (
    <S.MainWrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.BannerWrapper>
        <Banner />
      </S.BannerWrapper>
    </S.MainWrapper>
  )
}

export default Main;