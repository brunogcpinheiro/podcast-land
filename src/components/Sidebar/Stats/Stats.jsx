import React from "react";
import * as S from "./Stats.styles";
import Stat from "./Stat";

function Stats ({type}) {
  return type === "time" ? (
    <S.StatsContainer>
      <Stat
        day="Today"
        minutes="354"
        progress="56%"
        color="#FDD835"
      />
      <Stat
        day="Lasterday"
        minutes="220"
        progress="43%"
        color="#ef5350"
      />
      <Stat
        day="Last week"
        minutes="1029"
        progress="89%"
        color="#8BC34A"
      />
      <Stat
        day="Last Month"
        minutes="2330"
        progress="77%"
        color="#8BC34A"
      />
    </S.StatsContainer>
  ): (
    <S.StatsContainer>
      <Stat
        day="Design"
        minutes="22"
        progress="7%"
        color="#ef5350"
      />
      <Stat
        day="Programming"
        minutes="2207"
        progress="68%"
        color="#8BC34A"
      />
      <Stat
        day="Logic"
        minutes="2"
        progress="1%"
        color="#ef5350"
      />
      <Stat
        day="UI/UX"
        minutes="2330"
        progress="77%"
        color="#FDD835"
      />
    </S.StatsContainer>
  );
}

export default Stats;