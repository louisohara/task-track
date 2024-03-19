'use client';

import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateProject } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { ProjectForm, Project } from '@/app/lib/definitions';
import { useState } from 'react';

export default function EditProjectForm({ project }: { project: ProjectForm }) {
  const [currentColor, setCurrentColor] = useState<string>(project.color);
  const initialState = { message: null, errors: {} };
  const updateProjectWithId = updateProject.bind(null, project.id);
  const [stateProject, dispatch] = useFormState(
    updateProjectWithId,
    initialState,
  );
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(event.target.value);
  };
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
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
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
        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">
            Set the project&apos;s priority
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="low"
                  name="priority"
                  type="radio"
                  value="low"
                  defaultChecked={project.priority === 'low'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="low"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-medium text-yellow-600"
                >
                  Low
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="medium"
                  name="priority"
                  type="radio"
                  value="medium"
                  defaultChecked={project.priority === 'medium'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="medium"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-medium text-orange-600"
                >
                  Medium
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="high"
                  name="priority"
                  type="radio"
                  value="high"
                  defaultChecked={project.priority === 'high'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="high"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  High
                </label>
              </div>
            </div>
          </div>
          {stateProject.errors?.priority &&
            stateProject.errors.priority.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </fieldset>

        {/* Project color */}
        <div>
          <label htmlFor="color" className="mb-2 block text-sm font-medium">
            Select project color
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative flex">
              <input
                id="color"
                name="color"
                type="color"
                step="0.01"
                placeholder="Enter color"
                aria-describedby="color-error"
                onChange={handleColorChange}
                style={{ backgroundColor: currentColor }}
                className="peer block w-10 rounded-full border  border-gray-200 px-4 py-4 hover:cursor-pointer"
              />
            </div>
          </div>
          {stateProject.errors?.color &&
            stateProject.errors.color.map((error: string) => (
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
