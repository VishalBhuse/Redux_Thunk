import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import { authreducer } from './Auth/auth.reducer';
import { feedreducer } from './Feed/feed.reducer';

import thunk from 'redux-thunk';
const rootreducer = combineReducers({
    
    auth: authreducer ,
    feed : feedreducer,
})

export const Store = legacy_createStore(rootreducer,applyMiddleware(thunk));