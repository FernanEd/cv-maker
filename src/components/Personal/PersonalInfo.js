import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useState } from 'react';

export default function PersonalInfo({
  name,
  role,
  email,
  phoneNumber,
  about,
}) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h2" component="h2">
          {name || 'Name'}
        </Typography>
        <Typography variant="h4" component="h4">
          {role || 'Your current role'}
        </Typography>
        <Typography component="p">{email || 'email@example.com'}</Typography>
        <Typography component="p">{phoneNumber || '(123)-456-789'}</Typography>
        <Typography variant="h4" component="h4">
          About me
        </Typography>
        <Typography>{about || 'Brief description about yourself.'}</Typography>
      </CardContent>
    </Card>
  );
}
