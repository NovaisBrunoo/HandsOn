'use client'

import { FormEditUser } from "../Forms/FromEditUser";
import { Modal } from "../Modal";

import { getItemObject } from "@/utils/localStorageUtils";
import Image from "next/image";
import { useState } from "react";

export const Avatar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openCloseModal = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <div className="flex justify-center items-center" onClick={openCloseModal}>
        <Image
          src="/assets/icon/icon-profile.svg"
          alt="profile"
          height={41}
          width={41}
        />
        <strong className="text-white ">{getItemObject('user').name}</strong>
      </div>
      <Modal
        title="Editar Perfil"
        isOpen={isOpen}
        onClose={openCloseModal}
      >
        <FormEditUser />
      </Modal>
    </>
  )
}