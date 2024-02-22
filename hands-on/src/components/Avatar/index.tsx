'use client'
import Image from "next/image"
import iconProfile from "@/assets/icon/icon-profile.svg"
import { Modal } from "../Modal"
import { useState } from "react";
import { FormEditUser } from "../Forms/FromEditUser";

export const Avatar = () =>{
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openCloseModal = () => {
        setIsOpen(!isOpen);
    }
    
    return(
        <>
            <div className="flex justify-center items-center" onClick={openCloseModal}>
                <Image src={iconProfile} alt="profile" height={41} width={41} />
                <strong className="text-white ">Daniel</strong>
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