import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #424242;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 20% 55% 25%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "menu main sidebar";
`;

export const Menu = styled.aside`
  grid-area: menu;
  padding: 20px;
`;

export const Main = styled.main`
  grid-area: main;
  padding: 20px;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  padding: 20px;
`;