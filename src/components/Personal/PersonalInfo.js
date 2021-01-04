import React, { useState } from 'react';

function PersonalInfo({ name, role, email, phoneNumber, about }) {
  return (
    <div>
      <div>{name || 'Name'}</div>
      <div>{role || 'Your current role'}</div>
      <div>{email || 'email@example.com'}</div>
      <div>{phoneNumber || '(123)-456-789'}</div>
      <div>{about || 'About me.'}</div>
    </div>
  );
}

export default PersonalInfo;
