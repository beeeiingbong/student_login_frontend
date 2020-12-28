import  { combineReducers }  from 'redux';

import user from './userReducer';
import loading from './loadingReducer'
import details from './InfoReducer'

const rootreducer =combineReducers({user, loading, details});

export default rootreducer;
