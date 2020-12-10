import React from "react";
import * as S from "./Sidebar.styles";
import Header from "./Header";
import Stats from "./Stats";

function Sidebar () {
  return (
    <S.SidebarWrapper>
      <S.HeaderWrapper>
        <Header title="Your time statistics"/>
      </S.HeaderWrapper>
      <S.StatsWrapper>
        <Stats
          type="time"
        />
      </S.StatsWrapper>
      <S.HeaderWrapper>
        <Header title="Your category statistics"/>
      </S.HeaderWrapper>
      <S.StatsWrapper>
        <Stats
          type="category"
        />
      </S.StatsWrapper>
    </S.SidebarWrapper>
  )
}

export default Sidebar; 