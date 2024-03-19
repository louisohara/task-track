import Image from 'next/image';
import { UpdateTask, DeleteTask } from '@/app/ui/tasks/buttons';
import TaskStatus from '@/app/ui/tasks/status';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchFilteredTasks } from '@/app/lib/data';
import TaskPriority from './priority';

export default async function TasksTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const tasks = await fetchFilteredTasks(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {tasks?.map((task) => (
              <div
                key={task.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <div
                        style={{ backgroundColor: task.color }}
                        className="h-7 w-7 rounded-full border-2"
                      />
                      <p>{task.name}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <p className="text-sm text-gray-500">
                      {' '}
                      <TaskPriority priority={task.priority} />
                    </p>
                    <TaskStatus status={task.status} />
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">{task.task}</p>
                    <p>{formatDateToLocal(task.due_date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateTask id={task.id} />
                    <DeleteTask id={task.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Task
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Priority
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Project
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date due
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tasks?.map((task) => (
                <tr
                  key={task.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <div
                        style={{ backgroundColor: task.color }}
                        className="h-7 w-7 rounded-full border-2"
                      />
                      <p>{task.task}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TaskPriority priority={task.priority} />
                  </td>
                  <td className="whitespace-nowrap px-6 py-3">{task.name}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(task.due_date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <TaskStatus status={task.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateTask id={task.id} />
                      <DeleteTask id={task.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
