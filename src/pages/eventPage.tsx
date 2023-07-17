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

import * as React from 'react';
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function EventPage() {

  const nav = useNavigate()
  const addButton = <Button color="inherit" onClick={() => nav("add")}>Add Event</Button>
  const editButton = <Button color="inherit" onClick={() => nav(":id")}>Edit</Button>

  return (
      <Grid
        display="flex"
        direction="column" 
        alignItems="center"
      >
        <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
          All My Events
        </Typography>
        {addButton}
        <List>
          {generate(
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
              />
              {editButton}
            </ListItem>,
          )}
          
        </List>
      </Grid>
  );
}