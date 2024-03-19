import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { pavanam } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${pavanam.className} flex w-full flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="w-full text-[30px] md:text-[44px]">Task Track</p>
    </div>
  );
}
