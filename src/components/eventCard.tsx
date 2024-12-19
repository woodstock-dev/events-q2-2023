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
import { Card, IconButton } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { CalendarIcon } from '@mui/x-date-pickers';
import { Delete, Edit } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { TaskContext } from '../@types/context';
import { createContext, useContext, useState } from 'react';

import { allTasks } from '../@types/context';
import { Task } from '../@types/context';

const data = allTasks;

const EventCard = ({ task }: { task: Task }) => {
  return (
    <Box sx={{ minWidth: 300 }}>
      <Card
        variant='outlined'
        sx={{
          border: '2px solid #004d40',
          borderRadius: '16px',
          m: 2,
        }}
      >
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ alignItems: 'center' }}
          >
            <Grid item xs={2}>
              <CalendarIcon fontSize='large' />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                disabled
                id='start-disabled'
                label='Event Start'
                defaultValue='Event Start'
              />
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TextField
                disabled
                id='end-disabled'
                label='Event End'
                defaultValue={data.map((T) => T.end)}
              />
            </Grid>
            <Grid item xs={2} sx={{}}>
              <IconButton>
                <Edit aria-label='delete' sx={{ color: '#36b457' }} />
              </IconButton>
              <IconButton>
                <Delete
                  aria-label='delete'
                  sx={{
                    color: 'red',
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container></Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EventCard;
