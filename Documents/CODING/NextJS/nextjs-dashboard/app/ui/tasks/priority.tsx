import clsx from 'clsx';

export default function TaskPriority({ priority }: { priority: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-red-600 text-white': priority === 'high',
          'bg-orange-100 text-orange-600': priority === 'medium',
          'bg-yellow-100 text-yellow-600': priority === 'low',
        },
      )}
    >
      {priority === 'high' ? <>High</> : null}
      {priority === 'medium' ? <>Medium</> : null}
      {priority === 'low' ? <>Low</> : null}
    </span>
  );
}
