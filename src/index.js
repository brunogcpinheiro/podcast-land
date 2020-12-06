import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './views/Home.view';
import GlobalStyles from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <HomeView />
  </React.StrictMode>,
  document.getElementById('root')
);
