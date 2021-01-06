import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';

export default function WorkForm({ addWork }) {
  let [company, setCompany] = useState();
  let [entry, setEntry] = useState();
  let [ending, setEnding] = useState();
  let [role, setRole] = useState();

  return (
    <form
      className="inline-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.target.reset();
        addWork({ company, entry, ending, role });
      }}
    >
      <button type="submit" className="btn btn-circle btn-icon btn-primary">
        <BsPlus />
      </button>

      <div>
        <TextField
          onChange={(e) => setRole(e.target.value)}
          label="Role"
          variant="outlined"
          required
        />

        <TextField
          onChange={(e) => setCompany(e.target.value)}
          label="Company name"
          variant="outlined"
          required
        />

        <TextField
          onChange={(e) => setEntry(e.target.value)}
          label="Year of entry"
          variant="outlined"
          required
        />

        <TextField
          onChange={(e) => setEnding(e.target.value)}
          label="Year of ending"
          variant="outlined"
          required
        />
      </div>
    </form>
  );
}
