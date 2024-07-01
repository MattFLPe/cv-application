//import App from'./App.css';
import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo.js";
import EducationInfo from "./components/EducationInfo.js"
import ContainerInfo from "./components/container.js";
import ExperienceInfo from "./components/ExperienceInfo.js"

function App() {
  const [personalData, setPersonalData] = useState({ name: '', email: '', phone: '' });
  const [educationData, setEducationData] = useState({ schoolName: '', schoolTitle: '', schoolStartDate: '', schoolConclusionDate: ''});
  const [experienceData, setExperienceData] = useState({ companyName: '', companyTitle: '', mainResponsibilities: '', startDate: '', resignationDate: ''});


  const handlePersonalSubmit = (data) => {
    setPersonalData(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
  };

  const handleExperienceSubmit = (data) => {
    setExperienceData(data);
  };

  return (
    <>
      <PersonalInfo onSubmit={handlePersonalSubmit} />
      <EducationInfo onSubmit={handleEducationSubmit} />
      <ExperienceInfo onSubmit={handleExperienceSubmit} />
      <ContainerInfo personalData={personalData} educationData={educationData} experienceData={experienceData}/>
    </>
  );
}


export default App;
