import InputField from '../../../../components/InputField/InputField';

interface WorkHistoryEntry {
   jobTitle: string;
   companyName: string;
   city: string;
   startDate: string;
   endDate: string;
   description: string;
}

interface WorkHistoryProps {
   data: WorkHistoryEntry;
   onChange: (data: WorkHistoryEntry) => void;
}

export default function WorkHistory({ data, onChange }: WorkHistoryProps) {
   return (
      <section id="general-info">
         <h3>Tell us about your working experience</h3>

         <p>
            Provide the required info to the best of your knowledge. If some details are unavailable, feel free to leave
            them out
         </p>

         <div className="inputs-container">
            <InputField
               label="Job title"
               value={data.jobTitle}
               onChange={(val) => onChange({ ...data, jobTitle: val })}
            />
            <InputField
               label="Employer"
               value={data.companyName}
               onChange={(val) => onChange({ ...data, companyName: val })}
            />
            <InputField label="Location" value={data.city} onChange={(val) => onChange({ ...data, city: val })} />
            <InputField
               label="Start date"
               value={data.startDate}
               onChange={(val) => onChange({ ...data, startDate: val })}
            />
            <InputField label="End date" value={data.endDate} onChange={(val) => onChange({ ...data, endDate: val })} />
            <InputField
               label="Description"
               value={data.description}
               onChange={(val) => onChange({ ...data, description: val })}
               as="textarea"
            />
         </div>
      </section>
   );
}
