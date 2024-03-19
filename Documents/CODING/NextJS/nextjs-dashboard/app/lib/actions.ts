'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// import { signIn } from '@/auth';
// import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),
  projectId: z.string({
    invalid_type_error: 'Please select a project.',
  }),
  task: z.string({
    invalid_type_error: 'Please enter a task description',
  }),
  status: z.enum(['not started', 'in progress', 'completed'], {
    invalid_type_error: 'Please select task progress status.',
  }),
  dueDate: z.string({
    invalid_type_error: 'Please select a due date.',
  }),
  date: z.string(),
});
const FormSchemaProject = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: 'Please enter a project name',
  }),
  priority: z.enum(['high', 'low', 'medium'], {
    invalid_type_error: 'Please select a priority level',
  }),
  color: z.string({
    invalid_type_error: 'Please select a colour',
  }),
});

export type State = {
  errors?: {
    projectId?: string[];
    task?: string[];
    status?: string[];
    dueDate?: string[];
  };
  message?: string | null;
};
export type StateProject = {
  errors?: {
    name?: string[];
    priority?: string[];
    color?: string[];
  };
  message?: string | null;
};

const CreateTask = FormSchema.omit({ id: true, date: true });
const UpdateTask = FormSchema.omit({ id: true, date: true });
const CreateProject = FormSchemaProject.omit({ id: true, date: true });
const UpdateProject = FormSchemaProject.omit({ id: true, date: true });

export async function createTask(prevState: State, formData: FormData) {
  const validatedFields = CreateTask.safeParse({
    projectId: formData.get('projectId'),
    task: formData.get('task'),
    status: formData.get('status'),
    dueDate: formData.get('dueDate'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Task.',
    };
  }

  const { projectId, task, status, dueDate } = validatedFields.data;

  const date = new Date().toISOString().split('T')[0];
  try {
    await sql`
      INSERT INTO tasks (project_id, task, status, date, due_date)
      VALUES (${projectId}, ${task}, ${status}, ${date}, ${dueDate})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Task.',
    };
  }
  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}

export async function createProject(
  prevState: StateProject,
  formData: FormData,
) {
  console.log(formData);
  const validatedFields = CreateProject.safeParse({
    name: formData.get('name'),
    priority: formData.get('priority'),
    color: formData.get('color'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create project.',
    };
  }

  const { name, priority, color } = validatedFields.data;

  try {
    await sql`
        INSERT INTO projects (name, priority, color)
        VALUES (${name}, ${priority}, ${color})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create project.',
    };
  }
  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function updateTask(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateTask.safeParse({
    projectId: formData.get('projectId'),
    task: formData.get('task'),
    status: formData.get('status'),
    dueDate: formData.get('dueDate'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Task.',
    };
  }

  const { projectId, task, status, dueDate } = validatedFields.data;

  try {
    await sql`
        UPDATE tasks
        SET project_id = ${projectId}, task = ${task}, status = ${status}, due_date= ${dueDate}
      
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Task.' };
  }

  revalidatePath('/dashboard/tasks');
  redirect('/dashboard/tasks');
}

export async function updateProject(
  id: string,
  prevState: StateProject,
  formData: FormData,
) {
  const validatedFields = UpdateProject.safeParse({
    name: formData.get('name'),
    priority: formData.get('priority'),
    color: formData.get('color'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update project.',
    };
  }

  const { name, priority, color } = validatedFields.data;

  try {
    await sql`
          UPDATE projects
          SET name = ${name}, priority = ${priority}, color = ${color}
          WHERE id = ${id}
        `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update project.' };
  }

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function deleteTask(id: string) {
  try {
    await sql`DELETE FROM tasks WHERE id = ${id}`;
    revalidatePath('/dashboard/tasks');
    return { message: 'Deleted Task.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Task.' };
  }
}
export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    revalidatePath('/dashboard/projects');
    return { message: 'Deleted project.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Project.' };
  }
}

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }
