import InputField from '../../../../components/InputField/InputField';

interface EducationEntry {
   diplomaName: string;
   schoolName: string;
   city: string;
   startDate: string;
   endDate: string;
   description: string;
}

interface EducationProps {
   data: EducationEntry;
   onChange: (data: EducationEntry) => void;
}

export default function Education({ data, onChange }: EducationProps) {
   return (
      <section id="general-info">
         <h3>Share your education journey</h3>
         <p>Include your higher education details-degree, courses, or institution.</p>
         <div className="inputs-container">
            <InputField
               label="Degree, Diploma or Certificate"
               value={data.diplomaName}
               onChange={(val) => onChange({ ...data, diplomaName: val })}
            />
            <InputField
               label="School name"
               value={data.schoolName}
               onChange={(val) => onChange({ ...data, schoolName: val })}
            />
            <InputField label="City" value={data.city} onChange={(val) => onChange({ ...data, city: val })} />
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
