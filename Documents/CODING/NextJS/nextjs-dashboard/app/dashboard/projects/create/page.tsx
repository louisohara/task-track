import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import ProjectForm from '@/app/ui/projects/create-form';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Projects', href: '/dashboard/projects' },
          {
            label: 'Create Project',
            href: '/dashboard/projects/create',
            active: true,
          },
        ]}
      />
      <ProjectForm />
    </main>
  );
}
