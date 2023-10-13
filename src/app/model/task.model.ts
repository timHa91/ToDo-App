import { v4 as uuidv4 } from 'uuid';

export class Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;

    constructor(title: string, description: string, completed: boolean, id?: string) {
        this.id = id || uuidv4();
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}