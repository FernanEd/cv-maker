import React, { useState } from 'react';
import EducationForm from './Education/EducationForm';
import EducationInfo from './Education/EducationInfo';

export default function EducationSection() {
  const [isEditing, setEditing] = useState(false);
  const toggleEditing = () => setEditing(!isEditing);

  const [schools, updateSchools] = useState([
    {
      institution: 'test school',
      entry: '2010',
      ending: '2020',
      acreditation: 'test engineering',
    },
  ]);

  const addSchool = (entry) => {
    let newSchools = [...schools];
    newSchools.push(entry);
    updateSchools(newSchools);
  };

  const removeSchool = (index) => {
    let newSchools = [...schools];
    newSchools.splice(index, 1);
    updateSchools(newSchools);
  };

  return (
    <div id="education-section">
      <button onClick={toggleEditing}>{isEditing ? 'Close' : 'Edit'}</button>
      {isEditing ? <EducationForm addSchool={addSchool} /> : null}{' '}
      <EducationInfo
        schools={schools}
        removeSchool={removeSchool}
        isEditing={isEditing}
      />
    </div>
  );
}
