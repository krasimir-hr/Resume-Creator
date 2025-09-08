import { useState } from 'react';
import FormPanel from './features/FormPanel/FormPanel';
import Sidebar from './features/Sidebar/Sidebar';

import type { WorkHistoryEntry } from './features/FormPanel/sections/WorkHistory/WorkHistory';
import type { EducationEntry } from './features/FormPanel/sections/Education/Education';

import PreviewPanel from './features/PreviewPanel/PreviewPanel';

import './App.scss';

function App() {
   const [activeSection, setActiveSection] = useState<string>('general');

   const [generalInfo, setGeneralInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postalCode: '',
      city: '',
      country: '',
   });

   const [workHistory, setWorkHistory] = useState<WorkHistoryEntry[]>([]);
   const [education, setEducation] = useState<EducationEntry[]>([]);

   return (
      <div className="wrapper">
         <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

         {activeSection !== 'final' && (
            <FormPanel
               activeSection={activeSection}
               setActiveSection={setActiveSection}
               generalInfo={generalInfo}
               setGeneralInfo={setGeneralInfo}
               workHistory={workHistory}
               setWorkHistory={setWorkHistory}
               education={education}
               setEducation={setEducation}
            />
         )}

            <PreviewPanel generalInfo={generalInfo} workHistory={workHistory} education={education} activeSection={activeSection}/>

      </div>
   );
}

export default App;
