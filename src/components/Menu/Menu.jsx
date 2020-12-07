import React from "react";
import * as S from "./Menu.styles";
import { RiHeadphoneFill } from "react-icons/ri";
import MenuList from "./MenuList";
import Goal from "./Goal";

function Menu () {
  return (
    <S.MenuWrapper>
      <S.TitleWrapper>
        <RiHeadphoneFill
          size={36}
        />
        <S.Title>Podcast Land</S.Title>
      </S.TitleWrapper>
      <S.MenuListContainer>
        <MenuList />
      </S.MenuListContainer>
      <S.GoalWrapper>
        <Goal />
      </S.GoalWrapper>
    </S.MenuWrapper>
  )
}

export default Menu;