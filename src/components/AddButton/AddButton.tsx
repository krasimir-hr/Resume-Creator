import './AddButton.scss'

interface AddButtonProps {
   onClick: () => void;
   disabled?: boolean;
   label?: string;
}

export default function AddButton({
   onClick,
   disabled = false,
   label = '',
}: AddButtonProps) {
   return (
      <button type="button" onClick={onClick} disabled={disabled} className="add-button">
         {label}
      </button>
   )
}