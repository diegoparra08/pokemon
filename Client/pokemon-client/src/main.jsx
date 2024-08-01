import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../src/redux/store/store.js';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import theme from './theme/theme.js';
import './index.css';

import '@fontsource/roboto/300.css'; // Importación correcta de la fuente Roboto
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffd600',
      dark: '#ff9100',
    },
    secondary: {
      main: '#e61408',
    },
    error: {
      main: '#42a5f5',
    },
  },

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
        </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

