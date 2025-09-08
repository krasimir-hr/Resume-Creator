import type { GeneralInformationEntry } from '../FormPanel/sections/GeneralInfo/GeneralInfo';
import type { WorkHistoryEntry } from '../FormPanel/sections/WorkHistory/WorkHistory';
import type { EducationEntry } from '../FormPanel/sections/Education/Education';

import { PhoneIphone, Email, LocationPin } from '@mui/icons-material';


import { useRef } from 'react';

import './PreviewPanel.scss';

interface PreviewPanelProps {
   generalInfo: GeneralInformationEntry;
   workHistory: WorkHistoryEntry[];
   education: EducationEntry[];
   activeSection: string;
}

export default function PreviewPanel({ generalInfo, workHistory, education }: PreviewPanelProps) {
   const componentRef = useRef<HTMLDivElement>(null);
   return (
      <div className="preview-wrapper">
         <div className="preview-panel" ref={componentRef}>
            <div className="general-info-preview">
               <h3>
                  {generalInfo.firstName} {generalInfo.lastName}
               </h3>
               <div className="contact-info">
                  <div>
                     <PhoneIphone /> {generalInfo.phone}
                  </div>
                  <div>
                     <Email /> {generalInfo.email}
                  </div>
                  <div>
                     <LocationPin /> {generalInfo.city}, {generalInfo.country}
                  </div>
               </div>
            </div>

            <div className="section-preview">
               <h3>Work Experience</h3>
               {workHistory.map((job, index) => (
                  <div key={index}>
                     <div className="header">
                        <p>{job.jobTitle}</p>
                        <p>
                           {job.startDate} - {job.endDate}
                        </p>
                     </div>
                     <div className="institution-info">
                        <span className="institution-name">{job.companyName}</span>
                        <span className="separator">|</span>
                        <span>{job.city}</span>
                     </div>
                     <p className="description">{job.description}</p>
                  </div>
               ))}
            </div>

            <div className="section-preview">
               <h3>Education</h3>
               {education.map((edu, index) => (
                  <div key={index}>
                     <div className="header">
                        <p>{edu.diplomaName}</p>
                        <p>
                           {edu.startDate} - {edu.endDate}
                        </p>
                     </div>
                     <div className="institution-info">
                        <span className="institution-name">{edu.schoolName}</span>
                        <span className="separator">|</span>
                        <span>{edu.city}</span>
                     </div>
                     <p className="description">{edu.description}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
