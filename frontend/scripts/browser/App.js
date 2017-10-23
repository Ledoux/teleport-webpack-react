import React from 'react'

import TeleportWelcome from '../components/TeleportWelcome'

const App = () => (
  <div>
    <TeleportWelcome {...JSON.parse(window.TELEPORT_WELCOME_STRING)}/>
  </div>
)

export default App
