import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideBar from 'components/sidebar';
import Main from "./components/main"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <SideBar></SideBar>
      <Main></Main>
  </React.StrictMode>
);
