import { sql } from '@vercel/postgres';
import {
  ProjectField,
  ProjectsTableType,
  TaskForm,
  TasksTable,
  LatestTask,
  User,
  Revenue,
  Project,
  ProjectForm,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    // console.log('Data fetch completed after 3 seconds.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestTasks() {
  noStore();
  try {
    const data = await sql<LatestTask>`
      SELECT tasks.task, tasks.due_date, projects.name, projects.image_url, projects.priority, tasks.id
      FROM tasks
      JOIN projects ON tasks.project_id = projects.id
      ORDER BY tasks.due_date DESC
      LIMIT 5`;

    const latestTasks = data.rows.map((task) => ({
      ...task,
    }));
    return latestTasks;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest tasks.');
  }
}

export async function fetchCardData() {
  noStore();
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const taskCountPromise = sql`SELECT COUNT(*) FROM tasks`;
    const projectCountPromise = sql`SELECT COUNT(*) FROM projects`;
    const taskStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'completed' THEN task ELSE 0 END) AS "completed",
         SUM(CASE WHEN status = 'in progress' THEN task ELSE 0 END) AS "pending"
         FROM tasks`;

    const data = await Promise.all([
      taskCountPromise,
      projectCountPromise,
      taskStatusPromise,
    ]);

    const numberOfTasks = Number(data[0].rows[0].count ?? '0');
    const numberOfProjects = Number(data[1].rows[0].count ?? '0');
    const totalCompletedTasks = Number(data[2].rows[0].completed.count ?? '0');
    const totalPendingTasks = Number(data[2].rows[0].pending.count ?? '0');

    return {
      numberOfProjects,
      numberOfTasks,
      totalCompletedTasks,
      totalPendingTasks,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredTasks(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const tasks = await sql<TasksTable>`
      SELECT
        tasks.id,
        tasks.task,
        tasks.date,
        tasks.due_date,
        tasks.status,
        projects.name,
        projects.priority,
        projects.image_url
      FROM tasks
      JOIN projects ON tasks.project_id = projects.id
      WHERE
        projects.name ILIKE ${`%${query}%`} OR
        projects.priority ILIKE ${`%${query}%`} OR
        tasks.task ILIKE ${`%${query}%`} OR
        tasks.date::text ILIKE ${`%${query}%`} OR
        tasks.status ILIKE ${`%${query}%`}
      ORDER BY tasks.due_date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return tasks.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch tasks.');
  }
}

export async function fetchTasksPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM tasks
    JOIN projects ON tasks.project_id = projects.id
    WHERE
      projects.name ILIKE ${`%${query}%`} OR
      projects.priority ILIKE ${`%${query}%`} OR
      tasks.task ILIKE ${`%${query}%`} OR
      tasks.date::text ILIKE ${`%${query}%`} OR
      tasks.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of tasks.');
  }
}

export async function fetchTaskById(id: string) {
  noStore();
  try {
    const data = await sql<TaskForm>`
      SELECT
        tasks.id,
        tasks.project_id,
        tasks.task,
        tasks.status,
        tasks.due_date
      FROM tasks
      WHERE tasks.id = ${id};
    `;

    const task = data.rows.map((task) => ({
      ...task,
    }));

    return task[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch task.');
  }
}

export async function fetchProjectById(id: string) {
  noStore();
  try {
    const data = await sql<ProjectForm>`
      SELECT
        projects.id,
        projects.name,
        projects.priority,
        projects.image_url
      FROM projects
      WHERE projects.id = ${id};
    `;

    const project = data.rows.map((project) => ({
      ...project,
    }));
    console.log(project);
    return project[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch project.');
  }
}

export async function fetchProjects() {
  noStore();
  try {
    const data = await sql<ProjectField>`
      SELECT
        id,
        name
      FROM projects
      ORDER BY name ASC
    `;

    const projects = data.rows;
    return projects;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all projects.');
  }
}

export async function fetchFilteredProjects(query: string) {
  noStore();
  try {
    const data = await sql<ProjectsTableType>`
		SELECT
		  projects.id,
		  projects.name,
		  projects.priority,
		  projects.image_url,
		  COUNT(tasks.id) AS total_tasks,
		  SUM(CASE WHEN tasks.status = 'in progress' THEN tasks.task ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN tasks.status = 'completed' THEN tasks.task ELSE 0 END) AS total_completed
		FROM projects
		LEFT JOIN tasks ON projects.id = tasks.project_id
		WHERE
		  projects.name ILIKE ${`%${query}%`} OR
        projects.priority ILIKE ${`%${query}%`}
		GROUP BY projects.id, projects.name, projects.priority, projects.image_url
		ORDER BY projects.name ASC
	  `;

    const projects = data.rows.map((project) => ({
      ...project,
      total_pending: formatCurrency(project.total_pending),
      total_completed: formatCurrency(project.total_completed),
    }));

    return projects;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch project table.');
  }
}

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
