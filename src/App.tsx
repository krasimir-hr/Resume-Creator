// import { useState } from 'react'
import FormPanel from './features/FormPanel/FormPanel'
import Sidebar from './features/Sidebar/Sidebar'

import './App.scss'

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <FormPanel />
    </div>
  )
}

export default App
