import './ActionButton.scss'
import type { ReactNode } from 'react';

interface ActionButtonProps {
   icon: ReactNode;
   onClick: () => void;
   type?: 'edit' | 'delete';
}

export default function ActionButton({ icon, onClick, type}: ActionButtonProps) {
   return (
      <button className={`action-button ${type}`} type="button" onClick={onClick}>
         {icon}
      </button>
   );
}