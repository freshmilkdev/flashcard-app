import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import { Provider } from 'react-redux';


import * as reducers from './reducers';

import App from './components/app';
import Sidebar from './components/sidebar';
//cards: cards in ES5,
const store = Redux.createStore(Redux.combineReducers(reducers));

function run(){
    let state = store.getState();
    console.log(state);
    ReactDOM.render(
        <Provider store={store}>
            <App>
                <Sidebar/>
            </App>
        </Provider>
        , document.getElementById('root'));
}

run();

store.subscribe(run);

window.show = () => store.dispatch(showAddDeck());