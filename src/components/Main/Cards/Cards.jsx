import React from "react";
import * as S from "./Cards.styles";
import Card from "./Card";
import UX from "../../../assets/ux.svg";
import LayoutDesign from "../../../assets/layout.svg";

function Cards () {
  return (
    <S.CardsContainer>
      <Card
        image={UX}
        title="Best Tips for UI/UX"
        author="Arman Rokni"
        category="Icon Design"
        time="1h 34m"
      />
      <Card
        image={LayoutDesign}
        title="Leaning about design"
        author="Bruno Pinheiro"
        category="Layout Design"
        time="6h 24m"
      />
    </S.CardsContainer>
  );
}

export default Cards;