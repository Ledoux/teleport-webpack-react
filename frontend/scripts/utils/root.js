import React from 'react'
import config from '../utils/config'

export function createRoot () {
  const { App } = config

  const setup = Object.assign({}, config,
    typeof window !== 'undefined' && window.__SETUP__)

  const Root = () => <App setup={setup} />

  return { Root,
    rootProps: Object.assign({ setup }, config)
  }
}

export default createRoot
