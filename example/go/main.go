package main

import (
	"encoding/json"
	"fmt"
	"time"
)

type Task struct {
	Id                string
	Name              string
	Description       string
	Date              time.Time
	DurationInMinutes int
	Notes             string
}

func newTask(id string, name string) *Task {
	return &Task{
		Id:                id,
		Name:              name,
		Date:              time.Now(),
		DurationInMinutes: 60,
	}
}

func main() {
	t1 := newTask("1234", "My Task")
	t1.Description = "something really cool"

	t2 := newTask("1235", "My Other Task")
	t2.Notes = "Adding a note"

	var allTasks []*Task
	allTasks = append(allTasks, t1, t2)

	for i, t := range allTasks {
		doc, _ := json.Marshal(t)
		fmt.Printf("%d) %s\n", i, doc)
	}
}
