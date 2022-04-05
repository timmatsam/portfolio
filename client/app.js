import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderNav } from './index';
import Routes from './components/Routes';

ReactDOM.render(
  <BrowserRouter>
    <div id="main">
      <HeaderNav />
      <Routes />
    </div>
  </BrowserRouter>,
  document.getElementById('app'),
);
