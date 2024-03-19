import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import LatestTasks from '@/app/ui/dashboard/latest-tasks';
import { pavanam } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  CardSkeleton,
  LatestTasksSkeleton,
  CalendarSkeleton,
} from '@/app/ui/skeletons';
import { fetchCalendar } from '@/app/lib/data';
import Calendar from '@/app/ui/dashboard/calendar.jsx';

export default async function Page() {
  const events = await fetchCalendar();

  return (
    <main>
      <h1 className={`${pavanam.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<CalendarSkeleton />}>
          <Calendar events={events} />
        </Suspense>
        <Suspense fallback={<LatestTasksSkeleton />}>
          <LatestTasks />
        </Suspense>
      </div>
    </main>
  );
}
