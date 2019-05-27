import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import  { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer,
    //store enhancer compose
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),

        //store enhancers
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);
ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
