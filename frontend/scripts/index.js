// required just for webpack bundling
require('../styles/index.scss')

import React from 'react'
import ReactDOM from 'react-dom'

import Root from './react/containers/Root'

export function domReady () {
  return new Promise(function (resolve) {
    var state = document.readyState
    if (state === 'complete' ||
      state === 'loaded' ||
      state === 'interactive') {
      return resolve()
    }

    document.addEventListener('DOMContentLoaded', function () {
      resolve()
    })
  })
}

domReady().then(() => {
  // actual render app
  const reactDivElement = document.getElementById('app_div')
  if (!reactDivElement) {
    return
  }

  if (!module.hot) {
    // production
    ReactDOM.render(<Root/>, reactDivElement)
  } else {
    // dev
    const AppContainer = require('react-hot-loader').AppContainer
    ReactDOM.render(
      <AppContainer>
        <Root />
      </AppContainer>
      , reactDivElement)
    module.hot.accept('./react/containers/Root', () => {
      const NextRoot = require('./react/containers/Root').default
      ReactDOM.render(
        <AppContainer>
          <NextRoot />
        </AppContainer>,
        reactDivElement
      )
    })
  }
})
