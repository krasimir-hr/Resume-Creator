import GeneralInformation from './sections/GeneralInfo/GeneralInfo';
import WorkHistory from './sections/WorkHistory/WorkHistory';
import Education from './sections/Education/Education';
import type { GeneralInformationEntry } from './sections/GeneralInfo/GeneralInfo';
import type { WorkHistoryEntry } from './sections/WorkHistory/WorkHistory';
import type { EducationEntry } from './sections/Education/Education';

import NextButton from '../../components/NextButton/NextButton';

import './FormPanel.scss';

interface FormPanelProps {
   activeSection: string;
   setActiveSection: (section: string) => void;
   generalInfo: GeneralInformationEntry;
   setGeneralInfo: (info: GeneralInformationEntry) => void;
   workHistory: WorkHistoryEntry[];
   setWorkHistory: (jobs: WorkHistoryEntry[]) => void;
   education: EducationEntry[];
   setEducation: (edu: EducationEntry[]) => void;
}

export default function FormPanel({
   activeSection,
   setActiveSection,
   generalInfo,
   setGeneralInfo,
   workHistory,
   setWorkHistory,
   education,
   setEducation,
}: FormPanelProps) {
   function handleNext() {
      if (activeSection === 'general') {
         setActiveSection('work');
      } else if (activeSection === 'work') {
         setActiveSection('education');
      } else if (activeSection === 'education') {
         setActiveSection('final');
      }
   }

   function isNextDisabled() {
      if (activeSection === 'general') {
         return Object.values(generalInfo).some((value) => !value.trim());
      } else if (activeSection === 'work') {
         return workHistory.length === 0;
      } else if (activeSection === 'education') {
         return education.length === 0;
      }
      return false;
   }

   return (
      <div className="form-panel">
         {activeSection === 'general' && <GeneralInformation data={generalInfo} onChange={setGeneralInfo} />}
         {activeSection === 'work' && <WorkHistory data={workHistory} onChange={setWorkHistory} />}
         {activeSection === 'education' && <Education data={education} onChange={setEducation} />}

         <div className="button-wrapper">
            {activeSection !== 'final' && <NextButton onClick={handleNext} disabled={isNextDisabled()}/>}
         </div>
      </div>
   );
}
