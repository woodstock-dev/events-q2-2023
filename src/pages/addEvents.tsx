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
import { Box } from '@mui/system';

import Input from '@mui/base/Input';
import { TextField, Container, Button } from '@mui/material';

import FormControl from '@mui/base/FormControl';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';

const AddEvents = () => {
  return (
    <React.Fragment>
      {/**
       * Using Container component main to set default margin for form
       * Using CSSBaseline for consistency
       *  
       */}
      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        
       {/**
        * Mui Box component to build form styling
        */}

      <Box
        sx={{
          display: 'flex',
          mt: 20,
          flexDirection: 'column',
        }}
        >

          
        <DatePicker />
        <TimePicker
          label='Select a Time'
          defaultValue={dayjs('2022-04-17T15:30')}
        />
          <TextField label='Event Description' variant='outlined' />
          <Button
          sx={{
              m: 6,
            }}
          variant='contained'>Submit</Button>

        
        </Box>
        </Container>
    </React.Fragment>
  );
};

export default AddEvents;
