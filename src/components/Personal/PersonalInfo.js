import React, { useState } from 'react';

export default function PersonalInfo({
  name,
  role,
  email,
  phoneNumber,
  about,
}) {
  return (
    <div>
      <h1>{name || 'Name'}</h1>
      <h2>{role || 'Your current role'}</h2>
      <p>{email || 'email@example.com'}</p>
      <p>{phoneNumber || '(123)-456-789'}</p>
      <h2 className="section-title">About you</h2>
      <p>{about || 'Brief description about yourself.'}</p>
    </div>
  );
}
