import './NextButton.scss'

interface NextButtonProps {
   onClick: () => void;
   disabled?: boolean;
}

export default function NextButton({
   onClick,
   disabled = false,
}: NextButtonProps) {
   return (
      <button type="button" onClick={onClick} disabled={disabled} className='next-button'>
         Next
      </button>
   )
}