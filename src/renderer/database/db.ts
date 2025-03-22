import Dexie from 'dexie';

// Todo interface
export interface Todo {
  id?: string; 
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  priority: number;  // 1: low, 2: medium, 3: high
  createdAt: Date;
  updatedAt: Date;
}

// Dexie DB class
class TodoDatabase extends Dexie {
  todos: Dexie.Table<Todo, string>;  // <Model type, key type>

  constructor() {
    super('TodoDatabase');
    
    // DB version and schema
    this.version(1).stores({
      todos: 'id, title, completed, dueDate, priority, createdAt, updatedAt'
    });
    
    // Table reference
    this.todos = this.table('todos');
  }
}

// New Instance and export
export const db = new TodoDatabase();