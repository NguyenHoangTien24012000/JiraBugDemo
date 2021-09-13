import {combineReducers,createStore,applyMiddleware} from 'redux'
import { rootSaga } from './sagas/rootSaga'
import createMiddleWareSaga from 'redux-saga'
import LoadingReducer from './reducers/LoadingReducer'
const middleWareSaga = createMiddleWareSaga()




const rootReducer = combineReducers({
    LoadingReducer,    
})

const store = createStore(rootReducer,applyMiddleware(middleWareSaga))

middleWareSaga.run(rootSaga);

export default store;