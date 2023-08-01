
// Loose contract

let task = {
  _id: '1234',
  name: 'My Task',
  descirption: 'A really super interesting thing to do',
  date: '2022-08-01',
  time: '12:00:00',
  notes: 'This is an example task',
  get id() {
    return this._id
  },
  set id(id) {
    this._id = id
  }
}


// Note, no contract on what to expect.
let otherTask = {
  name: "My other task"
}

let allTasks = [
  task,
  otherTask
]

export const getAllTasks = () => {
  return allTasks
}