'use client';

import { ProjectField, TaskForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateTask } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function EditTaskForm({
  task,
  projects,
}: {
  task: TaskForm;
  projects: ProjectField[];
}) {
  const initialState = { message: null, errors: {} };
  const updateTaskWithId = updateTask.bind(null, task.id);
  const [state, dispatch] = useFormState(updateTaskWithId, initialState);

  const convertDate = (inputString: string) => {
    const dateObject = new Date(inputString);

    const day = String(dateObject.getDate()).padStart(2, '0');
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const year = dateObject.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* project Name */}
        <div className="mb-4">
          <label htmlFor="project" className="mb-2 block text-sm font-medium">
            Choose project
          </label>
          <div className="relative">
            <select
              id="project"
              name="projectId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={task.project_id}
            >
              <option value="" disabled>
                Select a project
              </option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          {state.errors?.projectId &&
            state.errors.projectId.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Task task */}
        <div className="mb-4">
          <label htmlFor="task" className="mb-2 block text-sm font-medium">
            Write a task description
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="task"
                name="task"
                type="string"
                step="0.01"
                defaultValue={task.task}
                placeholder="Enter task description"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          {state.errors?.task &&
            state.errors.task.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>

        {/* Task Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the task status
          </legend>
          <div className="mb-4 rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="not started"
                  name="status"
                  type="radio"
                  value="not started"
                  defaultChecked={task.status === 'not started'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="not started"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Not Started <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="in progress"
                  name="status"
                  type="radio"
                  value="in progress"
                  defaultChecked={task.status === 'in progress'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="in progress"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  In Progress <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="completed"
                  name="status"
                  type="radio"
                  value="completed"
                  defaultChecked={task.status === 'completed'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="completed"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Completed <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
          {state.errors?.status &&
            state.errors.status.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </fieldset>
        <div className="mb-0">
          <label htmlFor="dueDate" className="mb-2 block text-sm font-medium">
            Select a due date
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="dueDate"
                name="dueDate"
                type="date"
                step="0.01"
                defaultValue={convertDate(task.due_date.toString())}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          {state.errors?.dueDate &&
            state.errors.dueDate.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/tasks"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit task</Button>
      </div>
    </form>
  );
}
