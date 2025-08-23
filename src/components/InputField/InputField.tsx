import './InputField.scss'

interface InputFieldProps {
   label: string;
   value: string;
   placeholder?: string;
   onChange: (value: string) => void;
   type?: string;
   as?: 'input' | 'textarea';
   className?: string;
}

export default function InputField({
   label,
   value,
   placeholder = '',
   onChange,
   type = 'text',
   as = 'input',
   className = '',
}: InputFieldProps) {
   return (
      <div className={`input-field ${className}`}>
         <label>{label}</label>
         {as === 'textarea' ? (
            <textarea value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
         ) : (
            <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
         )}
      </div>
   );
}
