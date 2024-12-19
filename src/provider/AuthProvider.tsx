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
import { createContext } from 'react';

export interface AuthContextType {
  user: string | null;
  isAuthenticated: () => boolean;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

const fakeAuthProvider = {
  isAuthenticated: false,

  // Creates a default signin function
  signin(callback: VoidFunction) {
    // Sets the authenticated value to true
    fakeAuthProvider.isAuthenticated = true;
    // Creates a fake lag time you may find in a normal login
    setTimeout(callback, 100); // fake async
  },

  // Creates a fake signout function
  signout(callback: VoidFunction) {
    // sets the authentication value to false
    fakeAuthProvider.isAuthenticated = false;

    // Creates a fake lag time similar to normal log outs
    setTimeout(callback, 100);
  },
};

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(null);

  const isAuthenticated = () => {
    return user && user != undefined && user != null;
  };

  const signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = {
    user: user,
    signin: signin,
    signout: signout,
    isAuthenticated: isAuthenticated,
  } as AuthContextType;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
