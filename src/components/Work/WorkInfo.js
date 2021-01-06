import React, { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

export default function WorkInfo({ works, removeWork }) {
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
            <button
              className="btn btn-icon btn-secondary"
              onClick={() => removeWork(index)}
            >
              <BsTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
