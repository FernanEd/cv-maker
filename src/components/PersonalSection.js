import React, { useState } from 'react';
import PersonalForm from './Personal/PersonalForm';
import PersonalInfo from './Personal/PersonalInfo';

function PersonalSection() {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [about, setAbout] = useState();

  const toggleEditing = () => {
    setEditing(!isEditing);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateRole = (e) => {
    setRole(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const updateAbout = (e) => {
    setAbout(e.target.value);
  };

  let display;

  if (isEditing)
    display = (
      <PersonalForm
        {...{
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
        }}
      />
    );
  else
    display = <PersonalInfo {...{ name, role, email, phoneNumber, about }} />;

  return (
    <div>
      <button onClick={toggleEditing}>Edit</button> {display}
    </div>
  );
}

export default PersonalSection;