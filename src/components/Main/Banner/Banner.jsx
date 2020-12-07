import React from "react";
import * as S from "./Banner.styles";
import Discount from "../../../assets/discount.svg";

function Banner () {
  return (
    <S.BannerContainer>
      <S.BannerInfo>
        <h2>Upgrade your plan</h2>
        <p>30% discount for 1 year subscription</p>
        <S.Subscription>
          <span>Get Premium</span>
          <span>Try for free</span>
        </S.Subscription>
      </S.BannerInfo>
      <S.BannerImg>
        <img src={Discount} alt="Discount"/>
      </S.BannerImg>
    </S.BannerContainer>
  );
}

export default Banner;