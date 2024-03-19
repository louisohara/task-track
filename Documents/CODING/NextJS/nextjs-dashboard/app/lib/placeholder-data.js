const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const projects = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Get a job',
    priority: 'high',
    color: '#ffff',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Get Rich',
    priority: 'high',
    color: '#cccc',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Die trying',
    priority: 'low',
    color: '255,255,255',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Lose weight',
    priority: 'medium',
    color: '0,0,0',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Build this app',
    priority: 'low',
    color: '#e83030',
  },
];

const tasks = [
  {
    project_id: projects[0].id,
    task: 'Random Task',
    status: 'in progress',
    date: '2022-12-06',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[1].id,
    task: 'Random Task',
    status: 'pending',
    date: '2022-11-14',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[4].id,
    task: 'Random Task',
    status: 'completed',
    date: '2022-10-29',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[3].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-09-10',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[2].id,
    task: 'Random Task',
    status: 'pending',
    date: '2023-08-05',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[2].id,
    task: 'Random Task',
    status: 'pending',
    date: '2023-07-16',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[1].id,
    task: 'Random Task',
    status: 'pending',
    date: '2023-06-27',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[3].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-06-09',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[4].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-06-17',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[1].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-06-07',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[1].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-08-19',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[0].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-06-03',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[2].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-06-18',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[0].id,
    task: 'Random Task',
    status: 'completed',
    date: '2023-10-04',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[2].id,
    task: 'Random Task',
    status: 'completed',
    date: '2022-06-05',
    due_date: '2024-03-17',
  },
];

module.exports = {
  users,
  projects,
  tasks,
};
