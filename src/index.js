import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './components/App.jsx';
import { Provider } from "react-redux";
import store from "./react/store/index.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
