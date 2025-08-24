import { useState } from 'react';
import GeneralInformation from './sections/GeneralInfo/GeneralInfo';
import WorkHistory from './sections/WorkHistory/WorkHistory';
import Education from './sections/Education/Education';

import './FormPanel.scss';

interface FormPanelProps {
   activeSection: string;
}

export default function FormPanel({ activeSection }: FormPanelProps) {
   const [generalInfo, setGeneralInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postalCode: '',
      city: '',
      country: '',
   });

   const [workHistory, setWorkHistory] = useState({
      jobTitle: '',
      companyName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
   });

   const [education, setEducation] = useState({
      diplomaName: '',
      schoolName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
   });

   return (
      <div className="form-panel">
         {activeSection === 'general' && <GeneralInformation data={generalInfo} onChange={setGeneralInfo} />}
         {activeSection === 'work' && <WorkHistory data={workHistory} onChange={setWorkHistory} />}
         {activeSection === 'education' && <Education data={education} onChange={setEducation} />}
      </div>
   );
}
