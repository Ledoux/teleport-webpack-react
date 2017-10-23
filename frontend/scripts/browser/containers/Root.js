import React from 'react'

import TeleportWelcome from '../components/TeleportWelcome'

const Root = () => (
  <div>
    <TeleportWelcome {...JSON.parse(window.TELEPORT_WELCOME_STRING)} />
  </div>
)

export default Root
