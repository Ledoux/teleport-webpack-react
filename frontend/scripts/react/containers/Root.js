import React from 'react'

import TeleportWelcome from '../components/TeleportWelcome'

const Root = () => (
  <div>
    <TeleportWelcome {...window.__TELEPORT__}/>
  </div>
)

export default Root
