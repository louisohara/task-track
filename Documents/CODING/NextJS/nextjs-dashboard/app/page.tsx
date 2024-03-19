import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { pavanam } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="relative flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <h1 className=" w-full text-[40px] md:text-[35px]">
            Welcome to Task Track
          </h1>
          <p
            className={`${pavanam.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}
          >
            Streamline your workflow, stay organised, and achieve your goals
            effortlessly with our intuitive task management solution.
          </p>
          <Link
            href="/dashboard"
            className="mt-6 flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/screens.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
