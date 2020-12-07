import React from "react";
import * as S from "./Goal.styles";
import GoalImg from "../../../assets/listening.svg";

function Goal () {
  return (
    <S.GoalContainer>
      <S.GoalImg>
        <img src={GoalImg} alt="Listening Goal" />
      </S.GoalImg>
      
      <S.GoalText>
        Your listening <br/> is <span>complete</span> today
      </S.GoalText>

      <S.Progress>
        <p>252 /<small> 360min</small></p>
        <S.ProgressBar>
          <div />
        </S.ProgressBar>
      </S.Progress>
    </S.GoalContainer>
  );
}

export default Goal;