import Image from "next/image"

export const HeaderPrimary = () =>{
    return(
        <header className="flex items-center justify-start py-10 px-[105px]">
            <div className="flex items-center gap-1 cursor-pointer">
                <Image 
                src='/logo.svg'
                height={45}
                width={45}
                alt="logo dindin"
                />
                <h1 className="text-white font-bold text-4xl">
                Dindin
                </h1>
            </div>
        </header>
    )
}