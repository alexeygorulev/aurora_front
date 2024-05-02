import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Application from './application/Application';
import themes, { THEMES } from 'components/_themes';
import { Provider } from 'react-redux';
import isPropValid from '@emotion/is-prop-valid';
import { createReduxStore } from 'store';

const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={themes[THEMES.DARK]}>
        <Provider store={store}>
          <Application />
        </Provider>
      </ThemeProvider>
    </StyleSheetManager>
  </BrowserRouter>,
);
