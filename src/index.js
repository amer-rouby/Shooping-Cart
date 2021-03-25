import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
