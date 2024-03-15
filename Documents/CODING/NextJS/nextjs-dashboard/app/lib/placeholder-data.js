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
    email: 'low',
    image_url: '/customers/steph-dietz.png',
  },
];

const invoices = [
  {
    project_id: projects[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    project_id: projects[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    project_id: projects[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    project_id: projects[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    project_id: projects[2].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    project_id: projects[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    project_id: projects[1].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    project_id: projects[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    project_id: projects[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    project_id: projects[1].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    project_id: projects[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    project_id: projects[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    project_id: projects[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    project_id: projects[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    project_id: projects[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
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
  invoices,
  revenue,
};
