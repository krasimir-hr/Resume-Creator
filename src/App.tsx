import { useState } from 'react'
import FormPanel from './features/FormPanel/FormPanel'
import Sidebar from './features/Sidebar/Sidebar'

import './App.scss'

function App() {
  const [activeSection, setActiveSection] = useState<string>('general');

  return (
    <div className="wrapper">
      <Sidebar setActiveSection={setActiveSection}/>
      <FormPanel activeSection={activeSection}/>
    </div>
  )
}

export default App
