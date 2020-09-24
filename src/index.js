import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import history from './history';
import store from './redux/store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
