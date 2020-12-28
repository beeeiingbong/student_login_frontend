import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers';
import { apiMiddleware } from './middleware'

export default function configureStore(initialState){
    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
    return createStore(rootReducer, initialState, applyMiddleware(apiMiddleware))
    
}