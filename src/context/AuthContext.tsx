import React from "react";
import { AuthContextType, FakeAuthProvider } from "../model";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = React.createContext<AuthContextType>(null!);

// The actual authentication provider, it's a components
// and therefore can store state
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(null);

  const isAuthenticated = () => {
    return user && user != undefined && user != null
  }

  const signin = (newUser: string, callback: VoidFunction) => {
    return FakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return FakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value = {
    user: user, 
    signin: signin, 
    signout: signout, 
    isAuthenticated: isAuthenticated
  } as AuthContextType

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider