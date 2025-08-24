import InputField from '../../../../components/InputField/InputField';

import './GeneralInfo.scss'

interface GeneralInformationEntry {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   postalCode: string;
   city: string;
   country: string;
}

interface GeneralInformationProps {
   data: GeneralInformationEntry;
   onChange: (data: GeneralInformationEntry) => void;
}

export default function GeneralInformation({ data, onChange }: GeneralInformationProps) {
   return (
      <section id="general-info">
         <h3>What’s the best way for employers to contact you?</h3>
         <p>We suggest including an email and phone number.</p>

         <div className="inputs-container">
            <InputField
               label="First name"
               value={data.firstName}
               onChange={(val) => onChange({ ...data, firstName: val })}
            />
            <InputField
               label="Last name"
               value={data.lastName}
               onChange={(val) => onChange({ ...data, lastName: val })}
            />

            <InputField label="City" value={data.city} onChange={(val) => onChange({ ...data, city: val })} />

            <div className="location-container">
               <InputField
                  label="Postal code"
                  value={data.postalCode}
                  onChange={(val) => onChange({ ...data, postalCode: val })}
               />

               <InputField
                  label="Country"
                  value={data.country}
                  onChange={(val) => onChange({ ...data, country: val })}
               />
            </div>

            <InputField label="Phone" value={data.phone} onChange={(val) => onChange({ ...data, phone: val })} />

            <InputField label="Email" value={data.email} onChange={(val) => onChange({ ...data, email: val })} />
         </div>
      </section>
   );
}
