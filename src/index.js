import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'

import rootReducer from './reducers'
import App from './components/app/index'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

render (
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
)