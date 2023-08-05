import React from "react";
import { AuthContext } from "../provider/AuthProvider";

export function useAuth() {
  return React.useContext(AuthContext);
}