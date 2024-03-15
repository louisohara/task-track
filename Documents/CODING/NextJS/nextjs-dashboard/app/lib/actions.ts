'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  id: z.string(),
  projectId: z.string({
    invalid_type_error: 'Please select a project.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
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
  imageUrl: z.string({
    invalid_type_error: 'Please select an image_url',
  }),
});

export type State = {
  errors?: {
    projectId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
export type StateProject = {
  errors?: {
    name?: string[];
    priority?: string[];
    imageUrl?: string[];
  };
  message?: string | null;
};

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
const CreateProject = FormSchemaProject.omit({ id: true, date: true });
const UpdateProject = FormSchemaProject.omit({ id: true, date: true });

export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    projectId: formData.get('projectId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { projectId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  try {
    await sql`
      INSERT INTO invoices (project_id, amount, status, date)
      VALUES (${projectId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function createProject(
  prevState: StateProject,
  formData: FormData,
) {
  const validatedFields = CreateProject.safeParse({
    name: formData.get('name'),
    priority: formData.get('priority'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create project.',
    };
  }

  const { name, priority, imageUrl } = validatedFields.data;

  try {
    await sql`
        INSERT INTO projects (name, priority, image_url)
        VALUES (${name}, ${priority}, ${imageUrl})
      `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create project.',
    };
  }
  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    projectId: formData.get('projectId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }

  const { projectId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
        UPDATE invoices
        SET project_id = ${projectId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateProject(
  id: string,
  prevState: StateProject,
  formData: FormData,
) {
  const validatedFields = UpdateProject.safeParse({
    name: formData.get('name'),
    priority: formData.get('priority'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update project.',
    };
  }

  const { name, priority, imageUrl } = validatedFields.data;

  try {
    await sql`
          UPDATE projects
          SET name = ${name}, priority = ${priority}, image_url = ${imageUrl}
          WHERE id = ${id}
        `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update project.' };
  }

  revalidatePath('/dashboard/projects');
  redirect('/dashboard/projects');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
