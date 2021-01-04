import React, { useState } from 'react';

function PersonalForm({
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
    <form>
      <input value={name} onChange={updateName} placeholder="Enter your name" />
      <input value={role} onChange={updateRole} placeholder="Enter your role" />
      <input
        value={email}
        onChange={updateEmail}
        placeholder="Enter your email"
      />
      <input
        value={phoneNumber}
        onChange={updatePhoneNumber}
        placeholder="Enter your phone number"
      />
      <textarea
        value={about}
        onChange={updateAbout}
        placeholder="Write about you"
      />
    </form>
  );
}

export default PersonalForm;
