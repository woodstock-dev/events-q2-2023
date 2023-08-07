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
import {Container} from '@mui/material';
import { Grid, TextField } from '@mui/material';
import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const EventForm = ()=> {
  return(
    <React.Fragment>
      <Container sx={{alignContent: "center",
        felxDirection:"column"}}
        >
        <Grid
        alignContent='center'
        flexDirection='column'
        position='absolute'
        top='150px'
        left='70px'
        >
          <Grid>
            <Typography>Choose an Event</Typography>
            </Grid>
            {/* { <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" />
      </DemoContainer>
            </LocalizationProvider> } */}
            <Grid>
              <TextField required
              margin='normal'
          id="outlined-required"
          label="Required"
          defaultValue="Event Name"/>
              </Grid>
              
              <Grid>
                <TextField id="standard-multiline-static"
          label="Multiline"
          margin='normal'
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"/>
              </Grid>
              <Grid>
              <TextField required
          id="outlined-required"
          label="Required"
          defaultValue="Location"/>
              </Grid>
        </Grid>
        </Container>
    </React.Fragment>
  )
}
export default EventForm;