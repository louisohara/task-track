import Form from '@/app/ui/projects/edit-form';
import Breadcrumbs from '@/app/ui/tasks/breadcrumbs';
import { fetchProjectById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import EditProjectForm from '@/app/ui/projects/edit-form';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [project] = await Promise.all([fetchProjectById(id)]);

  if (!project) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'projects', href: '/dashboard/projects' },
          {
            label: 'Edit project',
            href: `/dashboard/projects/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditProjectForm project={project} />
    </main>
  );
}
