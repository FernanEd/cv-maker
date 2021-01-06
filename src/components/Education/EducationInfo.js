import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

export default function EducationInfo({ schools, removeSchool, isEditing }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      spacing={2}
    >
      {schools.map((school, index) => (
        <Grid item>
          <Paper key={index} elevation={2} variant="outlined">
            <Box p={2}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item direction="row">
                  <Box>
                    <Typography component="p" flex={1}>
                      {school.entry}
                    </Typography>
                    <Typography component="p" flex={1}>
                      {school.ending}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs>
                  <Typography variant="h4" component="h4" flex={1}>
                    {school.acreditation}
                  </Typography>
                  <Typography component="p" flex={1}>
                    {school.institution}
                  </Typography>
                </Grid>

                {isEditing ? (
                  <Grid item>
                    <Button
                      onClick={() => removeSchool(index)}
                      variant="contained"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </Grid>
                ) : null}
              </Grid>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
