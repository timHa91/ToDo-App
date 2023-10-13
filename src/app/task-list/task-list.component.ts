import { Component, Input } from '@angular/core';
import { Task } from '../model/task.model';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  searchText: string = '';
  selectedOption: string = '';

  constructor(private taskService: TaskService) { }

  createTask(newTask: Task) {
    this.taskService.addTask(newTask);
  }

  filterTasks() {
    if (this.selectedOption != '') {
      let completed: boolean;
      if (this.selectedOption === 'true') {
        completed = true;
      }
      else if (this.selectedOption === 'false') {
        completed = false;
      }
      return this.getTasks().filter(task => task.title.toLowerCase().includes(this.searchText.toLowerCase()) && task.completed === completed)
    }
    else return this.getTasks().filter(task => task.title.toLowerCase().includes(this.searchText.toLowerCase()))

  }

  getTasks() {
    return this.taskService.getTasks();
  }

  deleteTask(event: Event, id: string) {
    event.stopPropagation();
    event.preventDefault();
    this.taskService.deleteTask(id);
  }

  changeCompleted(event: Event, id: string) {
    event.stopPropagation();
    this.taskService.markCompleted(id);
  }
}
