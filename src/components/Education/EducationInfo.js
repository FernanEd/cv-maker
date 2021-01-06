import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

export default function EducationInfo({ schools, removeSchool, isEditing }) {
  return (
    <div className="timeline-wrapper">
      {schools.map((school, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-item-date">
            {school.entry} - {school.ending}
          </div>
          <div className="timeline-item-body">
            <div className="timeline-title">{school.acreditation}</div>
            <div className="timeline-subtitle">{school.institution}</div>
          </div>
          <div className="timeline-item-controls">
            <button
              className="btn btn-icon btn-secondary"
              onClick={() => removeSchool(index)}
            >
              <BsTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
