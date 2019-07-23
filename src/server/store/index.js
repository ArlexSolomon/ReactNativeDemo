import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const configureStore = preloadedState => {
    return createStore(
        reducers,
        compose(
            applyMiddleware(createLogger, thunk)
        )
    );
}

const store = configureStore();

export default store;