//import App from'./App.css';
import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import GenericInput from "./GenericInput";

export default function PersonalInfo({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({name, email, phone});
  }

    return (
        <form onSubmit={handleSubmit}>
          <div className="containerForm">
            <GenericInput
              label="Name"
              type="text"
              value={name} 
              onChange={setName}
              />
            <GenericInput
              label="Email"
              type="email"
              value={email} 
              onChange={setEmail}
              />
            <label>Phone:
            <PhoneInput
              defaultCountry="ua"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              />
            </label>
            <div className="button"> 
            <button type="submit">Submit</button>
            </div>
         </div>
        </form>
    );
  }

  
  
  