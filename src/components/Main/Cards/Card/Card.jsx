import React from "react";
import * as S from "./Card.styles";
import { RiMore2Line, RiImageEditLine, RiTimeFill, RiPlayFill } from "react-icons/ri";

function Card ({ image, title, author, category, time }) {
  return (
    <S.CardContainer>
      <S.CardImageContainer>
        <img src={image} alt="Ux Design"/>
      </S.CardImageContainer>
      <S.CardInfoContainer>
        <S.CardInfoHeaderContainer>
          <div className="info-text">
            <h3>{title}</h3>
            <small>By {author}</small>
          </div>
          <div className="info-icon">
            <RiMore2Line
              size={18}
            />
          </div>
        </S.CardInfoHeaderContainer>
        <S.CardDetailsActionContainer>
          <S.CardDetailsInfoContainer>
            <div className="details">
              <RiImageEditLine
                size={18}
              />
              <p>{category}</p> 
            </div>
            <div className="details">
              <RiTimeFill
                size={18}
              />
              <p>{time}</p>
            </div>
          </S.CardDetailsInfoContainer>
          <S.CardPlayButtonContainer>
            <div className="play_icon">
              <RiPlayFill />
            </div>
            <h5>Play</h5>
          </S.CardPlayButtonContainer>
        </S.CardDetailsActionContainer>
      </S.CardInfoContainer>
    </S.CardContainer>
  );
}

export default Card;