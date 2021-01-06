import { Button, Container } from '@material-ui/core';
import React, { useState } from 'react';
import WorkForm from './Work/WorkForm';
import WorkInfo from './Work/WorkInfo';

export default function WorkSection() {
  const [isEditing, setEditing] = useState(false);
  const [works, updateWorks] = useState([
    {
      company: 'test company',
      entry: '2010',
      ending: '2015',
      role: 'ceo of test',
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
    <div>
      <button onClick={toggleEditing}>{isEditing ? 'Close' : 'Edit'}</button>
      {isEditing ? <WorkForm addWork={addWork} /> : null}{' '}
      <WorkInfo works={works} removeWork={removeWork} />
    </div>
  );
}
