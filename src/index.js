import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { ThemeProvider, injectGlobal } from 'styled-components'
import defaultTheme, { variables } from './themes/default'

import App from './components/App'
import Navbar from './components/Navbar'
import Content from './components/Content'
import ComponentHeader from './components/ComponentHeader'
import ComponentsPage from './components/ComponentsPage'
import ComponentCreateContainer from './components/ComponentCreateContainer'

import FieldListContainer from './components/FieldListContainer'
import FieldPropertiesContainer from './components/FieldPropertiesContainer'
import ComponentPropertiesContainer from './components/ComponentPropertiesContainer'
import NodePropertiesContainer from './components/NodePropertiesContainer'
import NodeContentContainer from './components/NodeContentContainer'
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

injectGlobal([`
	body {
		margin: 0;
      color: ${ defaultTheme.color.canvas.text };
      background: ${ variables.color.canvas };
	}
  body, input, textarea {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
  *:focus {
    outline: none;
  }
`])


    const renderDashboard = () => (
      <div>dashboard</div>
    )

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={defaultTheme}>
        <div>
          <Route path="/:part?" component={Navbar} />

          <Route path="/components/:id/:topic" component={ComponentHeader} />

          <Content>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/components" component={ComponentsPage} />
              <Route exact path="/components/create" component={ComponentCreateContainer} />
              <Route exact path="/components/:id/dashboard" component={renderDashboard} />
              <Route exact path="/components/:id/properties" component={ComponentPropertiesContainer} />
              <Route exact path="/components/:id/fields" component={FieldListContainer} />
              <Route exact path="/components/:id/fields/:field" component={FieldPropertiesContainer} />
              <Route exact path="/components/:id/nodes" component={NodeContentContainer} />
              <Route exact path="/components/:id/nodes/:node" component={NodePropertiesContainer} />
              <Route exact path="/components/:id/nodes/:node/:field" component={NodeContentContainer} />
            </Switch>
          </Content>

        </div>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
