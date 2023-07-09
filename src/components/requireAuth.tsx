import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/auth"
import { ReactNode } from "react"

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useAuth()
  if (!auth || !auth.user) {
    <Navigate to={'/'} />
  } else {
    return({children})
  }
}

export default RequireAuth