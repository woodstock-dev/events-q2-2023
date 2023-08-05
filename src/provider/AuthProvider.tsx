import React from "react";

// An interface describing the authentication context type.
export interface AuthContextType {
  user: string | null;
  isAuthenticated: () => boolean;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

// Create the Auth Context at the top level of the code
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const AuthContext = React.createContext<AuthContextType>(null!);

// This is a simple fake authentication provider
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

// The actual authentication provider, it's a components
// and therefore can store state
function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<string | null>(null);

  const isAuthenticated = () => {
    return user && user != undefined && user != null
  }

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
    isAuthenticated: isAuthenticated
  } as AuthContextType

  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider