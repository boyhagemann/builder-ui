import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { Route } from 'react-router'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { ThemeProvider, injectGlobal } from 'styled-components'
import Color from 'color'

import App from './components/App'
import Navbar from './components/Navbar'
import ComponentsPage from './pages/ComponentsPage'
import ComponentPage from './pages/ComponentPage'
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

const variables = {
  color: {
    canvas: "#f9f8f7",
    primary: "#1E88E5",
    blank: "#fff",
    dark: "#444",
    negative: "#e44",
  }
}

const defaultTheme = {
  width: 1200,
  font: {
    size: {
      tiny: 10,
      small: 13,
      default: 16,
      large: 25,
      huge: 40,
    },
    family: {
      default: '"Trebuchet MS", Helvetica, sans-serif',
    }
  },
  color: {
    canvas: {
      default: variables.color.canvas,
      highlight: Color(variables.color.canvas).lighten(0.2).string(),
      offset: Color(variables.color.canvas).darken(0.03).string(),
      text: Color(variables.color.canvas).darken(0.6).string()
    },
    primary: {
      default: variables.color.primary,
      highlight: Color(variables.color.primary).lighten(0.2).string(),
      text: variables.color.blank
    },
    negative: {
      default: variables.color.negative,
      highlight: Color(variables.color.negative).lighten(0.2).string(),
      text: variables.color.blank
    },
    neutral: {
      default: Color(variables.color.canvas).darken(0.03).string(),
      highlight: Color(variables.color.canvas).darken(0.1).string(),
      strong: Color(variables.color.canvas).darken(0.3).string(),
      text: Color(variables.color.canvas).darken(0.6).string(),
    }
  },
  spacing: {
    huge: 48,
    large: 24,
    default: 16,
    small: 8,
    tiny: 2
  }
}

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
          <Navbar />
          <Route exact path="/" component={App} />
          <Route exact path="/components" component={ComponentsPage} />
          <Route path="/components/:id/:topic?/:node?/:field?" component={ComponentPage} />
        </div>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
