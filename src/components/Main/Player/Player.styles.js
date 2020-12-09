import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${colors.lightGray};
  padding: 30px;
`;

export const PlayerIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayerInfo = styled.div`
  margin-left: 20px;

  > small {
    font-size: 10px;
    color: ${colors.lighterGray};
  }
`;

export const PlayerProgress = styled.div`
  flex: 5;
  width: 100%;
  height: 5px;
  border-radius: 20px;
  background-color: ${colors.lightBlack};
  margin: 0 20px;

  > div {
    background-color: ${colors.accent};
    width: 75%;
    height: 5px;
    border-radius: 20px;
  }
`;

export const PlayerTime = styled.div`
  span {
    color: ${colors.lighterGray};
  }
`;