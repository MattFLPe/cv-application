//import App from'./App.css';
import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import GenericInput from "./GenericInput";
import useEditButton from "./EditButton";

export default function PersonalInfo({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [buttonState, setButtonState] = useState(false);
  const [buttonEditState, setButtonEditState] = useState(true); 
/*
  const handleEdit = () => {
    setButtonEditState
  }
*/
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({name, email, phone});
    setButtonState(true);
    setButtonEditState(false);
  }

  useEditButton(setButtonState, setButtonEditState, "personalInfoEditButton");

    return (
        <form onSubmit={handleSubmit}>
          <div className="containerForm">
          <h3>Personal Info</h3>
            <GenericInput
              label="Name"
              type="text"
              value={name} 
              onChange={setName}
              disabled={buttonState}
              />
            <GenericInput
              label="Email"
              type="email"
              value={email} 
              onChange={setEmail}
              disabled={buttonState}
              />
            <label>Phone:
            <PhoneInput
              defaultCountry="ua"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              disabled={buttonState}
              />
            </label>
            <div className="button">
                <button 
                type="submit"
                disabled={buttonState}
                >{buttonState ? 'Submitted' : 'Submit'}
                </button>
                <button 
                className="personalInfoEditButton"
                type="button"
                disabled={buttonEditState}
                >Edit
                </button>
            </div>
         </div>
        </form>
    );
  }

  
  
  