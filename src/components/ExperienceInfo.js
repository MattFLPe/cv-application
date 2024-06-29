import { useState } from "react"
import PersonalInfo from "./PersonalInfo";
import ContainerInfo from "./container";
import GenericInput from "./GenericInput";

export default function ExperienceInfo({ onSubmit }) {
    const [companyName, setcompanyName] = useState("");
    const [companyTitle, setcompanyTitle] = useState("");
    const [mainResponsibilities, setmainResponsibilities] = useState("");



const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ companyName, companyTitle, mainResponsibilities })
}

return (
    <form onSubmit={handleSubmit}>
        <div className="containerForm">
            <GenericInput
              label="Company"
              type="text"
              value={companyName} 
              onChange={setcompanyName}
              />
              <GenericInput
              label="Position title"
              type="text"
              value={companyTitle} 
              onChange={setcompanyTitle}
              />
              <label>Main responsibilities:
              <textarea
              type="text"
              value={mainResponsibilities} 
              onChange={setmainResponsibilities}
              />
              </label>
              <GenericInput
              label="Start Date"
              type="date"
              value={Date} 
              onChange={Date}
              />
              <GenericInput
              label="Resignation Date"
              type="date"
              value={Date} 
              onChange={Date}
              />
              <div className="button">
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>
)

}