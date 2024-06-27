//import App from'./App.css';
import { useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


export default function PersonalInfo() {
  const [name, setName] = useState('');
  const [submittedName, setsubmittedName] = useState('');
  const [email, setEmail] = useState('');
  const [submittedEmail, setsubmittedEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submittedPhone, setsubmittedPhone] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmittedName(name);
    setsubmittedEmail(email);
    setsubmittedPhone(phone);
  }

    return (
        <form onSubmit={handleSubmit}>
          <div className="containerForm">
            <label>Name:
            <input 
              type="text"
              value={name} 
              onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>Email:
            <input 
              type="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>Phone Number:
            <PhoneInput
              defaultCountry="ua"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              />
            </label>

          
            <div className="button"> 
            <button type="submit">Submit</button>
            </div>
            <div className="containerInputs">
            Name: {submittedName && <div>{submittedName}</div>}
            <br />
            Email: {submittedEmail && <div>{submittedEmail}</div>}
            <br />
            Phone: {submittedPhone && <div>{submittedPhone}</div>}
            </div>
         </div>
        </form>
    );
  }
  
  
  