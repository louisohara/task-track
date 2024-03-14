import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import CustomerForm from '@/app/ui/customers/create-form';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/Customers/create',
            active: true,
          },
        ]}
      />
      <CustomerForm />
    </main>
  );
}
