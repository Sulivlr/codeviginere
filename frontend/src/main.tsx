import {createRoot} from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@mui/material';
import theme from './theme';
import {store} from './app/store';
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);