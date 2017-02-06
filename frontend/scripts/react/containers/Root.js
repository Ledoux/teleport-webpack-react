import React from 'react'

import TeleportWelcome from '../components/TeleportWelcome'

const Root = () => (
  <div>
    <TeleportWelcome {...window.TELEPORT_WELCOME}/>
  </div>
)

export default Root
