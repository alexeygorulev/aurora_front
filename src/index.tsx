import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Application from './application/Application';
import themes, { THEMES } from 'components/_themes';
import isPropValid from '@emotion/is-prop-valid';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={themes[THEMES.DARK]}>
          <Application />
        </ThemeProvider>
      </StyleSheetManager>
    </BrowserRouter>
  </React.StrictMode>,
);
