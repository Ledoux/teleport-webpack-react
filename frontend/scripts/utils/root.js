import React from 'react'

import context from './context'

export function createRoot (config) {
  const { App } = config

  const setup = Object.assign({}, context,
    typeof window !== 'undefined' && window.__SETUP__)

  const Root = () => <App/>

  return { Root,
    rootProps: Object.assign({ setup }, config)
  }
}

export default createRoot
