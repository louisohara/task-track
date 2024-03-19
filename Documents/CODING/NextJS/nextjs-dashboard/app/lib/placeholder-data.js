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
    name: 'Work',
    priority: 'high',
    color: '#0000FF',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Family',
    priority: 'high',
    color: '#00FF00',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Personal',
    priority: 'low',
    color: '#FFFF00',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Wellbeing',
    priority: 'medium',
    color: '#9933FF',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Social',
    priority: 'low',
    color: '#FF0000',
  },
];

const tasks = [
  {
    project_id: projects[0].id,
    task: 'Apply to job',
    status: 'in progress',
    date: '2022-12-06',
    due_date: '2024-03-30',
  },
  {
    project_id: projects[1].id,
    task: 'Call Mum',
    status: 'not started',
    date: '2024-04-01',
    due_date: '2024-04-02',
  },
  {
    project_id: projects[0].id,
    task: 'Refine CV',
    status: 'completed',
    date: '2022-10-29',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[2].id,
    task: 'Buy ingredients for dinner',
    status: 'completed',
    date: '2024-03-20',
    due_date: '2024-03-21',
  },
  {
    project_id: projects[2].id,
    task: 'Change bedding and put on wash',
    status: 'not started',
    date: '2024-03-19',
    due_date: '2024-03-17',
  },
  {
    project_id: projects[3].id,
    task: 'Call doctor and renew prescription',
    status: 'in progress',
    date: '2024-03-22',
    due_date: '2024-03-26',
  },
  {
    project_id: projects[1].id,
    task: 'Get dad a birthday present',
    status: 'not started',
    date: '2024-04-05',
    due_date: '2024-05-05',
  },
  {
    project_id: projects[3].id,
    task: 'Go for a run',
    status: 'completed',
    date: '2024-03-19',
    due_date: '2024-03-19',
  },
  {
    project_id: projects[4].id,
    task: 'Organise party and send invites',
    status: 'in progress',
    date: '2024-03-26',
    due_date: '2024-04-20',
  },
];

module.exports = {
  users,
  projects,
  tasks,
};
