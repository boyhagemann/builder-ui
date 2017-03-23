import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { ThemeProvider, injectGlobal } from 'styled-components'
import defaultTheme, { variables } from './themes/default'

import App from './components/App'
import Navbar from './components/Navbar'
import ComponentsPage from './components/ComponentsPage'
import ComponentPage from './components/ComponentPage'
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

injectGlobal`
	body {
		margin: 0;
      color: ${ defaultTheme.color.canvas.text };
      background: ${ variables.color.canvas };
	}
  body, input, textarea {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={defaultTheme}>
        <div>
          <Route path="/:part?" component={Navbar} />
          <Route exact path="/" component={App} />
          <Route exact path="/components" component={ComponentsPage} />
          <Route path="/components/:id/:topic?" component={ComponentPage} />
        </div>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
