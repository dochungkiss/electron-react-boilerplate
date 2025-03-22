import { v4 as uuidv4 } from 'uuid';
import { db, Todo } from './db';

// Get all to do lists
export const getTodos = async (): Promise<Todo[]> => {
    return await db.todos.toArray();
};

// Add new todo
export const addTodo = async (todoData: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
 const id = uuidv4();
 const now = new Date();

 const newTodo: Todo = {
 ...todoData,
 id,
 createdAt: now,
 updatedAt: now
};
await db.todos.add(newTodo);
return id;
};

// Update todo
export const updateTodo = async (id: string, updates: Partial<Todo>): Promise<void> => {
    const updatedTodo = {
        ...updates,
        updatedAt: new Date()
    };

    await db.todos.update(id, updatedTodo);
};

// Delete todo
export const deleteTodo = async (id: string): Promise<void> => {
    await db.todos.delete(id);
};

// Search todo
export const getTodoById = async (id: string): Promise<Todo | undefined> => {
    return await db.todos.get(id);
};

