import { fetchFilteredProjects } from '@/app/lib/data';
import { projects } from '@/app/lib/placeholder-data';
import ProjectsTable from '@/app/ui/projects/table';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/tasks/pagination';
import Search from '@/app/ui/search';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const projects = await fetchFilteredProjects(query);
  return (
    <Suspense fallback={<TableRowSkeleton />}>
      <ProjectsTable projects={projects} />
    </Suspense>
  );
}
