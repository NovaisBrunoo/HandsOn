'use client';
import { Avatar } from "@/components/Avatar";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { remove } from "@/utils/localStorageUtils";

export default function HeaderMain() {
  const router = useRouter();

  return (
    <div className="w-full h-20 bg-gradient-to-r from-[#05EDE3] to-[#645FFB] absolute top-0 left-0 right-0">
      <div className="w-full h-full flex justify-between items-center px-24 ">
        <div className="w-40 h-full flex">
          <Image
            src='/logo.svg'
            alt="logo"
            height={43}
            width={43}
          />
        </div>
        <div className="w-32 h-full flex items-center justify-center gap-3 cursor-pointer">
          <Avatar />

          <div className="flex justify-normal items-center ">
            <Image
              className="cursor-pointer"
              src='/assets/icon/icon-logout.svg'
              alt="logout"
              height={19}
              width={19}

              onClick={() => {
                router.push('/')
                remove('user')
              }}
            />

          </div>
        </div>
      </div>
    </div>
  )

}