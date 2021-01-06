import { TextField } from '@material-ui/core';
import React, { useState } from 'react';

export default function PersonalForm({
  name,
  role,
  email,
  phoneNumber,
  about,
  updateName,
  updateRole,
  updateEmail,
  updatePhoneNumber,
  updateAbout,
}) {
  return (
    <form className="form">
      <TextField
        value={name}
        onChange={updateName}
        label="Full name"
        variant="outlined"
        required
      />

      <TextField
        value={role}
        onChange={updateRole}
        label="Current role"
        variant="outlined"
        required
      />

      <TextField
        value={email}
        onChange={updateEmail}
        label="Email"
        variant="outlined"
        required
      />

      <TextField
        value={phoneNumber}
        onChange={updatePhoneNumber}
        label="Phone number"
        variant="outlined"
        required
      />

      <TextField
        value={about}
        onChange={updateAbout}
        label="About you"
        variant="outlined"
        multiline
        required
      />
    </form>
  );
}
