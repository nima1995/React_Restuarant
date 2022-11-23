import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { restuarantListReducer } from './Reducers/restuarantReducer'

const reducers = combineReducers({
    restuarantReducer:restuarantListReducer
})

// creating middleware
const middleware = [thunk]
// create store
const store =createStore(reducers,applyMiddleware(...middleware))

export default store