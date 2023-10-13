import { Component } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  task?: Task;
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) { }

  createTask() {
    this.task = new Task(this.title, this.description, false);
    this.taskService.addTask(this.task);
  }
}
