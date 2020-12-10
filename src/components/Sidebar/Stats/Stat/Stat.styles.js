import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const StatContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  color: ${props => props.color || "white"};
`;

export const Progress = styled.div`
  height: 5px;
  background-color: ${colors.lightBlack};
  width: 100%;
  flex: 3;
  border-radius: 20px;
  margin-right: 20px; 

  > div {
    height: 5px;
    background-color: ${props => props.color || "red"};;
    width: ${props => props.progress || "50"};
    border-radius: 20px;
  }
`;

export const Percentage = styled.div`
  color: ${props => props.color || "red"};
`;