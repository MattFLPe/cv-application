//import App from'./App.css';
import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.js";
import EducationInfo from "./components/EducationInfo.js"
import ContainerInfo from "./components/container.js";
import ExperienceInfo from "./components/ExperienceInfo.js"

function App() {
  const [personalData, setPersonalData] = useState({ name: '', email: '', phone: '' });
  const [educationData, setEducationData] = useState({ schoolName: '', schoolTitle: '', schoolDate: '' });

  const handlePersonalSubmit = (data) => {
    setPersonalData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
  };

  const handleExperienceSubmit = (data) => {
    setEducationData(data);
  };

  return (
    <>
      <h3>Personal Info</h3>
      <PersonalInfo onSubmit={handlePersonalSubmit} />
      <h3>Education</h3>
      <EducationInfo onSubmit={handleEducationSubmit} />
      <h3>Experience</h3>
      <ExperienceInfo onSubmit={handleExperienceSubmit} />
      <ContainerInfo personalData={personalData} educationData={educationData} />
    </>
  );
}


export default App;
