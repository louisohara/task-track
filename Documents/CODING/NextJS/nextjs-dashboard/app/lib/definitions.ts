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
  color: string;
};

export type Task = {
  id: string;
  project_id: string;
  task: string;
  due_date: string;
  date: string;
  status: 'not started' | 'in progress' | 'completed';
};

export type Events = {
  id: string;
  start: string;
  end: string;
  title: string;
  color: string;
  name: string;
  project_id: string;
};
export type TaskDetails = {
  id: string;
  date: string;
  due_date: string;
  task: string;
  color: string;
  name: string;
  project_id: string;
};

export type LatestTask = {
  id: string;
  due_date: string;
  color: string;
  priority: 'high' | 'medium' | 'low';
  task: string;
  name: string;
};

export type TasksTable = {
  id: string;
  project_id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  color: string;
  due_date: string;
  task: string;
  status: 'not started' | 'in progress' | 'completed';
};

export type ProjectsTableType = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  color: string;
  total_tasks: number;
  total_pending: number;
  total_completed: number;
};

export type FormattedProjectsTable = {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  color: string;
  total_tasks: number;
  total_pending: number;
  total_completed: number;
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
  color: string;
};
