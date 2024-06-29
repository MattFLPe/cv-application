import { useState } from "react"
import PersonalInfo from "./PersonalInfo";
import ContainerInfo from "./container";
import GenericInput from "./GenericInput";

export default function EducationInfo({ onSubmit }) {
    const [schoolName, setschoolName] = useState('');
    const [schoolTitle, setschoolTitle] = useState('');
    const [schoolDate, setschoolDate] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ schoolName, schoolTitle, schoolDate });
      }

    return (
        <form onSubmit={handleSubmit}>
          <div className="containerForm">
            <GenericInput
              label="School"
              type="text"
              value={schoolName} 
              onChange={setschoolName}
              />
              <GenericInput
              label="Title"
              type="text"
              value={schoolTitle} 
              onChange={setschoolTitle}
              />
              <GenericInput
              label="Date"
              type="date"
              value={schoolDate} 
              onChange={setschoolDate}
              />
                <div className="button">
                    <button type="submit">Submit</button>
                </div>
         </div>
        </form>
    )
}