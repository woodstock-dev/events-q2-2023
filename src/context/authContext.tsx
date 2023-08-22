import React from "react";
import { AuthContextType } from "../model/authentication";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AuthContext = React.createContext<AuthContextType>(null!);

export default AuthContext