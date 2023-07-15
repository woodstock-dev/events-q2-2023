// Copyright 2023 YOUR NAME HERE
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { TextField, Button, Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';

const AddEvents = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 400,
        p: 2,
      }}
    >
      <Typography
        variant='h5'
        component='h2'
        align='center'
        gutterBottom={true}
      >
        Create An Event
      </Typography>

      <Grid container direction='row' spacing={2}>
        <Grid item xs={6}>
          <DatePicker />
        </Grid>
        <Grid item xs={6}>
          <TimePicker
            label='Select a Time'
            defaultValue={dayjs('2022-04-17T15:30')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Event Description'
            variant='outlined'
            multiline
            rows={8}
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              m: 6,
            }}
            variant='contained'
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddEvents;
