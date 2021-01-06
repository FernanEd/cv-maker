import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

export default function WorkInfo({ works, removeWork, isEditing }) {
  return (
    <div className="timeline-wrapper">
      {works.map((work, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-item-date">
            {work.entry} - {work.ending}
          </div>
          <div className="timeline-item-body">
            <div className="timeline-title">{work.role}</div>
            <div className="timeline-subtitle">{work.company}</div>
          </div>
          <div className="timeline-item-controls">
            {isEditing ? (
              <button
                className="btn btn-icon btn-secondary btn-circle"
                onClick={() => removeWork(index)}
              >
                <BsTrash />
              </button>
            ) : null}
          </div>
        </div>
      ))}
      {works.length == 0 ? 'No work experience added yet!' : null}
    </div>
  );
}
