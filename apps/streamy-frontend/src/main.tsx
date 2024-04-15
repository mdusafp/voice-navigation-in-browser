import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { StreamyTheme } from './components/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <StreamyTheme>
        <App />
      </StreamyTheme>
    </BrowserRouter>
  </StrictMode>
);
