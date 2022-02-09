
import workerReducers from '../workersReducers';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    worker : workerReducers
});
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['worker']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, composeWithDevTools());
export const persisted = persistStore(store);


