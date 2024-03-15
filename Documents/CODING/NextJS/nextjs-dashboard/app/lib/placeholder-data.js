// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
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
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Get Rich',
    priority: 'high',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Die trying',
    priority: 'low',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Lose weight',
    priority: 'medium',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Build this app',
    priority: 'low',
    image_url: '/customers/steph-dietz.png',
  },
];

const tasks = [
  {
    project_id: projects[0].id,
    description: 'Random Task',
    status: 'pending',
    date: '2022-12-06',
    due_date: '2024-03-17',
  },
  // {
  //   project_id: projects[1].id,
  //   task: 'Random Task',
  //   status: 'pending',
  //   date: '2022-11-14',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[4].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2022-10-29',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[3].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-09-10',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[2].id,
  //   task: 'Random Task',
  //   status: 'pending',
  //   date: '2023-08-05',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[2].id,
  //   task: 'Random Task',
  //   status: 'pending',
  //   date: '2023-07-16',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[1].id,
  //   task: 'Random Task',
  //   status: 'pending',
  //   date: '2023-06-27',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[3].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-06-09',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[4].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-06-17',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[1].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-06-07',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[1].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-08-19',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[0].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-06-03',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[2].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-06-18',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[0].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2023-10-04',
  //   due_date: '2024-03-17',
  // },
  // {
  //   project_id: projects[2].id,
  //   task: 'Random Task',
  //   status: 'completed',
  //   date: '2022-06-05',
  //   due_date: '2024-03-17',
  // },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  projects,
  tasks,
  revenue,
};
