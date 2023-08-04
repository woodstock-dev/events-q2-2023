// Copyright 2023 Ryan McGuinness
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

import { useState } from "react";
import AuthContext from "../context/authContext";
import { AuthContextType } from "../model/authentication";

/**
 * Is a supplier component for the auth context.
 * @param param0 - A single child element
 * @returns - A JSX.Element
 */
function Auth({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  
  const value : AuthContextType = {
    user: user, 
    signin(newUser: string, callback: VoidFunction) {
      setUser(newUser);
      callback();
    }, 
    signout(callback: VoidFunction) {
      setUser(null);
      callback();
    }, 
    isAuthenticated(): boolean {
      return user != null
    }
  }

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default Auth