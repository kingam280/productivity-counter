import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware()
    )
    );