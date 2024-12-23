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
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { ReactNode } from 'react';
import React from 'react';

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  if (!auth || !auth.user) {
    return <Navigate to={'/'} />;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};
export default RequireAuth;
