// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Project = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  image_url: string;
};

export type Task = {
  id: string;
  project_id: string;
  task: string;
  due_date: string;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'completed'.
  status: 'not started' | 'in progress' | 'completed';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestTask = {
  id: string;
  name: string;
  image_url: string;
  priority: 'high' | 'medium' | 'low';
  task: string;
};

export type TasksTable = {
  id: string;
  project_id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  image_url: string;
  date: string;
  task: string;
  status: 'not started' | 'in progress' | 'completed';
};

export type ProjectsTableType = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  image_url: string;
  total_tasks: number;
  total_pending: number;
  total_completed: number;
};

export type FormattedProjectsTable = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  image_url: string;
  total_tasks: number;
  total_pending: string;
  total_completed: string;
};

export type ProjectField = {
  id: string;
  name: string;
};

export type TaskForm = {
  id: string;
  project_id: string;
  task: string;
  status: 'not started' | 'in progress' | 'completed';
  due_date: string;
};
export type ProjectForm = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  image_url: string;
};
