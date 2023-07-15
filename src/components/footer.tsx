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

import { Toolbar, Typography, colors, Link, styled } from '@mui/material'

  const Copyright = () => {

    return (
      <Typography variant="body2" color="white">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Heather Jackson
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const StyledToolbar = styled(Toolbar)({
      marginTop: 'auto',
      backgroundColor: colors.grey[900],
      display: 'flex',
      justifyContent: 'center' 
  })

  const Footer = () => {
    return(
      <StyledToolbar>
        <Copyright />
      </StyledToolbar>
    )
  }

export default Footer
