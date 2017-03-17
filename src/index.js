import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import App from './components/App'
import ComponentsPage from './pages/ComponentsPage'
import ComponentPage from './pages/ComponentPage'
import NodesPage from './pages/NodesPage'
import { reducers, epics } from './ducks'

const epicMiddleware = createEpicMiddleware(epics)


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(
        epicMiddleware,
        routerMiddleware(history)
    )
  )
)


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/components" component={ComponentsPage} />
        <Route path="/components/:id" component={ComponentPage} />

        <Switch>
          <Route path="/components/:id/nodes/:node?/:field?" component={NodesPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
