import { Navigate } from "react-router-dom"
import useAuth from "../hooks/authHook"
import { ReactNode } from "react"
import React from "react"

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useAuth()
  if (!auth || !auth.user) {
    return(<Navigate to={'/'} />)
  } else {
    return(
      <React.Fragment>{children}</React.Fragment>)
  }
}
export default RequireAuth
