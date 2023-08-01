import { TaskContext } from "../context/TaskContext"
import React from "react"

export const useTasks = () => {
  return React.useContext(TaskContext)
}


