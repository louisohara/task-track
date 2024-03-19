'use client';

import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { pavanam } from '@/app/ui/fonts';

import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import {
  Eventcalendar,
  getJson,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  setOptions,
  Toast,
} from '@mobiscroll/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});
export default async function Calendar({ events }) {
  const [isToastOpen, setToastOpen] = useState(false);
  const [toastText, setToastText] = useState();

  const myView = useMemo(
    () => ({
      calendar: {
        labels: true,
        popover: true,
        popoverClass: 'custom-event-popover',
      },
    }),
    [],
  );

  const handleToastClose = useCallback(() => {
    setToastOpen(false);
  }, []);

  const handleEventClick = useCallback((args) => {
    setToastText(args.event.title);
    setToastOpen(true);
  }, []);

  const customEventContent = useCallback(
    (data) => (
      <>
        <div>{data.title}</div>
        <div className="md-custom-event-cont">
          <div
            style={{ backgroundColor: data.color }}
            className="md-custom-event-img"
          ></div>
          <div className="mbsc-custom-event-name">{data.name}</div>
          <Link
            href={`/dashboard/tasks?page=1&query=${data.title
              .split(' ')
              .join('+')}`}
            className="md-custom-event-btn"
          >
            View task
          </Link>
        </div>
      </>
    ),
    [],
  );

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${pavanam.className} mb-4 text-xl md:text-2xl`}>
        Calendar
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <Eventcalendar
          clickToCreate={false}
          dragToCreate={false}
          dragToMove={false}
          dragToResize={false}
          eventDelete={false}
          data={events}
          renderEventContent={customEventContent}
          view={myView}
          onEventClick={handleEventClick}
        />
        <Toast
          message={toastText}
          isOpen={isToastOpen}
          onClose={handleToastClose}
        />
      </div>
    </div>
  );
}
