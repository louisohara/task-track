'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateProject } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { ProjectForm, Project } from '@/app/lib/definitions';

export default function EditProjectForm({ project }: { project: ProjectForm }) {
  const initialState = { message: null, errors: {} };
  const updateProjectWithId = updateProject.bind(null, project.id);
  const [stateProject, dispatch] = useFormState(
    updateProjectWithId,
    initialState,
  );
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Project Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Enter project name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                step="0.01"
                placeholder="Enter Project name"
                aria-describedby="name-error"
                defaultValue={project.name}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          {stateProject.errors?.name &&
            stateProject.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Project priority */}
        <div className="mb-4">
          <label htmlFor="priority" className="mb-2 block text-sm font-medium">
            Enter priority
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="priority"
                name="priority"
                type="string"
                step="0.01"
                placeholder="Enter Project priority"
                defaultValue={project.priority}
                aria-describedby="priority-error"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          {stateProject.errors?.priority &&
            stateProject.errors.priority.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Project Image */}
        <div className="mb-4">
          <label htmlFor="image" className="mb-2 block text-sm font-medium">
            Enter project image
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="image"
                name="imageUrl"
                type="string"
                step="0.01"
                placeholder="Enter image url"
                aria-describedby="imageUrl-error"
                defaultValue={project.image_url}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          {stateProject.errors?.imageUrl &&
            stateProject.errors.imageUrl.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/projects"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create project</Button>
      </div>
    </form>
  );
}
