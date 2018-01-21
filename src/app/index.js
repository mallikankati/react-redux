import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import configureStore from './store/configureStore';
import { loadVideoData } from './actions/videoActions';

import App from './components/App';

const store = configureStore();

store.dispatch(loadVideoData());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app'));