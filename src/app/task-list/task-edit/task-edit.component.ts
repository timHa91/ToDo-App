import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task = {
    id: '',
    title: '',
    description: '',
    completed: false
  };

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const foundTask = this.taskService.getTask(id);
      if (foundTask !== undefined) {
        this.task = foundTask;
      }
    }
  }

  editTask() {
    this.taskService.updateTask(this.task)
  }



}
