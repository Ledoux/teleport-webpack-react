import config from '../utils/config'

export function createRoot () {
  const setup = Object.assign({}, config,
    typeof window !== 'undefined' && window.__SETUP__)
  return { setup }
}

export default createRoot
