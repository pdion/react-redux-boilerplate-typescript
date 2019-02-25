import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import storeReducer from 'src/redux/reducers';



export const store = createStore(
    storeReducer,
    {},
    compose(applyMiddleware(thunk)),
);
