import { pavanam } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {
  ProjectsTableType,
  FormattedProjectsTable,
  Project,
} from '@/app/lib/definitions';
import { CreateProject, DeleteProject, UpdateProject } from './buttons';
import TaskPriority from '../tasks/priority';
import Link from 'next/link';

export default async function ProjectsTable({
  projects,
}: {
  projects: FormattedProjectsTable[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${pavanam.className} mb-4 text-2xl md:text-2xl`}>
        Projects
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search projects..." />
        <CreateProject />
      </div>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
              <div className="md:hidden">
                {projects?.map((project) => (
                  <div
                    key={project.id}
                    className="relative mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className=" flex items-center justify-between border-b pb-4">
                      <div className="  w-full">
                        <div className=" mb-2 flex w-full flex-row items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              style={{ backgroundColor: project.color }}
                              className="h-7 w-7 rounded-full border-2"
                            />
                            <Link
                              href={`/dashboard/tasks?page=1&query=${project.name
                                .split(' ')
                                .join('+')}`}
                            >
                              <p>{project.name}</p>
                            </Link>
                          </div>

                          <p className="text-sm text-gray-500">
                            <TaskPriority priority={project.priority} />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between border-b py-5">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Tasks In Progress</p>
                        <p className="font-medium">{project.total_pending}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Tasks Completed</p>
                        <p className="font-medium">{project.total_completed}</p>
                      </div>
                    </div>
                    <div className="text-m m-0 pt-4">
                      <p>{project.total_tasks} tasks</p>
                    </div>
                    <div className="absolute bottom-2 right-4 flex justify-end gap-2">
                      <UpdateProject id={project.id} />
                      <DeleteProject id={project.id} />
                    </div>
                  </div>
                ))}
              </div>
              <table className="hidden min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Name
                    </th>

                    <th scope="col" className="px-3 py-5 font-medium">
                      Total tasks
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Tasks incomplete
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Tasks completed
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Priority
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {projects.map((project) => (
                    <tr key={project.id} className="group">
                      <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                        <div className="flex items-center gap-3">
                          <div
                            style={{ backgroundColor: project.color }}
                            className="h-7 w-7 rounded-full border-2"
                          />
                          <Link
                            href={`/dashboard/tasks?page=1&query=${project.name
                              .split(' ')
                              .join('+')}`}
                          >
                            <p>{project.name}</p>
                          </Link>
                        </div>
                      </td>

                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {project.total_tasks}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        {project.total_pending}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm ">
                        {project.total_completed}
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
                        <TaskPriority priority={project.priority} />
                      </td>
                      <td className="whitespace-nowrap bg-white px-4 py-5">
                        <div className="flex justify-end gap-2">
                          <UpdateProject id={project.id} />
                          <DeleteProject id={project.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
