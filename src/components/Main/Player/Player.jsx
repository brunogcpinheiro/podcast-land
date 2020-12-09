import React from "react";
import * as S from "./Player.styles";
import { RiPauseCircleLine } from "react-icons/ri";

function Player () {
  return (
    <S.PlayerContainer>
      <S.PlayerIcon>
        <RiPauseCircleLine
          size={36}
        />
        <S.PlayerInfo>
          <h4>Icon design learning</h4>
          <small>Visual Design</small>
        </S.PlayerInfo>
      </S.PlayerIcon>
      <S.PlayerProgress>
        <div />
      </S.PlayerProgress>
      <S.PlayerTime>
        <p>24:23 <span>/ 30:41</span></p> 
      </S.PlayerTime>
    </S.PlayerContainer>
  );
}

export default Player;