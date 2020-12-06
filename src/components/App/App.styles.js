import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 70px;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 15% 60% 25%;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "menu main sidebar";
  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.5);
  -moz-box-shadow: 0 3px 6px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.5);
  box-shadow: 0 3px 6px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.5);
`;

export const Menu = styled.aside`
  grid-area: menu;
`;

export const Main = styled.main`
  grid-area: main;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
`;