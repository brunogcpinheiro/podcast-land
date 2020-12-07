import styled from 'styled-components';
import { colors } from "../../../styles/colors";

export const BannerContainer = styled.div`
  width: 100%;
  background-color: ${colors.gray};
  padding: 20px 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
  -moz-box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
  box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
`;

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

  > p {
    margin: 20px 0;
    font-size: 14px;
    font-style: italic;
  }
`;

export const BannerImg = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;

  > img {
    height: 210px;
    disply: block;
  }
`;

export const Subscription = styled.div`
  display: flex;

  span {
    padding: 10px 20px;
    border-radius: 20px;
    margin-right: 20px;
    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
    -moz-box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
    box-shadow: 0 2px 4px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.5);
    font-weight: bold;
    cursor: pointer;
  }

  > span:first-child {
    background-color: ${colors.accent};
    
  }

  > span:last-child {
    border: 1px solid ${colors.lightBlack};
  }
`;
