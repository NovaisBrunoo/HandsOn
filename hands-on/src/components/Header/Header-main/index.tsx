import logoDindi from "@/assets/icon/icon-dindin.svg"
import iconLogout from "@/assets/icon/icon-logout.svg"
import iconProfile from "@/assets/icon/icon-profile.svg"

import Image from "next/image"


export default function HeaderMain() {
  return (
    <div className="w-full h-20 bg-gradient-to-r from-[#05EDE3] to-[#645FFB] absolute top-0 left-0 right-0">
      <div className="w-full h-full flex justify-between items-center px-24 ">
        <div className="w-40 h-full flex">
          <Image src={logoDindi} alt="logo" height={43} width={116} />
        </div>
        <div className="w-32 h-full flex items-center justify-center gap-3">
          <div className="flex justify-center items-center">
            <Image src={iconProfile} alt="profile" height={41} width={41} />
            <strong className="text-white ">Daniel</strong>
          </div>

          <div className="flex justify-normal items-center ">
            <Image
              className="cursor-pointer"
              src={iconLogout}
              alt="logout"
              height={19}
              width={19}
            />

          </div>
        </div>
      </div>

    </div>
  )

}