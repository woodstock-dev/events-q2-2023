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