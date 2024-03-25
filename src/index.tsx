import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import App from './pages/App';
import GlobalStyle from './styles';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import './styles/index.css';

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
]);

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
