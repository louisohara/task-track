import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { pavanam } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  completed: CheckCircleIcon,
  incomplete: XCircleIcon,
  pending: ClockIcon,
  tasks: InboxIcon,
};

export default async function CardWrapper() {
  const {
    totalCompletedTasks,
    totalPendingTasks,
    numberOfProjects,
    numberOfTasks,
  } = await fetchCardData();
  return (
    <>
      <Card title="Total Tasks" value={numberOfTasks} type="tasks" />
      <Card
        title="Tasks not started"
        value={numberOfTasks - totalCompletedTasks - totalPendingTasks}
        type="incomplete"
      />
      <Card
        title="Tasks in progress"
        value={totalPendingTasks}
        type="pending"
      />
      <Card
        title="Tasks completed"
        value={totalCompletedTasks}
        type="completed"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'tasks' | 'incomplete' | 'pending' | 'completed';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${pavanam.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
