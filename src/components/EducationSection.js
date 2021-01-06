import React, { useState } from 'react';
import EducationForm from './Education/EducationForm';
import EducationInfo from './Education/EducationInfo';
import { BsPencil, BsX } from 'react-icons/bs';

export default function EducationSection() {
  const [isEditing, setEditing] = useState(false);
  const toggleEditing = () => setEditing(!isEditing);

  const [schools, updateSchools] = useState([
    {
      institution: 'UNE',
      entry: '2018',
      ending: '2021',
      acreditation: 'Ing. sistemas computacionales y electronicos',
    },
    {
      institution: 'UNE',
      entry: '2018',
      ending: '2021',
      acreditation: 'Ing. sistemas computacionales y electronicos',
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
      <h2 className="section-title">Education</h2>
      {isEditing ? (
        <button
          onClick={toggleEditing}
          class="btn btn-icon btn-primary btn-circle btn-fixed"
        >
          <BsX />
        </button>
      ) : (
        <button
          onClick={toggleEditing}
          class="btn btn-icon btn-primary btn-circle btn-fixed"
        >
          <BsPencil />
        </button>
      )}
      {isEditing ? <EducationForm addSchool={addSchool} /> : null}{' '}
      <EducationInfo
        schools={schools}
        removeSchool={removeSchool}
        isEditing={isEditing}
      />
    </div>
  );
}
