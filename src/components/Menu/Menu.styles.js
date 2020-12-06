import styled from "styled-components";
import { colors } from "../../styles/colors";

export const MenuWrapper = styled.aside`
  background-color: ${colors.gray};
  height: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const MenuListContainer = styled.div`
  
`;