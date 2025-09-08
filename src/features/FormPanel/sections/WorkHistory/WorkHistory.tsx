import { useState, useEffect } from 'react';
import InputField from '../../../../components/InputField/InputField';
import AddButton from '../../../../components/AddButton/AddButton';
import ActionButton from '../../../../components/ActionButton/ActionButton';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import './WorkHistory.scss';

export interface WorkHistoryEntry {
   jobTitle: string;
   companyName: string;
   city: string;
   startDate: string;
   endDate: string;
   description: string;
}

interface WorkHistoryProps {
   data: WorkHistoryEntry[];
   onChange: (data: WorkHistoryEntry[]) => void;
}

export default function WorkHistory({ data, onChange }: WorkHistoryProps) {
   const [showForm, setShowForm] = useState(data.length === 0);
   const [editingIndex, setEditingIndex] = useState<number | null>(null);
   const [formData, setFormData] = useState<WorkHistoryEntry>({
      jobTitle: '',
      companyName: '',
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

      setFormData({ jobTitle: '', companyName: '', city: '', startDate: '', endDate: '', description: '' });
      setEditingIndex(null);
      setShowForm(false);
   }

   function handleDelete(index: number) {
      const updated = data.filter((_, i) => i !== index);
      onChange(updated);
   }

   return (
      <section id="work-history">
         <h3>Tell us about your working experience</h3>

         <p>
            Provide the required info to the best of your knowledge. If some details are unavailable, feel free to leave
            them out
         </p>

         {data.map((job, index) => (
            <div key={index}>
               {editingIndex === index && showForm ? (
                  <div className="inputs-container">
                     <InputField
                        label="Job title"
                        value={formData.jobTitle}
                        onChange={(val) => setFormData({ ...formData, jobTitle: val })}
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
                        label="Employer"
                        value={formData.companyName}
                        onChange={(val) => setFormData({ ...formData, companyName: val })}
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
                  <div className="job-card">
                     <h4>
                        {job.jobTitle}, {job.companyName}
                     </h4>
                     <p>
                        {job.city} | {job.startDate} - {job.endDate}
                     </p>
                     <p className="job-desc">{job.description}</p>

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
                  label="Job title"
                  value={formData.jobTitle}
                  onChange={(val) => setFormData({ ...formData, jobTitle: val })}
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
                  label="Employer"
                  value={formData.companyName}
                  onChange={(val) => setFormData({ ...formData, companyName: val })}
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
               label={data.length > 0 ? 'Add another job' : 'Add work experience'}
               onClick={() => setShowForm(true)}
            />
         )}
      </section>
   );
}
