import React from "react";
import * as S from "./Main.styles";
import Header from "./Header";
import Banner from "./Banner";
import Explore from "./Explore";

function Main () {
  return (
    <S.MainWrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.BannerWrapper>
        <Banner />
      </S.BannerWrapper>
      <S.ExploreWrapper>
        <Explore />
      </S.ExploreWrapper>
    </S.MainWrapper>
  )
}

export default Main;