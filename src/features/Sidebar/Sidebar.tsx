import './Sidebar.scss';

interface SidebarProps {
   setActiveSection: (section: string) => void;
}

export default function Sidebar({ setActiveSection }: SidebarProps) {
   return (
      <aside>
         <div className="logo-container">
            <h1>CV Builder</h1>
         </div>

         <ul className="steps">
            <li onClick={() => setActiveSection('general')}>
               <span>1</span>General Information
            </li>
            <li onClick={() => setActiveSection('work')}>
               <span>2</span>Work history
            </li>
            <li onClick={() => setActiveSection('education')}>
               <span>3</span>Education
            </li>
            <li onClick={() => setActiveSection('final')}>
               <span>4</span>Finalize
            </li>
         </ul>
         <p>Resume completeness:</p>
         <div className="resume-completeness">
            
            <div></div>
            <span id="completeness-pct">50%</span>
         </div>
      </aside>
   );
}
