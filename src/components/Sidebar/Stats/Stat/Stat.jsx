import React from "react";
import * as S from "./Stat.styles";

function Stat ({ day, minutes, progress, color }) {
  return (
    <S.StatContainer>
      <S.Info>
        <p color={color}>{day}</p>
        <small>{minutes}min</small>
      </S.Info>
      <S.Progress
        color={color}
        progress={progress}
      >
        <div />
      </S.Progress>
      <S.Percentage color={color}>
        {progress}
      </S.Percentage>
    </S.StatContainer>
    
  );
}

export default Stat;