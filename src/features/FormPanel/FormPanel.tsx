import { useState } from "react";
import GeneralInformation from "./sections/GeneralInfo/GeneralInfo";
import WorkHistory from "./sections/WorkHistory/WorkHistory";
import Education from "./sections/Education/Education";

import './FormPanel.scss'

export default function FormPanel() {
   const [generalInfo, setGeneralInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      postalCode: '',
      city: '',
      country: '',
   })

   const [workHistory, setWorkHistory] = useState({
      jobTitle: '',
      companyName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
   })

   const [education, setEducation] = useState({
      diplomaName: '',
      schoolName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
      })

   return (
      <div className="form-panel">
         <GeneralInformation 
            data={generalInfo}
            onChange={setGeneralInfo}
         />
         <WorkHistory
            data={workHistory}
            onChange={setWorkHistory}
         />
         <Education
            data={education}
            onChange={setEducation}
         />

      </div>
   )
}