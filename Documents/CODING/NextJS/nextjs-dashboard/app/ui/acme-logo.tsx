import { BoltIcon } from '@heroicons/react/24/outline';
import { pavanam } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${pavanam.className} flex w-full flex-row items-center leading-none text-white`}
    >
      <BoltIcon className="absolute right-0 top-0 m-4 h-12 w-12 md:m-2 md:h-16 md:w-16" />
      <p className=" w-full text-[44px] md:text-[44px]">Task Track</p>
    </div>
  );
}
