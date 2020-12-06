import React from "react";
import * as S from "./MenuList.styles";
import { RiCompass3Fill, RiShoppingCartFill, RiSearch2Fill, RiNotification2Fill, RiStarHalfFill, RiShieldStarFill } from "react-icons/ri";

function MenuList () {
  return (
    <S.MenuListWrapper>
      <S.MenuListItem active>
        <div>
          <RiCompass3Fill
            size={24}
            color={"#f4511e"}
          />
          <S.MenuText>
            Discovery
          </S.MenuText>
        </div>
        
      </S.MenuListItem>

      <S.MenuListItem>
        <div>
          <RiShoppingCartFill
            size={20}
          />
          <S.MenuText>
            Shop
          </S.MenuText>
        </div>
        
      </S.MenuListItem>

      <S.MenuListItem>
        <div>
          <RiSearch2Fill
            size={20}
          />
          <S.MenuText>
            Search
          </S.MenuText>
        </div>
        
      </S.MenuListItem>

      <S.MenuListItem>
        <div>
          <RiNotification2Fill
            size={20}
          />
          <S.MenuText>
            Notification
          </S.MenuText>
        </div>
        
      </S.MenuListItem>

      <S.MenuListItem>
        <div>
          <RiStarHalfFill
            size={20}
          />
          <S.MenuText>
            Favorites
          </S.MenuText>
        </div>
        
      </S.MenuListItem>

      <S.MenuListItem>
        <div>
          <RiShieldStarFill
            size={20}
          />
          <S.MenuText>
            Premium
          </S.MenuText>
        </div>
        
      </S.MenuListItem>
    </S.MenuListWrapper>
  )
}

export default MenuList;