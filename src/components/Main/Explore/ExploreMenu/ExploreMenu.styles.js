import styled from 'styled-components';

export const ExplorerMenuContainer = styled.ul`
  width: 100%;
  display: flex;
  padding: 20px 10px 10px 0;
  margin-right: 20px;
`;

export const ExplorerMenuItem = styled.li`
  color: ${props => props.active ? "#f4511e" : "white"};
  margin-left: 20px;
  font-size: 14px;

  &:first-child {
    margin-left: 0;
  }
`;
