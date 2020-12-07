import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const GoalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GoalImg = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 60px;

  > img {
    width: 100%;
    display: block;
  }
`;

export const GoalText = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 20px;

  > span {
    color: ${colors.accent};
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  > p {
    font-weight: bold;
    font-size: 18px;

    > small {
      font-weight: normal;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  padding: 7px;
  height: 6px;
  border-radius: 20px;
  background-color: ${colors.lightBlack};
  margin: 5px;
  display: flex;
  align-items: center;

  > div {
    background-color: ${colors.accent};
    width: 70%;
    height: 100%;
    height: 4px;
    border-radius: 20px;
    justify-self: flex-start;
  }
`;