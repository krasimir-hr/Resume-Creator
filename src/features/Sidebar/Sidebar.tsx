import './Sidebar.scss';

export default function Sidebar() {
   return (
      <aside>
         <div className="logo-container">
            <h1>CV Builder</h1>
         </div>

         <ul className="steps">
            <li>
               <span>1</span>General Information
            </li>
            <li>
               <span>2</span>Work history
            </li>
            <li>
               <span>3</span>Education
            </li>
            <li>
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
