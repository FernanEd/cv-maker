import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default function Copyright() {
  return (
    <p>
      Made by{' '}
      <a href="https://github.com/FernanEd" target="_blank">
        <AiFillGithub />
        FernanEd
      </a>
      . 2020.
    </p>
  );
}
