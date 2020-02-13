import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas/rootSaga'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware];


if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}
const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
