import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function EducationForm({ addSchool }) {
  let [institution, setInstitution] = useState();
  let [entry, setEntry] = useState();
  let [ending, setEnding] = useState();
  let [acreditation, setAcreditation] = useState();

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
        addSchool({ institution, entry, ending, acreditation });
      }}
    >
      <Button type="submit" variant="contained" color="primary">
        Add Entry
      </Button>

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

      <TextField
        onChange={(e) => setAcreditation(e.target.value)}
        label="Acreditation"
        variant="outlined"
        required
      />
    </form>
  );
}
