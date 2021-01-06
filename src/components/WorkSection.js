import React, { useState } from 'react';
import WorkForm from './Work/WorkForm';
import WorkInfo from './Work/WorkInfo';
import { BsPencil, BsX } from 'react-icons/bs';

export default function WorkSection() {
  const [isEditing, setEditing] = useState(false);
  const [works, updateWorks] = useState([
    {
      company: 'Vallen Proveedora',
      entry: '2020',
      ending: '2035',
      role: 'Programador principal',
    },
    {
      company: 'Vallen Proveedora',
      entry: '2020',
      ending: '2035',
      role: 'Programador principal',
    },
  ]);

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const addWork = (entry) => {
    let newWorks = [...works];
    newWorks.push(entry);
    updateWorks(newWorks);
  };

  const removeWork = (index) => {
    let newWorks = [...works];
    newWorks.splice(index, 1);
    updateWorks(newWorks);
  };

  return (
    <div id="work-section">
      <h2 className="section-title">Work experience</h2>
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
      {isEditing ? <WorkForm addWork={addWork} /> : null}{' '}
      <WorkInfo works={works} removeWork={removeWork} isEditing={isEditing} />
    </div>
  );
}
