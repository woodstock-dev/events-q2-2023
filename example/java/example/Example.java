package example;

import java.util.Date;
import java.util.UUID;
import java.util.List;

public class Example {

  static class Task {
    private String id = UUID.randomUUID().toString();
    private String name;
    private String description;
    private Date dateAndTime;
    private int durationInMinutes = 60;
    private String notes;
    public Task() {

    }

    public Task(String id, String name) {
      this.id = id;
      this.name = name;
    }
    public String getId() {
      return id;
    }
    public void setId(String id) {
      this.id = id;
    }
    public String getName() {
      return name;
    }
    public void setName(String name) {
      this.name = name;
    }
    public String getDescription() {
      return description;
    }
    public void setDescription(String description) {
      this.description = description;
    }
    public Date getDateAndTime() {
      return dateAndTime;
    }
    public void setDateAndTime(Date dateAndTime) {
      this.dateAndTime = dateAndTime;
    }
    public int getDurationInMinutes() {
      return durationInMinutes;
    }
    public void setDurationInMinutes(int durationInMinutes) {
      this.durationInMinutes = durationInMinutes;
    }
    public String getNotes() {
      return notes;
    }
    public void setNotes(String notes) {
      this.notes = notes;
    }
  }

  public static void main(String[] args) {
    Task t1 = new Task("1234", "My Task");
    t1.setDescription("A really cool task");

    Task t2 = new Task("1235", "My Other Task");
    t2.setNotes("Looking forward to teaching Java");

    List<Task> allTasks = List.of(t1, t2);

    allTasks.forEach(t -> System.out.println(t.getName()));

  }
}