import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

export default function EducationForm({ addSchool }) {
  let [institution, setInstitution] = useState();
  let [entry, setEntry] = useState();
  let [ending, setEnding] = useState();
  let [acreditation, setAcreditation] = useState();

  return (
    <form
      className="inline-form"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
        addSchool({ institution, entry, ending, acreditation });
      }}
    >
      <button type="submit" className="btn btn-circle btn-icon btn-primary">
        <BsPlus />
      </button>

      <div>
        <TextField
          onChange={(e) => setAcreditation(e.target.value)}
          label="Acreditation"
          variant="outlined"
          required
        />

        <TextField
          onChange={(e) => setInstitution(e.target.value)}
          label="Institution"
          variant="outlined"
          required
        />

        <TextField
          onChange={(e) => setEntry(e.target.value)}
          type="number"
          label="Year of Entry"
          variant="outlined"
          required
        />

        <TextField
          onChange={(e) => setEnding(e.target.value)}
          type="number"
          label="Year of end"
          variant="outlined"
          required
        />
      </div>
    </form>
  );
}
