import { useState } from "react"
import GenericInput from "./GenericInput";
import useEditButton from "./EditButton";

export default function EducationInfo({ onSubmit }) {
    const [schoolName, setschoolName] = useState('');
    const [schoolTitle, setschoolTitle] = useState('');
    const [schoolStartDate, setschoolStartDate] = useState('');
    const [schoolConclusionDate, setschoolConclusionDate] = useState('');
    const [buttonState, setButtonState] = useState(false);
    const [buttonEditState, setButtonEditState] = useState(true); 

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ schoolName, schoolTitle, schoolStartDate, schoolConclusionDate });
        setButtonState(true);
        setButtonEditState(false);
      }

      useEditButton(setButtonState, setButtonEditState, "educationInfoEditButton");

    return (
        <form onSubmit={handleSubmit}>
          <div className="containerFormEd">
            <GenericInput
              label="School"
              type="text"
              value={schoolName} 
              onChange={setschoolName}
              disabled={buttonState}
              />
              <GenericInput
              label="Title"
              type="text"
              value={schoolTitle} 
              onChange={setschoolTitle}
              disabled={buttonState}
              />
              <GenericInput
              label="Start Date"
              type="date"
              value={schoolStartDate} 
              onChange={setschoolStartDate}
              disabled={buttonState}
              />
              <GenericInput
              label="Conclusion Date"
              type="date"
              value={schoolConclusionDate} 
              onChange={setschoolConclusionDate}
              disabled={buttonState}
              />
              <div className="button">
                <button 
                type="submit"
                disabled={buttonState}
                >{buttonState ? 'Submitted' : 'Submit'}
                </button>
                <button 
                className="educationInfoEditButton"
                type="button"
                disabled={buttonEditState}
                >Edit
                </button>
              </div>
         </div>
        </form>
    )
}