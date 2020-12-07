import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  > p {
    color: ${colors.accent};
    font-size: 16px;
  }
`;
