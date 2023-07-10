// Copyright 2023 Cody Black
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

import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";

const Header = () => {
  const displayHeader = () => {
    return <Toolbar>{Nav}</Toolbar>
  }
  const Nav = (<Typography variant="h6" component="h1">
  Events List
</Typography>)
   return (
    <React.Fragment>
      <header>
      <AppBar>{displayHeader()}</AppBar>
    </header>
    </React.Fragment>
   )
}
export default Header;