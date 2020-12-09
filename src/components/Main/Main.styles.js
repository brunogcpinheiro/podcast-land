import styled from "styled-components";
import { colors } from "../../styles/colors";

export const MainWrapper = styled.div`
  background-color: ${colors.lightBlack};
  height: 100%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 20px;
`;

export const BannerWrapper = styled.div`
  display: flex;
  padding: 0 30px 50px 30px;
  width: 100%;
  flex: 2;
`;

export const ExploreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 40px;
  flex: 3;
`;

export const PlayerWrapper = styled.div`
  display: flex;
  width: 100%;
`;