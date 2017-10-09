require('./utils/styles')
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './react/containers/Root'
import root from './roots/browser.root'
import init from './utils/init'
import ready from './utils/ready'
<<<<<<< HEAD
=======
import root from './utils/browser.root'
>>>>>>> d35d50c46947819ba9e6cc958451db5909d2e4dd

// READY
ready().then(() => {
  // INIT
  init && init(root)
  // RENDER
  const reactDivElement = document.getElementById('app_div')
  if (!reactDivElement) {
    return
  }
  if (!module.hot) {
    // production
    ReactDOM.render(<Root {...root} />, reactDivElement)
  } else {
    // dev
    const AppContainer = require('react-hot-loader').AppContainer
    ReactDOM.render(
      <AppContainer>
        <Root {...root} />
      </AppContainer>
      , reactDivElement)
    module.hot.accept('./react/containers/Root', () => {
      const NextRoot = require('./react/containers/Root').default
      ReactDOM.render(
        <AppContainer>
          <NextRoot {...root} />
        </AppContainer>,
        reactDivElement
      )
    })
  }
})
