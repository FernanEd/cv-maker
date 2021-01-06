import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

export default function WorkInfo({ works, removeWork }) {
  return (
    <div>
      <div>
        {works.map((work, index) => (
          <Box key={index} display="flex">
            <Typography variant="h4" component="h4">
              {work.role}
            </Typography>
            <Typography component="p">{work.company}</Typography>
            <Typography component="p">{work.entry} </Typography>
            <Typography component="p">{work.ending}</Typography>
            <Button
              onClick={() => removeWork(index)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </Box>
        ))}
      </div>
    </div>
  );
}
