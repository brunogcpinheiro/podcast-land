import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const CardContainer = styled.div`
  background-color: ${colors.gray};
  width: 450px;
  height: 200px;
  padding: 10px;
  border-radius: 20px;
  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
  -moz-box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
  box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImageContainer = styled.div`
  background-color: ${colors.lightGray};
  height: 100%;
  padding: 5px;
  border-radius: 15px;
  flex: 1;

  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 2;
  padding: 20px;
`;

export const CardInfoHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 20px 0;

  .info-text {
    > small {
      font-size: 10px;
      color: ${colors.lighterGray};
    }
  }
`;

export const CardDetailsActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardDetailsInfoContainer = styled.div`
  padding: 20px 0;
  flex: 3;

  .details {
    display: flex;
    align-items: center;
    color: ${colors.lighterGray};
    margin-top: 10px;

    p {
      margin-left: 10px;
      font-size: 10px;
    }
  }
`;

export const CardPlayButtonContainer = styled.div`
  background-color: ${colors.lightGray};
  border-radius: 20px;
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;

  .play_icon {
    padding: 5px;
    margin-right: 7px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.lightBlack}; 
  }
`;