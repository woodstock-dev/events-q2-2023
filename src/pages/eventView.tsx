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

// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import {DateRangeCalendar} from '@mui/x-date-pickers-pro/DateRangeCalendar';

// export default function EventViewProp() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
//         <DemoItem label="1 calendar">
//           <DateRangeCalendar calendars={1} />
//         </DemoItem>
//         <DemoItem label="2 calendars">
//           <DateRangeCalendar calendars={2} />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function GutterlessList() {
  return (
    <Grid container
    position='absolute'
     top='175px'
     left='60px'
    direction='column'
     alignContent='center'
    > 
    <Typography
    sx={{mt:5, mb:2}}
    variant='h4'
    component="div"
    >
        Event List
    </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
      {[1, 2, 3].map((value) => (
      <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`Line item ${value}`} />
        </ListItem>
      ))}
    </List>
    </Grid>
  );
}