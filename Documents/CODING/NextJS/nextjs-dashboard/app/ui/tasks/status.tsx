import {
  XCircleIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TaskStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'not started',
          'bg-green-100 text-green-500': status === 'in progress',
          'bg-green-500 text-white': status === 'completed',
        },
      )}
    >
      {status === 'not started' ? (
        <>
          Not Started
          <XCircleIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'in progress' ? (
        <>
          In Progress
          <ClockIcon className="ml-1 w-4 text-green-500" />
        </>
      ) : null}
      {status === 'completed' ? (
        <>
          Completed
          <CheckCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
