import EducationInfo from "./EducationInfo"

export default function ContainerInfo({ personalData, educationData, experienceData }) {

return(
<div className="containerInputs">
    <h1>Curriculum Vitae</h1>
    <h3>Personal Info</h3>
      {personalData.name && <div>Name: {personalData.name}</div>}
      {personalData.email && <div>Email: {personalData.email}</div>}
      {personalData.phone && <div>Phone: {personalData.phone}</div>}
    <h3>Education</h3>
      {educationData.schoolName && <div>School: {educationData.schoolName}</div>} 
      {educationData.schoolTitle && <div>Title: {educationData.schoolTitle}</div>} 
      {educationData.schoolStartDate && <div>Start Date: {educationData.schoolStartDate}</div>} 
      {educationData.schoolConclusionDate && <div>Conclusion Date: {educationData.schoolConclusionDate}</div>} 
    <h3>Experience</h3>
      {experienceData.companyName && <div>Company: {experienceData.companyName}</div>} 
      {experienceData.companyTitle && <div>Company Title: {experienceData.companyTitle}</div>} 
      {experienceData.mainResponsibilities && <div>Main responsibilities: {experienceData.mainResponsibilities}</div>}
      {experienceData.startDate && <div>Start Date: {experienceData.startDate}</div>}
      {experienceData.resignationDate && <div>Resignation Date: {experienceData.resignationDate}</div>} 
</div>
)
}