import styled from "styled-components";

export const MenuListWrapper = styled.div`
  display: flex;
  aling-items: center;
  flex-direction: column;
`;

export const MenuListItem = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  border-left: ${props => props.active ? "7px solid #f4511e" : "transparent"};
  color: ${props => props.active ? "#f4511e" : "white"};
  padding: 0;
  margin: 5px 0;
  background: ${props => props.active ? "linear-gradient(90deg, rgba(238,80,29,0.1516981792717087) 18%, rgba(50,50,50,0.17130602240896353) 90%);" : ""};

  > div {
    margin-left: ${props => props.active ? "41px": "50px"};
    display: flex;
    align-items: center;
  }
`;

export const MenuText = styled.h6`
  font-size: 15px;
  margin-left: 15px;
`;