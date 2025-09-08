import { useState, useEffect } from 'react';
import InputField from '../../../../components/InputField/InputField';
import AddButton from '../../../../components/AddButton/AddButton';
import ActionButton from '../../../../components/ActionButton/ActionButton';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './Education.scss';

export interface EducationEntry {
   diplomaName: string;
   schoolName: string;
   city: string;
   startDate: string;
   endDate: string;
   description: string;
}

interface EducationProps {
   data: EducationEntry[];
   onChange: (data: EducationEntry[]) => void;
}

export default function Education({ data, onChange }: EducationProps) {
   const [showForm, setShowForm] = useState(data.length === 0);
   const [editingIndex, setEditingIndex] = useState<number | null>(null);
   const [formData, setFormData] = useState<EducationEntry>({
      diplomaName: '',
      schoolName: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
   });

   useEffect(() => {
      if (editingIndex !== null) {
         setFormData(data[editingIndex]);
         setShowForm(true);
      }
   }, [editingIndex, data]);

   function handleSave() {
      if (editingIndex !== null) {
         const updated = [...data];
         updated[editingIndex] = formData;
         onChange(updated);
      } else {
         onChange([...data, formData]);
      }

      setFormData({ diplomaName: '', schoolName: '', city: '', startDate: '', endDate: '', description: '' });
      setEditingIndex(null);
      setShowForm(false);
   }

   function handleDelete(index: number) {
      const updated = data.filter((_, i) => i !== index);
      onChange(updated);
   }

   return (
      <section id="education">
         <h3>Share your education journey</h3>
         <p>Include your higher education details-degree, courses, or institution.</p>

         {data.map((edu, index) => (
            <div key={index}>
               {editingIndex === index && showForm ? (
                  <div className="inputs-container">
                     <InputField
                        label="Degree, Diploma or Certificate"
                        value={formData.diplomaName}
                        onChange={(val) => setFormData({ ...formData, diplomaName: val })}
                     />

                     <div className="bundled-inputs">
                        <InputField
                           label="End date"
                           value={formData.endDate}
                           onChange={(val) => setFormData({ ...formData, endDate: val })}
                        />
                        <InputField
                           label="Start date"
                           value={formData.startDate}
                           onChange={(val) => setFormData({ ...formData, startDate: val })}
                        />
                     </div>

                     <InputField
                        label="School name"
                        value={formData.schoolName}
                        onChange={(val) => setFormData({ ...formData, schoolName: val })}
                     />

                     <InputField
                        className="text-area"
                        label="Description"
                        value={formData.description}
                        onChange={(val) => setFormData({ ...formData, description: val })}
                        as="textarea"
                     />
                     <InputField
                        label="Location"
                        value={formData.city}
                        onChange={(val) => setFormData({ ...formData, city: val })}
                     />

                     <AddButton label="Save" onClick={handleSave} />
                  </div>
               ) : (
                  <div className="education-card">
                     <h4>
                        {edu.diplomaName}, {edu.schoolName}
                     </h4>
                     <p>
                        {edu.city} | {edu.startDate} - {edu.endDate}
                     </p>
                     <p className="edu-desc">{edu.description}</p>

                     <div className="action-btns">
                        <ActionButton
                           icon={<EditIcon style={{ fontSize: 30 }} />}
                           type="edit"
                           onClick={() => setEditingIndex(index)}
                        />
                        <ActionButton
                           icon={<DeleteIcon style={{ fontSize: 30 }} />}
                           type="delete"
                           onClick={() => handleDelete(index)}
                        />
                     </div>
                  </div>
               )}
            </div>
         ))}

         {showForm && editingIndex === null && (
            <div className="inputs-container">
               <InputField
                  label="Degree, Diploma or Certificate"
                  value={formData.diplomaName}
                  onChange={(val) => setFormData({ ...formData, diplomaName: val })}
               />

               <div className="bundled-inputs">
                  <InputField
                     label="Start date"
                     value={formData.startDate}
                     onChange={(val) => setFormData({ ...formData, startDate: val })}
                  />
                  <InputField
                     label="End date"
                     value={formData.endDate}
                     onChange={(val) => setFormData({ ...formData, endDate: val })}
                  />
               </div>

               <InputField
                  label="School name"
                  value={formData.schoolName}
                  onChange={(val) => setFormData({ ...formData, schoolName: val })}
               />

               <InputField
                  className="text-area"
                  label="Description"
                  value={formData.description}
                  onChange={(val) => setFormData({ ...formData, description: val })}
                  as="textarea"
               />
               <InputField
                  label="Location"
                  value={formData.city}
                  onChange={(val) => setFormData({ ...formData, city: val })}
               />

               <AddButton label="Save" onClick={handleSave} />
            </div>
         )}

         {!showForm && (
            <AddButton
               label={data.length > 0 ? 'Add another education' : 'Add education'}
               onClick={() => setShowForm(true)}
            ></AddButton>
         )}
      </section>
   );
}
