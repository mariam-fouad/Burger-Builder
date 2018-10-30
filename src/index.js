import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import {watchAuth , watchBurger} from './store/saga';

const composeEnhancers =process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk,sagaMiddleware)));
sagaMiddleware.run(watchAuth);
sagaMiddleware.run (watchBurger);
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
