import { fetchFilteredCustomers } from '@/app/lib/data';
import { customers } from '@/app/lib/placeholder-data';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/invoices/pagination';
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
  const customers = await fetchFilteredCustomers(query);
  return (
    <Suspense fallback={<TableRowSkeleton />}>
      <CustomersTable customers={customers} />
    </Suspense>
  );
}
