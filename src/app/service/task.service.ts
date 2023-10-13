import { Injectable } from '@angular/core';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    new Task(
      'Test',
      'heelloo',
      false
    ),
    new Task(
      'Test2',
      'heelloo2',
      false
    )
  ];

  addTask(newTask: Task) {
    let sizeBefore = this.tasks.length;
    this.tasks.push(newTask);
    let sizeAfter = this.tasks.length;
    if (sizeBefore < sizeAfter) {
      console.log(`Task ${newTask.title} got added`);
    }
    else console.log(`Could add task ${newTask.title}`);

  }

  markCompleted(id: string) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }

  deleteTask(id: string) {
    let sizeBefore = this.tasks.length;
    let index = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(index, 1);
    let sizeAfter = this.tasks.length;
    if (sizeBefore > sizeAfter) {
      console.log(`Task with id: ${id} got removed`);
    }
    else console.log(`Could not remove task with id: ${id}`);

  }

  updateTask(updatedTask: Task) {
    this.tasks.map(task => task.id === updatedTask.id ? task = updatedTask : task);
  }

  getTasks() {
    return this.tasks;
  }

  getTask(id: string) {
    return this.tasks.find(task => task.id === id);
  }



}
