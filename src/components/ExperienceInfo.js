import { useState } from "react"
import GenericInput from "./GenericInput";
import useEditButton from "./EditButton";


export default function ExperienceInfo({ onSubmit }) {
    const [companyName, setcompanyName] = useState("");
    const [companyTitle, setcompanyTitle] = useState("");
    const [mainResponsibilities, setmainResponsibilities] = useState("");
    const [startDate, setstartDate] = useState("");
    const [resignationDate, setresignationDate] = useState("");
    const [buttonState, setButtonState] = useState(false);
    const [buttonEditState, setButtonEditState] = useState(true); 

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ companyName, companyTitle, mainResponsibilities, startDate, resignationDate })
    setButtonState(true);
    setButtonEditState(false);
}

useEditButton(setButtonState, setButtonEditState, "experienceInfoEditButton");

return (
    <form onSubmit={handleSubmit}>
        <div className="containerFormExp">
            <GenericInput
              label="Company"
              type="text"
              value={companyName} 
              onChange={setcompanyName}
              disabled={buttonState}
              />
              <GenericInput
              label="Position title"
              type="text"
              value={companyTitle} 
              onChange={setcompanyTitle}
              disabled={buttonState}
              />
              <label>Main responsibilities:
              <textarea
              type="text"
              value={mainResponsibilities} 
              onChange={(e) => setmainResponsibilities(e.target.value)}
              disabled={buttonState}
              />
              </label>
              <GenericInput
              label="Start Date"
              type="date"
              value={startDate} 
              onChange={setstartDate}
              disabled={buttonState}
              />
              <GenericInput
              label="Resignation Date"
              type="date"
              value={resignationDate} 
              onChange={setresignationDate}
              disabled={buttonState}
              />
            <div className="button">
              <button 
                type="submit"
                disabled={buttonState}
                >{buttonState ? 'Submitted' : 'Submit'}
                </button>
                <button 
                className="experienceInfoEditButton"
                type="button"
                disabled={buttonEditState}
                >Edit
                </button>
            </div>
        </div>
    </form>
)

}